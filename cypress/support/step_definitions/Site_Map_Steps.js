import { Then }  from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../page_objects/Base_PO";

const basePage = new Base_PO();

Then(`I can view the ParaBank's website structure`, () => {
    const solutions = [
        "About Us",
        "Services",
        "Products",
        "Locations",
        "Admin Page"
    ]

    const accountServices = [
        "Open New Account",
        "Accounts Overview",
        "Transfer Funds",
        "Bill Pay",
        "Find Transactions",
        "Update Contact Info",
        "Request Loan",
        "Log Out",
    ]

    for(const solution of solutions) {
        cy.get(`${basePage.rightPanelLocator} > ul[class="leftmenu"]`).contains('a', solution);
    }

    for(const accountService of accountServices) {
        cy.get(`${basePage.rightPanelLocator}`).contains('a', accountService);
    }
})