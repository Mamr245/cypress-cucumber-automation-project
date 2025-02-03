import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import CustomerCare_PO from "../page_objects/CustomerCare_PO";
import { faker } from '@faker-js/faker';

const customerCarePage = new CustomerCare_PO();

const name = faker.person.fullName();
const email = faker.internet.email();
const phoneNumber = faker.phone.number();
const message = "I would like to be contacted in ordrer to talk about a loan request I want to make."

When(`I type a name`, () => {
    customerCarePage.typeName(name);
})

When(`I type a valid email`, () => {
    customerCarePage.typeEmail(email);
})

When(`I type a valid phone number`, () => {
    customerCarePage.typePhone(phoneNumber);
})

When(`I type a message`, () => {
    customerCarePage.typeComment(message);
})

When(`I click the Send to Customer Care button`, () => {
    customerCarePage.clickSendToCustomerCareButton();
})

Then(`A message saying I'll be contacted is shown`, () => {
    cy.get('#rightPanel > h1').contains('Customer Care');
    cy.get('#rightPanel > p').first().contains(`Thank you ${name}`);
    cy.get('#rightPanel > p').last().contains('A Customer Care Representative will be contacting you.');
})

Then(`A customer care section with a form is presented`, () => {
    cy.url().should('contain', 'https://parabank.parasoft.com/parabank/contact.htm');
    cy.get('#rightPanel > h1').contains('Customer Care');
    cy.get('#contactForm').should('be.visible');
})