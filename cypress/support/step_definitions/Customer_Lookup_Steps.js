import { Then, When }  from "@badeball/cypress-cucumber-preprocessor";
import CustomerLookup_PO from "../page_objects/Customer_Lookup_PO";

const customerLookupPage = new CustomerLookup_PO();

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

Then(`I can see the user's username and password`, () => {
    cy.get('#rightPanel > h1').contains('Customer Lookup')
    cy.get('#rightPanel > p').contains('Your login information was located successfully. You are now logged in.')
    
    cy.fixture(customerLookupPage.userData).then((data)  => {
        cy.get('#rightPanel').contains(data.username)
        cy.get('#rightPanel').contains(data.password)
    })
})