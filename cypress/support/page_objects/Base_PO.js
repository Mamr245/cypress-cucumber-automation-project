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

    generateSSN() {
        const firstThreeDigits = Math.floor(Math.random() * 999).toString();
        const middleDigits = Math.floor(Math.random() * 99).toString();
        const lastFourDigits = Math.floor(Math.random() * 9999).toString();

        const ssn = firstThreeDigits + "-" + middleDigits + "-" + lastFourDigits;
        return ssn;
    }
}
export default Base_PO;