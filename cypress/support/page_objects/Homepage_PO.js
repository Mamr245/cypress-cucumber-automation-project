import Base_PO from "./Base_PO";

class Homepage_PO extends Base_PO {
    clickOnRegisterLink() {
        cy.get('a[href*="register"]').click()
    }

    clickOnLoginButton() {
        cy.get('input[value="Log In"]').click();
    }

    typeUsername(username) {
        cy.get('input[name="username"]').type(username);
    }

    typePassword(password) {
        cy.get('input[name="password"]').type(password);
    }

    clickAboutUsLink() {
        cy.get('#footerPanel').find('a[href*="about"]').click()
    }
    
    clickProductsLink() {
        cy.get('#footerPanel').find('a[href*="products"]').click()
    } 
}
export default Homepage_PO;