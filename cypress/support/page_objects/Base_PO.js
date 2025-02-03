class Base_PO {
    userData = 'userData.json';
    configFile = 'config.json';

    navigateToHomepage() {
        cy.fixture(this.configFile).then((data) => {
            cy.visit(data.baseURL)
        })
    }

    getPageTitle() {
        return cy.title();
    }
}
export default Base_PO;