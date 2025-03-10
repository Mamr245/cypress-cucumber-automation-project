import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import { checkingAccountNumber } from "./Account_Overview_Steps";
import OpenNewAccount_PO from "../page_objects/Open_New_Account_PO";

const openNewAccountPage = new OpenNewAccount_PO();

/* Declaration of variable which will hold the account number generated from "Open New Checking Account" scenario. 
This value will be exported and used to validate if the account was successfully created */
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
    cy.get('a[href*="id="').invoke('text').then((generatedAccountNumber) => {
        assert(parseInt(generatedAccountNumber), "Value is an integer");
        newAccountNumber = generatedAccountNumber;
    })
})

export { newAccountNumber };