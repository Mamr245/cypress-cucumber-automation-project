import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import Register_PO from "../page_objects/Register_PO";
import { faker } from '@faker-js/faker';

const registerPage = new Register_PO();

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const address = faker.location.street();
const city = faker.location.city();
const state = faker.location.state();
const zipCode = faker.location.zipCode();
const phoneNumber = faker.phone.number();
const ssn = registerPage.generateSSN();
const username = faker.internet.username()
const password = faker.internet.password()

When(`I type a first name`, () => {
    registerPage.typeFirstName(firstName);
})

When(`I type a last name`, () => {
    registerPage.typeLastName(lastName);
})

When(`I type an address`, () => {
    registerPage.typeAddress(address);
})

When(`I type a city`, () => {
    registerPage.typeCity(city);
})

When(`I type a state`, () => {
    registerPage.typeState(state);
})

When(`I type a zip code`, () => {
    registerPage.typeZipCode(zipCode);
})

When(`I type a phone number`, () => {
    registerPage.typePhoneNumber(phoneNumber);
})

When(`I type a social security number`, () => {
    registerPage.typeSSN(ssn);
})

When(`I type a username`, () => {
    registerPage.typeUsername(username);
})

When(`I type a password`, () => {
    registerPage.typePassword(password);
})

When(`I confirm the password`, () => {
    registerPage.repeatPassword(password);
})

When(`I click on the register button`, () => {
    registerPage.clickRegisterButton();
})

Then(`My account should be created`, () => {
    cy.get('#rightPanel > h1').should('have.text', 'Welcome ' + username);
    cy.get('#rightPanel > p').should('have.text', 'Your account was created successfully. You are now logged in.')
})



