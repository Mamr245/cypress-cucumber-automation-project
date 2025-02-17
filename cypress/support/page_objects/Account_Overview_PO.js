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

    clickBillPayButton() {
        cy.get('a[href*="billpay"]').click();
    }

    clickUpdateContactInfoLink() {
        cy.get('a[href*="updateprofile"]').click();
    }
}
export default AccountOverview_PO;