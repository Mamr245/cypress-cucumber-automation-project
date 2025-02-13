import { Then, When }  from "@badeball/cypress-cucumber-preprocessor";
import AdminPage_PO from "../page_objects/Admin_Page_PO";

const adminPage = new AdminPage_PO();

Then(`I am redirected to the webstite's administration page`, () => {
    cy.url().should('contain', 'https://parabank.parasoft.com/parabank/admin');
    cy.get('input[value="Submit"]').should('be.visible');
})

When(`The administration page has a Database configuration section`, () => {
    cy.get(adminPage.dbFormLocator).should('be.visible');
    cy.get(adminPage.dbFormLocator).find('button[value="INIT"]').should('be.visible');
    cy.get(adminPage.dbFormLocator).find('button[value="CLEAN"]').should('be.visible');
})

When(`The administration page has a JSM Service section`, () => {
    cy.get(adminPage.jsmFormLocator).should('be.visible');
    cy.get(adminPage.jsmFormLocator).find('input[value="Shutdown"]').should('be.visible');
})

When(`The administration page has a Data Access Mode configuration section`, () => {
    cy.get(adminPage.dataAccessModeLocator).find('#accessMode1').should('be.visible');
    cy.get(adminPage.dataAccessModeLocator).find('#accessMode2').should('be.visible');
    cy.get(adminPage.dataAccessModeLocator).find('#accessMode3').should('be.visible');
    cy.get(adminPage.dataAccessModeLocator).find('#accessMode4').should('be.visible');
})

When(`The administration page has a Web Service configuration section`, () => {
    cy.get(adminPage.webServiceAndApplicationSettingsLocator).first().find('a[href*="services/ParaBank?wsdl"]').contains('WSDL');
    cy.get(adminPage.webServiceAndApplicationSettingsLocator).first().find('a[href*="services/bank?_wadl&_type=xml"]').contains('WADL');
    cy.get(adminPage.webServiceAndApplicationSettingsLocator).first().find('a[href*="api-docs/index"]').contains('OpenAPI');
    cy.get(adminPage.webServiceAndApplicationSettingsLocator).first().find('a[href*="services/LoanProcessor?wsdl"]').contains('WSDL');

    cy.get(adminPage.webServiceAndApplicationSettingsLocator).first().find('#soapEndpoint').should('be.visible');
    cy.get(adminPage.webServiceAndApplicationSettingsLocator).first().find('#restEndpoint').should('be.visible');
    cy.get(adminPage.webServiceAndApplicationSettingsLocator).first().find('#endpoint').should('be.visible');
})

When(`The administration page has a Application Settings configuration section`, () => {
    cy.get(adminPage.webServiceAndApplicationSettingsLocator).last().find('#initialBalance').should('be.visible');
    cy.get(adminPage.webServiceAndApplicationSettingsLocator).last().find('#minimumBalance').should('be.visible');
    cy.get(adminPage.webServiceAndApplicationSettingsLocator).last().find('#loanProcessorThreshold').should('be.visible');

    adminPage.selectLoanProvider('JMS');
    adminPage.selectLoanProvider('Web Service');
    adminPage.selectLoanProvider('Local');

    adminPage.selectLoanProcessor('Available Funds');
    adminPage.selectLoanProcessor('Down Payment');
    adminPage.selectLoanProcessor('Combined');  
})
