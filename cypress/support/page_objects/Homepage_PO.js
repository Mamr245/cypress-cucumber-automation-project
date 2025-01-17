import Base_PO from "./Base_PO";

class Homepage_PO extends Base_PO {
    clickOnRegisterButton() {
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
}
export default Homepage_PO;