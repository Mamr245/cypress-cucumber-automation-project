import { Then, When }  from "@badeball/cypress-cucumber-preprocessor";
import { faker } from '@faker-js/faker';
import CustomerLookup_PO from "../page_objects/Customer_Lookup_PO";

const customerLookupPage = new CustomerLookup_PO();
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const address = faker.location.street();
const city = faker.location.city();
const state = faker.location.state();
const zipCode = faker.location.zipCode();
const ssn = customerLookupPage.generateSSN();


When(`I type the user's correct information`, () => {
    cy.fixture(customerLookupPage.userData).then((data)  => {
        customerLookupPage.typeFirstName(data.firstName);
        customerLookupPage.typeLastName(data.lastName);
        customerLookupPage.typeAddress(data.address);
        customerLookupPage.typeCity(data.city);
        customerLookupPage.typeState(data.state);
        customerLookupPage.typeZipCode(data.zipCode);
        customerLookupPage.typeSSN(data.SSN);
    })
})

When(`I click the Find My Login Info buton`, () => {
    customerLookupPage.clickFindMyLoginInfo();
})


When(`I type the user's information and leave the first name field empty`, () => {
    cy.fixture(customerLookupPage.userData).then((data)  => {
        customerLookupPage.typeLastName(data.lastName);
        customerLookupPage.typeAddress(data.address);
        customerLookupPage.typeCity(data.city);
        customerLookupPage.typeState(data.state);
        customerLookupPage.typeZipCode(data.zipCode);
        customerLookupPage.typeSSN(data.SSN);
    })
})

When(`I type the user's information and leave the last name field empty`, () => {
    cy.fixture(customerLookupPage.userData).then((data)  => {
        customerLookupPage.typeFirstName(data.firstName);
        customerLookupPage.typeAddress(data.address);
        customerLookupPage.typeCity(data.city);
        customerLookupPage.typeState(data.state);
        customerLookupPage.typeZipCode(data.zipCode);
        customerLookupPage.typeSSN(data.SSN);
    })
})

When(`I type the user's information and leave the address field empty`, () => {
    cy.fixture(customerLookupPage.userData).then((data)  => {
        customerLookupPage.typeFirstName(data.firstName);
        customerLookupPage.typeLastName(data.lastName);
        customerLookupPage.typeCity(data.city);
        customerLookupPage.typeState(data.state);
        customerLookupPage.typeZipCode(data.zipCode);
        customerLookupPage.typeSSN(data.SSN);
    })
})

When(`I type the user's information and leave the city field empty`, () => {
    cy.fixture(customerLookupPage.userData).then((data)  => {
        customerLookupPage.typeFirstName(data.firstName);
        customerLookupPage.typeLastName(data.lastName);
        customerLookupPage.typeAddress(data.address);
        customerLookupPage.typeState(data.state);
        customerLookupPage.typeZipCode(data.zipCode);
        customerLookupPage.typeSSN(data.SSN);
    })
})

When(`I type the user's information and leave the state field empty`, () => {
    cy.fixture(customerLookupPage.userData).then((data)  => {
        customerLookupPage.typeFirstName(data.firstName);
        customerLookupPage.typeLastName(data.lastName);
        customerLookupPage.typeAddress(data.address);
        customerLookupPage.typeCity(data.city);
        customerLookupPage.typeZipCode(data.zipCode);
        customerLookupPage.typeSSN(data.SSN);
    })
})

When(`I type the user's information and leave the Zip Code field empty`, () => {
    cy.fixture(customerLookupPage.userData).then((data)  => {
        customerLookupPage.typeFirstName(data.firstName);
        customerLookupPage.typeLastName(data.lastName);
        customerLookupPage.typeAddress(data.address);
        customerLookupPage.typeCity(data.city);
        customerLookupPage.typeState(data.state);
        customerLookupPage.typeSSN(data.SSN);
    })
})

When(`I type the user's information and leave the SSN field empty`, () => {
    cy.fixture(customerLookupPage.userData).then((data)  => {
        customerLookupPage.typeFirstName(data.firstName);
        customerLookupPage.typeLastName(data.lastName);
        customerLookupPage.typeAddress(data.address);
        customerLookupPage.typeCity(data.city);
        customerLookupPage.typeState(data.state);
        customerLookupPage.typeZipCode(data.zipCode);
    })
})

When(`I type mismatching user information`, () => {
    customerLookupPage.typeFirstName(firstName);
    customerLookupPage.typeLastName(lastName);
    customerLookupPage.typeAddress(address);
    customerLookupPage.typeCity(city);
    customerLookupPage.typeState(state);
    customerLookupPage.typeZipCode(zipCode);
    customerLookupPage.typeSSN(ssn);
})


Then(`I can see the user's username and password`, () => {
    cy.get('#rightPanel > h1').contains('Customer Lookup')
    cy.get('#rightPanel > p').contains('Your login information was located successfully. You are now logged in.')
    
    cy.fixture(customerLookupPage.userData).then((data)  => {
        cy.get('#rightPanel').contains(data.username)
        cy.get('#rightPanel').contains(data.password)
    })
})