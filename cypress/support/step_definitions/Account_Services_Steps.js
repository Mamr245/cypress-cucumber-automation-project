import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import AccountServices_PO from "../page_objects/AccountServices_PO";
import Homepage_PO from "../page_objects/Homepage_PO";


const accountServicesPage = new AccountServices_PO();
var checkingAccountNumber;
var newAccountNumber;

Then(`I should be able to view my account overview`, () => {
    cy.get('#showOverview > h1').contains("Accounts Overview");
    cy.get('#accountTable').should('be.visible');
    cy.get('#accountTable').find('a').should('be.visible');
    cy.get('#accountTable').find('a').first().invoke('text').then((accountNumberID) => {
        assert(parseInt(accountNumberID), "Value isn't an integer!");
        checkingAccountNumber = accountNumberID;        
    })
})

When(`I click on the Open New Account link`, () => {
    accountServicesPage.clickOpenNewAccountLink();
})

When(`I select the Checking option`, () => {
    accountServicesPage.selectChekckingAccountOption();
})

When(`I select the Savings option`, () => {
    accountServicesPage.selectSavingsAccountOption();
})

When(`I select an account from which to transfer funds`, () => {
    accountServicesPage.selectFromAccount(checkingAccountNumber);
})

When(`I click on the Open New Account button`, () => {
    accountServicesPage.clickOpenNewAccountButton();
})

When(`The new account is visible in the account overview`, () => {
    accountServicesPage.clickAccountsOverviewLink();
    cy.get('#accountTable').find(`a[href*="id=${newAccountNumber}"]`)
})

When(`It has the right amount of money`, () => {
    cy.get(`a[href*="${newAccountNumber}"]`).parent().siblings().first().should('have.text', '$100.00');
    cy.get(`a[href*="${newAccountNumber}"]`).parent().siblings().last().should('have.text', '$100.00');
})

When(`I click on the Log Out link`, () => {
    accountServicesPage.clickLogOutButton();
})

Then(`A success message and my new account number are shown`, () => {
    cy.get('#openAccountResult > h1').should('have.text', 'Account Opened!');
    cy.get('#openAccountResult').contains('Congratulations, your account is now open.');
    cy.get('#openAccountResult').contains('Your new account number:');
    cy.get('a[href*="id="').invoke('text').then((newAccountId) => {
        assert(parseInt(newAccountId), "Value isn't an integer!");
        newAccountNumber = newAccountId;
    })
})

