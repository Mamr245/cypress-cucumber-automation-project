import Base_PO from "./Base_PO";

class AccountOverview_PO extends Base_PO {
    clickLogOutButton() {
        cy.get('a[href*="logout"]').click();
    }
    
    clickAccountsOverviewLink() {
        cy.get('a[href*="overview"]').click();
    }

    clickOpenNewAccountLink() {
        cy.get('a[href*="openaccount"]').click();
    }

    clickTransferFundsLink() {
        cy.get('a[href*="transfer"]').click();
    }

    clickUpdateContactInfoLink() {
        cy.get('a[href*="updateprofile"]').click();
    }

    clickTransferButton() {
        cy.get('input[value="Transfer"]').click();
    }
 /*
    selectFromAccount(account) {
        cy.get('#fromAccountId').select(account);
    }
*/
    typeAmountToTransfer(amountToTransfer) {
        cy.get('#amount').type(amountToTransfer);
    }

    selecToAccount(toAccount) {
        cy.get('#toAccountId').select(toAccount);
    }
}
export default AccountOverview_PO;