import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import Register_PO from "../page_objects/Register_PO";

const registerPage = new Register_PO();

When(`I type a first name`, () => {
    registerPage.typeFirstName(registerPage.clientFirstName);
})

When(`I type a last name`, () => {
    registerPage.typeLastName(registerPage.clientLastName);
})

When(`I type an address`, () => {
    registerPage.typeAddress(registerPage.clientAddress);
})

When(`I type a city`, () => {
    registerPage.typeCity(registerPage.clientCity);
})

When(`I type a state`, () => {
    registerPage.typeState(registerPage.clientState);
})

When(`I type a zip code`, () => {
    registerPage.typeZipCode(registerPage.clientZipCode);
})

When(`I type a phone number`, () => {
    registerPage.typePhoneNumber(registerPage.clientPhoneNumber);
})

When(`I type a social security number`, () => {
    registerPage.typeSSN(registerPage.clientSSN);
})

When(`I type a username`, () => {
    registerPage.typeUsername(registerPage.clientUsername);
})

When(`I type a password`, () => {
    registerPage.typePassword(registerPage.clientPassword);
})

When(`I confirm the password`, () => {
    registerPage.repeatPassword(registerPage.clientPassword);
})

When(`I click on the register button`, () => {
    registerPage.clickRegisterButton();
})

Then(`My account should be created`, () => {
    cy.title().should('eq', 'ParaBank | Customer Created');
    cy.get(`${registerPage.rightPanelLocator} > h1`).should('have.text', 'Welcome ' + registerPage.clientUsername);
    cy.get(`${registerPage.rightPanelLocator} > p`).should('have.text', 'Your account was created successfully. You are now logged in.');
    registerPage.saveUserData(registerPage.clientUsername, registerPage.clientPassword, registerPage.clientFirstName, registerPage.clientLastName, 
        registerPage.clientAddress, registerPage.clientCity, registerPage.clientState, registerPage.clientZipCode, registerPage.clientSSN);
})

