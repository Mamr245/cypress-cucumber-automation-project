import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import { newAccountNumber } from "./Open_New_Account_Steps";
import AccountOverview_PO from "../page_objects/Account_Overview_PO";

const accountOverviewPage = new AccountOverview_PO();
const amountToTransfer = '50' ;

var fromAccount;
var toAccount;
var fromAccountInitialAmount; 
var toAccountInitialAmount;
var checkingAccountNumber;

Then(`I should be able to view my account overview`, () => {
    cy.get('#showOverview > h1').contains("Accounts Overview");
    cy.get('#accountTable').should('be.visible');
    cy.get('#accountTable').find('a').should('be.visible');
    cy.get('#accountTable').find('a').first().invoke('text').then((accountNumberID) => {
        assert(parseInt(accountNumberID), "Value isn't an integer!");    
    })
})

When(`I click on the Open New Account link`, () => {
    cy.get('#accountTable').find('a').first().invoke('text').then((accountNumberID) => {
        assert(parseInt(accountNumberID), "Value isn't an integer!");
        checkingAccountNumber = accountNumberID;       
    })
    accountOverviewPage.clickOpenNewAccountLink();
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

    accountOverviewPage.clickTransferFundsLink();
})

When(`I select a from account`, () => {
    accountOverviewPage.selectFromAccount(fromAccount);
})

When(`I select a to account`, () => {
    accountOverviewPage.selecToAccount(toAccount);
})


When(`I click on the Update Contact Info link`, () => {
    accountOverviewPage.clickUpdateContactInfoLink();
})

When(`I type a valid amount to transfer`, () => {
    accountOverviewPage.typeAmountToTransfer(amountToTransfer);
})

When(`The new account is visible in the account overview`, () => {
    accountOverviewPage.clickAccountsOverviewLink();
    cy.get('#accountTable').find(`a[href*="id=${newAccountNumber}"]`);
})

When(`It has the right amount of money`, () => {
    cy.get(`a[href*="${newAccountNumber}"]`).parent().siblings().first().should('have.text', '$100.00');
    cy.get(`a[href*="${newAccountNumber}"]`).parent().siblings().last().should('have.text', '$100.00');
})

When(`I click on the Log Out link`, () => {
    accountOverviewPage.clickLogOutButton();
})

When(`I click on the Transfer button`, () => {
    accountOverviewPage.clickTransferButton();
})

When(`The updated account values are shown in the account overview`, () => {
    finalFromAccountAmount = fromAccountInitialAmount - Number(amountToTransfer);
    finalToAccountAmount = toAccountInitialAmount + Number(amountToTransfer);

    accountOverviewPage.clickAccountsOverviewLink();

    cy.get(`a[href*="${fromAccount}"]`).parent().siblings().first().should('have.text', `$${finalFromAccountAmount.toFixed(2)}`);
    cy.get(`a[href*="${toAccount}"]`).parent().siblings().first().should('have.text', `$${finalToAccountAmount.toFixed(2)}`);
})

Then(`I should be able to access my account`, () => {
    cy.fixture(accountOverviewPage.userData).then((data)  => {
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

export { checkingAccountNumber };