import { Then, When }  from "@badeball/cypress-cucumber-preprocessor";
import CustomerLookup_PO from "../page_objects/Customer_Lookup_PO";
import clientData from "../../fixtures/clientData.json";

const customerLookupPage = new CustomerLookup_PO();

When(`I type the user's correct information`, () => {
        customerLookupPage.typeFirstName(clientData.firstname);
        customerLookupPage.typeLastName(clientData.lastname);
        customerLookupPage.typeAddress(clientData.address);
        customerLookupPage.typeCity(clientData.city);
        customerLookupPage.typeState(clientData.state);
        customerLookupPage.typeZipCode(clientData.zipCode);
        customerLookupPage.typeSSN(clientData.SSN);
})

When(`I click the Find My Login Info buton`, () => {
        customerLookupPage.clickFindMyLoginInfo();
})

When(`I type the user's information and leave the first name field empty`, () => {
        customerLookupPage.typeLastName(clientData.lastname);
        customerLookupPage.typeAddress(clientData.address);
        customerLookupPage.typeCity(clientData.city);
        customerLookupPage.typeState(clientData.state);
        customerLookupPage.typeZipCode(clientData.zipCode);
        customerLookupPage.typeSSN(clientData.SSN);
})

When(`I type the user's information and leave the last name field empty`, () => {
        customerLookupPage.typeFirstName(clientData.firstname);
        customerLookupPage.typeAddress(clientData.address);
        customerLookupPage.typeCity(clientData.city);
        customerLookupPage.typeState(clientData.state);
        customerLookupPage.typeZipCode(clientData.zipCode);
        customerLookupPage.typeSSN(clientData.SSN);
})

When(`I type the user's information and leave the address field empty`, () => {
        customerLookupPage.typeFirstName(clientData.firstname);
        customerLookupPage.typeLastName(clientData.lastname);
        customerLookupPage.typeCity(clientData.city);
        customerLookupPage.typeState(clientData.state);
        customerLookupPage.typeZipCode(clientData.zipCode);
        customerLookupPage.typeSSN(clientData.SSN);
})

When(`I type the user's information and leave the city field empty`, () => {
        customerLookupPage.typeFirstName(clientData.firstname);
        customerLookupPage.typeLastName(clientData.lastname);
        customerLookupPage.typeAddress(clientData.address);
        customerLookupPage.typeState(clientData.state);
        customerLookupPage.typeZipCode(clientData.zipCode);
        customerLookupPage.typeSSN(clientData.SSN);
})

When(`I type the user's information and leave the state field empty`, () => {
        customerLookupPage.typeFirstName(clientData.firstname);
        customerLookupPage.typeLastName(clientData.lastname);
        customerLookupPage.typeAddress(clientData.address);
        customerLookupPage.typeCity(clientData.city);
        customerLookupPage.typeZipCode(clientData.zipCode);
        customerLookupPage.typeSSN(clientData.SSN);
})

When(`I type the user's information and leave the Zip Code field empty`, () => {
        customerLookupPage.typeFirstName(clientData.firstname);
        customerLookupPage.typeLastName(clientData.lastname);
        customerLookupPage.typeAddress(clientData.address);
        customerLookupPage.typeCity(clientData.city);
        customerLookupPage.typeState(clientData.state);
        customerLookupPage.typeSSN(clientData.SSN);
})

When(`I type the user's information and leave the SSN field empty`, () => {
        customerLookupPage.typeFirstName(clientData.firstname);
        customerLookupPage.typeLastName(clientData.lastname);
        customerLookupPage.typeAddress(clientData.address);
        customerLookupPage.typeCity(clientData.city);
        customerLookupPage.typeState(clientData.state);
        customerLookupPage.typeZipCode(clientData.zipCode);
})

When(`I type mismatching user information`, () => {
        customerLookupPage.typeFirstName('MismatchingFirstName');
        customerLookupPage.typeLastName('MismatchingLastName');
        customerLookupPage.typeAddress('MismatchingAddress');
        customerLookupPage.typeCity('MismatchingCity');
        customerLookupPage.typeState('MismatchingState');
        customerLookupPage.typeZipCode('MismatchingZipCode');
        customerLookupPage.typeSSN('MismatchingSSN');
})

Then(`I can see the user's username and password`, () => {
        cy.get(`${customerLookupPage.rightPanelLocator} > h1`).contains('Customer Lookup');
        cy.get(`${customerLookupPage.rightPanelLocator} > p`).contains('Your login information was located successfully. You are now logged in.');
        cy.get(`${customerLookupPage.rightPanelLocator}`).contains(clientData.username);
        cy.get(`${customerLookupPage.rightPanelLocator}`).contains(clientData.password);
})