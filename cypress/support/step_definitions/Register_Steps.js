import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import Register_PO from "../page_objects/Register_PO";
import clientData from "../../fixtures/clientData.json";

const registerPage = new Register_PO();

When(`I type a first name`, () => {
    registerPage.typeFirstName(clientData.firstname);
})

When(`I type a last name`, () => {
    registerPage.typeLastName(clientData.lastname);
})

When(`I type an address`, () => {
    registerPage.typeAddress(clientData.address);
})

When(`I type a city`, () => {
    registerPage.typeCity(clientData.city);
})

When(`I type a state`, () => {
    registerPage.typeState(clientData.state);
})

When(`I type a zip code`, () => {
    registerPage.typeZipCode(clientData.zipCode);
})

When(`I type a phone number`, () => {
    registerPage.typePhoneNumber(clientData.phoneNumber);
})

When(`I type a social security number`, () => {
    registerPage.typeSSN(clientData.SSN);
})

When(`I type a username`, () => {
    registerPage.typeUsername(clientData.username);
})

When(`I type a password`, () => {
    registerPage.typePassword(clientData.password);
})

When(`I confirm the password`, () => {
    registerPage.repeatPassword(clientData.password);
})

When(`I click on the register button`, () => {
    registerPage.clickRegisterButton();
})

Then(`My account should be created`, () => {
    cy.title().should('eq', 'ParaBank | Customer Created');
    cy.get(`${registerPage.rightPanelLocator} > h1`).should('have.text', 'Welcome ' + clientData.username);
    cy.get(`${registerPage.rightPanelLocator} > p`).should('have.text', 'Your account was created successfully. You are now logged in.');
})

