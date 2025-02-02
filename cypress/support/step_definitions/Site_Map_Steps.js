import { Then }  from "@badeball/cypress-cucumber-preprocessor";

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
        cy.get('#rightPanel > ul[class="leftmenu"]').contains('a', solution);
    }

    for(const accountService of accountServices) {
        cy.get('#rightPanel').contains('a', accountService);
    }
})