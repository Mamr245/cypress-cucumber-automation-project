import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import { newAccountNumber } from "./Open_New_Account_Steps";
import { amountToTransfer } from "./Transfer_Funds_Steps";
import { billAmount } from "./Bill_Pay_Steps";
import { loanAccountNumber, loanAmountToValidate, downPaymentAmountToValidate } from "./Request_Loan_Steps";
import AccountOverview_PO from "../page_objects/Account_Overview_PO";

const accountOverviewPage = new AccountOverview_PO();

/* Variable used in the "Find Transactions" and "Open New Account" scenarios
We get the checking account number and export it so we can select it in steps performed afterwards */
var checkingAccountNumber;

/* Variable used in the "Find Transactions" and "Pay Bill" scenarios
We get the from and to account numbers and export them so we can perform transactions and payments afterwards
The accounts' initial amounts are used to perform validations after the transactions or payments have been done */
var fromAccount;
var toAccount;
var fromAccountInitialAmount; 
var toAccountInitialAmount;

Then(`I should be able to view my account overview`, () => {
    cy.get('#showOverview > h1').contains("Accounts Overview");
    cy.get('#accountTable').should('be.visible');
    cy.get('#accountTable').find('a').should('be.visible');
    cy.get('#accountTable').find('a').first().invoke('text').then((visibleAccountNumber) => {
        assert(parseInt(visibleAccountNumber), "Value is an integer");    
    })
})

When(`I click on the Open New Account link`, () => {
    /* Get checking account number. It's in the first row of the "Accounts Overview" table 
    It will be used to transfer money to the new account in the next steps */
    cy.get('#accountTable').find('a').first().invoke('text').then((accountNumber) => {
        assert(parseInt(accountNumber), "Value is an integer");
        checkingAccountNumber = accountNumber;       
    })
    accountOverviewPage.clickOpenNewAccountLink();
})

When(`I click on the Transfer Funds link`, () => {
    // Get account number and initial amount of money from account from which we'll transfer funds
    cy.get('#accountTable').find('a').first().invoke('text').then((accountNumber) => {
        fromAccount = accountNumber;  
        cy.get(`a[href*="${fromAccount}"]`).parent().siblings().first().invoke('text').then((accountAmount) => {
            fromAccountInitialAmount = Number(accountAmount.replace('$',''));        
        })         
    })
    // Get account number and initial amount of money from account to which we'll transfer funds
    cy.get('#accountTable').find('a').last().invoke('text').then((accountNumber) => {
        toAccount = accountNumber; 
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
    /* Get checking account number. It's in the first row of the "Accounts Overview" table 
    It will be the used account to search transactions in the next steps */
    cy.get('#accountTable').find('a').first().invoke('text').then((firstRowAccountNumber) => {
        assert(parseInt(firstRowAccountNumber), "Value is an integer");
        checkingAccountNumber = firstRowAccountNumber;       
    })
    accountOverviewPage.clickFindTransactionsLink();
})

When(`I click on the Request Loan link`, () => {
    /* Get account number from which we'll make the down payment and its current amount. 
    It's in the first row of the "Accounts Overview" table 
    It will be used for the down payment in the next steps */
    cy.get('#accountTable').find('a').first().invoke('text').then((accountNumber) => {
        assert(parseInt(accountNumber), "Value is an integer");
        fromAccount = accountNumber;  
        cy.get(`a[href*="${fromAccount}"]`).parent().siblings().first().invoke('text').then((accountAmount) => {
            fromAccountInitialAmount = Number(accountAmount.replace('$',''));        
        })        
    })
    accountOverviewPage.clickRequestLoanLink();
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
    // Get account number and initial amount of money from account from which we'll pay a bill
    cy.get('#accountTable').find('a').first().invoke('text').then((accountNumber) => {
        fromAccount = accountNumber;  
        cy.get(`a[href*="${fromAccount}"]`).parent().siblings().first().invoke('text').then((accountAmount) => {
            fromAccountInitialAmount = Number(accountAmount.replace('$',''));        
        })         
    })
    accountOverviewPage.clickBillPayButton();
})

When(`The updated account values are shown in the account overview`, () => {
    const fromAccountFinalAmount = fromAccountInitialAmount - Number(amountToTransfer);
    const toAccountFinalAmount = toAccountInitialAmount + Number(amountToTransfer);

    accountOverviewPage.clickAccountsOverviewLink();

    cy.get(`a[href*="${fromAccount}"]`).parent().siblings().first().should('have.text', `$${fromAccountFinalAmount.toFixed(2)}`);
    cy.get(`a[href*="${toAccount}"]`).parent().siblings().first().should('have.text', `$${toAccountFinalAmount.toFixed(2)}`);
})

When(`The paid amount is removed from the used account`, () => {
    const fromAccountFinalAmount = fromAccountInitialAmount - billAmount;
    accountOverviewPage.clickAccountsOverviewLink();
    cy.get(`a[href*="${fromAccount}"]`).parent().siblings().first().should('have.text', `$${fromAccountFinalAmount.toFixed(2)}`);
})

When('I can see the created account in the Account Overview', () => {
    accountOverviewPage.clickAccountsOverviewLink();
    cy.get(`a[href*="${loanAccountNumber}"]`);
}) 

When('It has the correct amount of money', () => {
    accountOverviewPage.clickAccountsOverviewLink();
    cy.get(`a[href*="${loanAccountNumber}"]`).parent().siblings().first().should('have.text', `$${loanAmountToValidate}`);
}) 

When(`The account for the down payment has the right amount deducted`, () => {
    const fromAccountFinalAmount = fromAccountInitialAmount - Number(downPaymentAmountToValidate);
    cy.get(`a[href*="${fromAccount}"]`).parent().siblings().first().should('have.text', `$${fromAccountFinalAmount.toFixed(2)}`);
})

Then(`I should be able to access my account`, () => {
    cy.fixture(accountOverviewPage.userData).then((data)  => {
        cy.get('#leftPanel > p').contains('Welcome');
        cy.get('#leftPanel > p').contains(data.firstName + ' ' + data.lastName);
    })
})

export { checkingAccountNumber, fromAccount, toAccount };