import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import CustomerCare_PO from "../page_objects/Customer_Care_PO";
import customerCareData from "../../fixtures/customerCareData.json";

const customerCarePage = new CustomerCare_PO();

When(`I type a name`, () => {
    customerCarePage.typeName(customerCareData.name);
})

When(`I type a valid email`, () => {
    customerCarePage.typeEmail(customerCareData.email);
})

When(`I type a valid phone number`, () => {
    customerCarePage.typePhone(customerCareData.phoneNumber);
})

When(`I type a message`, () => {
    customerCarePage.typeComment(customerCareData.message);
})

When(`I click the Send to Customer Care button`, () => {
    customerCarePage.clickSendToCustomerCareButton();
})

Then(`A message saying I'll be contacted is shown`, () => {
    cy.get(`${customerCarePage.rightPanelLocator} > h1`).contains('Customer Care');
    cy.get(`${customerCarePage.rightPanelLocator} > p`).first().contains(`Thank you ${customerCareData.name}`);
    cy.get(`${customerCarePage.rightPanelLocator} > p`).last().contains('A Customer Care Representative will be contacting you.');
})

Then(`A customer care section with a form is presented`, () => {
    cy.url().should('contain', 'https://parabank.parasoft.com/parabank/contact.htm');
    cy.get(`${customerCarePage.rightPanelLocator} > h1`).contains('Customer Care');
    cy.get('#contactForm').should('be.visible');
})