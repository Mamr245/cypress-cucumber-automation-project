import Base_PO from "./Base_PO";

class Homepage_PO extends Base_PO {
    clickOnRegisterButton() {
        cy.get('a[href*="register"]').click()
    }
}
export default Homepage_PO;