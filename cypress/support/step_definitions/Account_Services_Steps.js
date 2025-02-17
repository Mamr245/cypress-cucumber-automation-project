import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import AccountServices_PO from "../page_objects/Account_Services_PO";

const accountServicesPage = new AccountServices_PO();
const amountToTransfer = '50' ;

var fromAccount;
var toAccount;
var fromAccountInitialAmount; 
var toAccountInitialAmount;
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

When(`I click on the Transfer Funds link`, () => {
    cy.get('#accountTable').find('a').first().invoke('text').then((accountNumberID) => {
        fromAccount = accountNumberID;  
        cy.get(`a[href*="${fromAccount}"]`).parent().siblings().first().invoke('text').then((accountAmount) => {
            fromAccountInitialAmount = Number(accountAmount.replace('$',''));        
        })         
    })

    cy.get('#accountTable').find('a').last().invoke('text').then((accountNumberID) => {
        toAccount = accountNumberID; 
        cy.get(`a[href*="${toAccount}"]`).parent().siblings().first().invoke('text').then((accountAmount) => {
            toAccountInitialAmount = Number(accountAmount.replace('$',''));    
        })         
    })

    accountServicesPage.clickTransferFundsLink();
})

When(`I select a from account`, () => {
    accountServicesPage.selectFromAccount(fromAccount);
})

When(`I select a to account`, () => {
    accountServicesPage.selecToAccount(toAccount);
})


When(`I click on the Update Contact Info link`, () => {
    accountServicesPage.clickUpdateContactInfoLink();
})

When(`I select the Checking option`, () => {
    accountServicesPage.selectChekckingAccountOption();
})

When(`I select the Savings option`, () => {
    accountServicesPage.selectSavingsAccountOption();
})

When(`I type a valid amount to transfer`, () => {
    accountServicesPage.typeAmountToTransfer(amountToTransfer);
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

When(`I click on the Transfer button`, () => {
    accountServicesPage.clickTransferButton();
})

When(`The updated account values are shown in the account overview`, () => {
    finalFromAccountAmount = fromAccountInitialAmount - Number(amountToTransfer);
    finalToAccountAmount = toAccountInitialAmount + Number(amountToTransfer);

    accountServicesPage.clickAccountsOverviewLink();

    cy.get(`a[href*="${fromAccount}"]`).parent().siblings().first().should('have.text', `$${finalFromAccountAmount.toFixed(2)}`);
    cy.get(`a[href*="${toAccount}"]`).parent().siblings().first().should('have.text', `$${finalToAccountAmount.toFixed(2)}`);
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

Then(`I should be able to access my account`, () => {
    cy.fixture(accountServicesPage.userData).then((data)  => {
        cy.get('#leftPanel > p').contains('Welcome');
        cy.get('#leftPanel > p').contains(data.firstName + ' ' + data.lastName);
    })
})

Then(`A succes message with the transfer information is shown`, () => {
    cy.get('#showResult > h1').should('have.text', 'Transfer Complete!');
    cy.get('#amountResult').contains(amountToTransfer); 
    cy.get('#fromAccountIdResult').contains(fromAccount);
    cy.get('#toAccountIdResult').contains(toAccount);
})