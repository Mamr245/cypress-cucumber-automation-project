import { Then }  from "@badeball/cypress-cucumber-preprocessor";

Then(`I am presented with information about ParaBank`, () => {
    cy.get('#rightPanel > h1').should('have.text', 'ParaSoft Demo Website');
    cy.get('#rightPanel').contains('ParaBank is a demo site used for demonstration of Parasoft software solutions.');
    cy.get('#rightPanel').contains('All materials herein are used solely for simulating a realistic online banking website.');
    cy.get('#rightPanel').contains('In other words: ParaBank is not a real bank!');
    cy.get('#rightPanel').contains('For more information about Parasoft solutions please visit us at:');
    cy.get('#rightPanel').contains('888-305-0041');
    cy.get('#rightPanel').find('a[href="http://www.parasoft.com/"]').click();
    cy.url().should('eq', 'https://www.parasoft.com/');
})