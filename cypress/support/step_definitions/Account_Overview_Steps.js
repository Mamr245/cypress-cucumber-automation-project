import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import { newAccountNumber } from "./Open_New_Account_Steps";
import { amountToTransfer } from "./Transfer_Funds_Steps";
import { billAmount } from "./Bill_Pay_Steps";
import AccountOverview_PO from "../page_objects/Account_Overview_PO";

const accountOverviewPage = new AccountOverview_PO();

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
    // Get account number and initial amount of money from account from which we'll transfer funds
    cy.get('#accountTable').find('a').first().invoke('text').then((accountNumberID) => {
        fromAccount = accountNumberID;  
        cy.get(`a[href*="${fromAccount}"]`).parent().siblings().first().invoke('text').then((accountAmount) => {
            fromAccountInitialAmount = Number(accountAmount.replace('$',''));        
        })         
    })

    // Get account number and initial amount of money from account which will receive the funds 
    cy.get('#accountTable').find('a').last().invoke('text').then((accountNumberID) => {
        toAccount = accountNumberID; 
        cy.get(`a[href*="${toAccount}"]`).parent().siblings().first().invoke('text').then((accountAmount) => {
            toAccountInitialAmount = Number(accountAmount.replace('$',''));    
        })         
    })

    accountOverviewPage.clickTransferFundsLink();
})

When(`I click on the Update Contact Info link`, () => {
    accountOverviewPage.clickUpdateContactInfoLink();
})

When(`I click on the Find Transactions link`, () => {
    cy.get('#accountTable').find('a').first().invoke('text').then((accountNumberID) => {
        assert(parseInt(accountNumberID), "Value isn't an integer!");
        checkingAccountNumber = accountNumberID;       
    })
    accountOverviewPage.clickFindTransactionsLink();
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

When(`I click on the Bill Pay link`, () => {
    // Get account number and initial amount of money from account from which we'll transfer funds
    cy.get('#accountTable').find('a').first().invoke('text').then((accountNumberID) => {
        fromAccount = accountNumberID;  
        cy.get(`a[href*="${fromAccount}"]`).parent().siblings().first().invoke('text').then((accountAmount) => {
            fromAccountInitialAmount = Number(accountAmount.replace('$',''));        
        })         
    })
    accountOverviewPage.clickBillPayButton();
})

When(`The updated account values are shown in the account overview`, () => {
    finalFromAccountAmount = fromAccountInitialAmount - Number(amountToTransfer);
    finalToAccountAmount = toAccountInitialAmount + Number(amountToTransfer);

    accountOverviewPage.clickAccountsOverviewLink();

    cy.get(`a[href*="${fromAccount}"]`).parent().siblings().first().should('have.text', `$${finalFromAccountAmount.toFixed(2)}`);
    cy.get(`a[href*="${toAccount}"]`).parent().siblings().first().should('have.text', `$${finalToAccountAmount.toFixed(2)}`);
})

When(`The paid amount is removed from the used account`, () => {
    finalFromAccountAmount = fromAccountInitialAmount - billAmount;
    accountOverviewPage.clickAccountsOverviewLink();
    cy.get(`a[href*="${fromAccount}"]`).parent().siblings().first().should('have.text', `$${finalFromAccountAmount.toFixed(2)}`);

})

Then(`I should be able to access my account`, () => {
    cy.fixture(accountOverviewPage.userData).then((data)  => {
        cy.get('#leftPanel > p').contains('Welcome');
        cy.get('#leftPanel > p').contains(data.firstName + ' ' + data.lastName);
    })
})

export { checkingAccountNumber, fromAccount, toAccount };