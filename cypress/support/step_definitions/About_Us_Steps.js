import { Then }  from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../page_objects/Base_PO";

const basePage = new Base_PO();

Then(`I am presented with information about ParaBank`, () => {
    cy.get(`${basePage.rightPanelLocator} > h1`).should('have.text', 'ParaSoft Demo Website');
    cy.get(`${basePage.rightPanelLocator}`).contains('ParaBank is a demo site used for demonstration of Parasoft software solutions.');
    cy.get(`${basePage.rightPanelLocator}`).contains('All materials herein are used solely for simulating a realistic online banking website.');
    cy.get(`${basePage.rightPanelLocator}`).contains('In other words: ParaBank is not a real bank!');
    cy.get(`${basePage.rightPanelLocator}`).contains('For more information about Parasoft solutions please visit us at:');
    cy.get(`${basePage.rightPanelLocator}`).contains('888-305-0041');
    cy.get(`${basePage.rightPanelLocator}`).find('a[href="http://www.parasoft.com/"]').click();
    cy.url().should('eq', 'https://www.parasoft.com/');
})