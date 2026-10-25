import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import { fromAccount } from "./Account_Overview_Steps";
import BillPay_PO from "../page_objects/Bill_Pay_PO";
import transferFundsData from "../../fixtures/transferFundsData.json";

const billPayPage = new BillPay_PO();
const mismatchingAccountNumber = '1234567';

When(`I type the payee's name`, () => {
    billPayPage.typeName(transferFundsData.name);
})

When(`I type the payee's address`, () => {
    billPayPage.typeAddress(transferFundsData.address);
})

When(`I type the payee's city`, () => {
    billPayPage.typeCity(transferFundsData.city);
})

When(`I type the payee's state`, () => {
    billPayPage.typeState(transferFundsData.state);
})

When(`I type the payee's zip code`, () => {
    billPayPage.typeZipCode(transferFundsData.zipCode);
})

When(`I type the payee's phone number`, () => {
    billPayPage.typePhoneNumber(transferFundsData.phoneNumber);
})

When(`I type the payee's bank account`, () => {
    billPayPage.typeAccountNumber(transferFundsData.accountNumber);
})

When(`I confirm the payee's bank account`, () => {
    billPayPage.typeVerifyAccountNumber(transferFundsData.accountNumber);
})

When(`I type the amount to be transfered`, () => {
    billPayPage.typeAmount(transferFundsData.billAmount);
})

When(`I select an account from which to pay the bill`, () => {
    billPayPage.selectFromAccount(fromAccount);
})

When(`I click the Send Payment Button`, () => {
    billPayPage.clickSendPaymentButton();
})

When(`I type an invalid bank account`, () => {
    billPayPage.typeAccountNumber('1nv4l1dAccountNumber');
})

When(`I type an invalid bank account in the confirmation field`, () => {
    billPayPage.typeVerifyAccountNumber('1nv4l1dAccountNumber');
})

When(`I type a different bank account in the confirmation field`, () => {
    billPayPage.typeVerifyAccountNumber(mismatchingAccountNumber);
})

Then(`A success message is shown with the bill payment information`, () => {
    cy.get('#billpayResult > h1').should('have.text', 'Bill Payment Complete');
    cy.get('#payeeName').contains(transferFundsData.name); 
    cy.get('#amount').contains(`$${transferFundsData.billAmount}`);
    cy.get('#fromAccountId').contains(fromAccount);
})