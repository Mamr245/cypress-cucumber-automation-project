import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import OpenNewAccount_PO from "../page_objects/Open_New_Account_PO";
import { checkingAccountNumber } from "./Account_Overview_Steps";

const openNewAccountPage = new OpenNewAccount_PO();
var newAccountNumber;

When(`I select the Checking option`, () => {
    openNewAccountPage.selectChekckingAccountOption();
})

When(`I select the Savings option`, () => {
    openNewAccountPage.selectSavingsAccountOption();
})

When(`I select an account from which to transfer funds`, () => {
    openNewAccountPage.selectFromAccount(checkingAccountNumber);
})

When(`I click on the Open New Account button`, () => {
    openNewAccountPage.clickOpenNewAccountButton();
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

export { newAccountNumber };