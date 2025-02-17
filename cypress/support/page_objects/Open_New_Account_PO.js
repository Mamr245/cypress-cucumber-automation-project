import Base_PO from "./Base_PO";

class OpenNewAccount_PO extends Base_PO { 
    selectChekckingAccountOption() {
        cy.get('#type').select('CHECKING');
    }

    selectSavingsAccountOption() {
        cy.get('#type').select('SAVINGS');
    } 
    
    clickOpenNewAccountButton() {
        cy.get('input[value="Open New Account"]').click();
    }
}
export default OpenNewAccount_PO