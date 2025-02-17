import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import { faker } from '@faker-js/faker';
import { fromAccount } from "./Account_Overview_Steps";
import BillPay_PO from "../page_objects/Bill_Pay_PO";

const billPayPage = new BillPay_PO();

const name = faker.person.fullName();
const address = faker.location.street();
const city = faker.location.city();
const state = faker.location.state();
const zipCode = faker.location.zipCode();
const phoneNumber = faker.phone.number();
const accountNumber = faker.finance.accountNumber();
const billAmount = Math.floor(Math.random() * 51).toFixed(2); // Transfer between 0 and 50$

When(`I type the payee's name`, () => {
    billPayPage.typeName(name);
})

When(`I type the payee's address`, () => {
    billPayPage.typeAddress(address);
})

When(`I type the payee's city`, () => {
    billPayPage.typeCity(city);
})

When(`I type the payee's state`, () => {
    billPayPage.typeState(state);
})

When(`I type the payee's zip code`, () => {
    billPayPage.typeZipCode(zipCode);
})

When(`I type the payee's phone number`, () => {
    billPayPage.typePhoneNumber(phoneNumber);
})

When(`I type the payee's bank account`, () => {
    billPayPage.typeAccountNumber(accountNumber);
})

When(`I confirm the payee's bank account`, () => {
    billPayPage.typeVerifyAccountNumber(accountNumber);
})

When(`I type the amount to be transfered`, () => {
    billPayPage.typeAmount(billAmount);
})

When(`I select an account from which to pay the bill`, () => {
    billPayPage.selectFromAccount(fromAccount);
})

When(`I click the Send Payment Button`, () => {
    billPayPage.clickSendPaymentButton();
})

Then(`A success message is shown with the bill payment information`, () => {
    cy.get('#billpayResult > h1').should('have.text', 'Bill Payment Complete');
    cy.get('#payeeName').contains(name); 
    cy.get('#amount').contains(`$${billAmount}`);
    cy.get('#fromAccountId').contains(fromAccount);
})

export { billAmount };