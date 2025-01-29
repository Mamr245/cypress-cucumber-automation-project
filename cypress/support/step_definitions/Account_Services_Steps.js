import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import AccountServices_PO from "../page_objects/AccountServices_PO";


const AccountServicesPage = new AccountServices_PO();

Then(`I should be able to view my account overview`, () => {
    cy.get('#showOverview > h1').contains("Accounts Overview");
    cy.get('#accountTable').should('be.visible');
    cy.get('#accountTable').find('a').should('be.visible');
    cy.get('#accountTable').find('a').invoke('text').then((accountNumber) => {
        assert(parseInt(accountNumber), "Value isn't an integer!");
    })
})