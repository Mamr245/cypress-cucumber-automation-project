import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";

Then(`A customer care section with a form is presented`, () => {
    cy.url().should('contain', 'https://parabank.parasoft.com/parabank/contact.htm');
    cy.get('#rightPanel > h1').contains('Customer Care');
    cy.get('#rightPanel > p').contains('Email support is available by filling out the following form.');
    cy.get('#contactForm').should('be.visible');
})