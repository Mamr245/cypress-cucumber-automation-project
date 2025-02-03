class Base_PO {
    userData = 'userData.json';

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