import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import { fromAccount, toAccount } from "./Account_Overview_Steps";
import TransferFunds_PO from "../page_objects/Transfer_Funds_PO";

const transferFundsPage = new TransferFunds_PO();
var amountToTransfer = Math.floor(Math.random() * 51); // Transfer between 0 and 50$

When(`I type an amount to transfer`, () => {
    transferFundsPage.typeAmountToTransfer(amountToTransfer);
})

When(`I select a from account`, () => {
    transferFundsPage.selectFromAccount(fromAccount);
})

When(`I select a to account`, () => {
    transferFundsPage.selecToAccount(toAccount);
})

When(`I click on the Transfer button`, () => {
    transferFundsPage.clickTransferButton();
})

Then(`A success message with the transfer information is shown`, () => {
    cy.get('#showResult > h1').should('have.text', 'Transfer Complete!');
    cy.get('#amountResult').contains(amountToTransfer); 
    cy.get('#fromAccountIdResult').contains(fromAccount);
    cy.get('#toAccountIdResult').contains(toAccount);
})

export { amountToTransfer }