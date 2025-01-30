import Base_PO from "./Base_PO";

class AccountServices_PO extends Base_PO {
    clickLogOutButton() {
        cy.get('a[href*="logout"]').click();
    }
    
    clickAccountsOverviewLink() {
        cy.get('a[href*="overview"]').click();
    }

    clickOpenNewAccountLink() {
        cy.get('a[href*="openaccount"]').click();
    }
    
    selectChekckingAccountOption() {
        cy.get('#type').select('CHECKING');
    }

    selectSavingsAccountOption() {
        cy.get('#type').select('SAVINGS');
    } 
    
    clickOpenNewAccountButton() {
        cy.get('input[value="Open New Account"]').click();
    }

    selectFromAccount(account) {
        cy.get('#fromAccountId').select(account);
    }

}
export default AccountServices_PO;