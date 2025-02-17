import Base_PO from "./Base_PO";

class BillPay_PO extends Base_PO {
    typeName(name) {
        cy.get('input[name="payee.name"]').type(name);
    }

    typeAddress(address) {
        cy.get('input[name="payee.address.street"]').type(address);
    }

    typeCity(city) {
        cy.get('input[name="payee.address.city"]').type(city);
    }

    typeState(state) {
        cy.get('input[name="payee.address.state"]').type(state);
    }

    typeZipCode(zipCode) {
        cy.get('input[name="payee.address.zipCode"]').type(zipCode);
    }

    typePhoneNumber(phoneNumber) {
        cy.get('input[name="payee.phoneNumber"]').type(phoneNumber);
    }

    typeAccountNumber(accountNumber) {
        cy.get('input[name="payee.accountNumber"]').type(accountNumber);
    }

    typeVerifyAccountNumber(accountNumber) {
        cy.get('input[name="verifyAccount"]').type(accountNumber);
    }

    typeAmount(amount) {
        cy.get('input[name="amount"]').type(amount);
    }

    selectFromAccount(fromAccount) {
        cy.get('select[name="fromAccountId"]').select(fromAccount);
    }

    clickSendPaymentButton() {
        cy.get('input[value="Send Payment"]').click();
    }
}

export default BillPay_PO;