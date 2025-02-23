import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../page_objects/Base_PO";

const basePage = new Base_PO();

When(`I can view the available Bookstore services`, () => {
    const bookstoreServices = [
        "getItemById",
        "getItemByTitle",
        "addItemToCart",
        "getItemsInCart",
        "updateItemInCart",
        "submitOrder",
        "addNewItemToInventory"
    ]

    cy.get('span[class="heading"]').contains('Bookstore services:')
    for(const bookstoreService of bookstoreServices) {
        cy.get(`${basePage.rightPanelLocator}`).contains('td', bookstoreService);
    }
})

When(`I can view the available ParaBank SOAP services`, () => {
    const paraBankSOAPservices = [
        "LoanProcessorService",
        "ParaBankService"
    ]

    cy.get('span[class="heading"]').contains('Available ParaBank SOAP services:')
    for(const paraBankSOAPservice of paraBankSOAPservices) {
        cy.get(`${basePage.rightPanelLocator}`).contains('span[class="porttypename"]', paraBankSOAPservice);
    }
})

When(`I can view the available ParaBank services`, () => {
    const parabankServices = [
        "getAccount",
        "buyPosition",
        "deposit",
        "startupJmsListener",
        "shutdownJmsListener",
        "sellPosition",
        "login",
        "getCustomer",
        "getAccounts",
        "setParameter",
        "getPositionHistory",
        "requestLoan",
        "cleanDB",
        "withdraw",
        "getPosition",
        "initializeDB",
        "getTransaction",
        "getPositions",
        "getTransactions",
        "transfer",
        "createAccount",
        "getTransactionsOnDate",
        "getTransactionsByToFromDate",
        "getTransactionsByAmount",
        "updateCustomer",
    ]

    cy.get('span[class="heading"]').contains('ParaBank services:')
    for(const parabankService of parabankServices) {
        cy.get(`${basePage.rightPanelLocator}`).contains('td', parabankService);
    }
})

When(`I can view the available RESTful services`, () => {
    const restufulServices = [
        "Endpoint address",
        "WADL",
        "OpenAPI"
    ]

    cy.get('span[class="heading"]').contains('Available RESTful services:')
    for(const restufulService of restufulServices) {
        cy.get(`${basePage.rightPanelLocator}`).contains('span[class="field"]', restufulService);
    }

    cy.get('span[class="value"]').contains('http://parabank.parasoft.com:8080/parabank/services/bank');
    cy.get(`${basePage.rightPanelLocator}`).contains('a', 'http://parabank.parasoft.com:8080/parabank/services/bank?_wadl&type=xml');
    cy.get(`${basePage.rightPanelLocator}`).contains('a', 'http://parabank.parasoft.com:8080/parabank/api-docs/index.html');
})

Then(`I can view the available Bookstore SOAP services`, () => {
    const bookstoreSOAPservices = [
        "Bookstore",
        "Bookstore (Version 2.0)",
        "(WS-Security Username Token)",
        "(WS-Security Signature)",
        "(WS-Security Encryption)",
        "(WS-Security Signature and Encryption)"
    ]

    cy.get('span[class="heading"]').contains('Available Bookstore SOAP services:')
    for(const bookstoreSOAPservice of bookstoreSOAPservices) {
        cy.get(`${basePage.rightPanelLocator}`).contains('span[class="porttypename"]', bookstoreSOAPservice);
    }
})
