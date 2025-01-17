class Base_PO {
    navigateToHomepage() {
        cy.fixture("config.json").then((data) => {
            cy.visit(data.baseURL)
        })
    }

    getPageTitle() {
        return cy.title();
    }
}
export default Base_PO;