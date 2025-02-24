import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import { fromAccount } from "./Account_Overview_Steps";
import RequestLoan_PO from "../page_objects/Request_Loan_PO";

const requestloanPage = new RequestLoan_PO();
var loanAccountNumber;
var loanAmountToValidate;
var downPaymentAmountToValidate;

When(`I type the loan amount: {string}`, (loanAmount) => {
    loanAmountToValidate = loanAmount;
    requestloanPage.typeLoanAmount(loanAmount);
})

When(`I type the down payment amount: {string}`, (downPaymentAmount) => {
    downPaymentAmountToValidate = downPaymentAmount;
    requestloanPage.typeDownPaymentAmount(downPaymentAmount);
})

When('I select an account for the down payment', () => {
    requestloanPage.selectFromAccount(fromAccount);
})

When('I click the Apply Now button', () => {
    requestloanPage.clickApplyNowButton();
})

Then('The loan is approved', () => {
    const currentDate = requestloanPage.getCurrentDate();

    cy.get('#requestLoanResult > h1').contains('Loan Request Processed');
    cy.get('#loanProviderName').contains('Wealth Securities Dynamic Loans (WSDL)');
    cy.get('#responseDate').contains(currentDate);
    cy.get('#loanStatus').contains('Approved');
    cy.get('#loanRequestApproved').contains('Congratulations, your loan has been approved.');

    cy.get('#newAccountId').invoke('text').then((accountNumber) => {
        assert(parseInt(accountNumber), "Value is an integer");
        loanAccountNumber = accountNumber;
    })
})

export { loanAccountNumber, loanAmountToValidate, downPaymentAmountToValidate };


