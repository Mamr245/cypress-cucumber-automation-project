import Base_PO from "./Base_PO";

class Register_PO extends Base_PO {

    typeFirstName(firstName) {
        cy.get('input[name="customer.firstName"]').type(firstName);
    }

    typeLastName(lastName) {
        cy.get('input[name="customer.lastName"]').type(lastName);
    }

    typeAddress(address) {
        cy.get('input[name="customer.address.street"]').type(address);
    }

    typeCity(city) {
        cy.get('input[name="customer.address.city"]').type(city);
    }

    typeState(state) {
        cy.get('input[name="customer.address.state"]').type(state);
    }

    typeZipCode(zipCode) {
        cy.get('input[name="customer.address.zipCode"]').type(zipCode);
    }

    typePhoneNumber(phoneNumber) {
        cy.get('input[name="customer.phoneNumber"]').type(phoneNumber);
    }

    typeSSN(ssn) {
        cy.get('input[name="customer.ssn"]').type(ssn);
    }

    typeUsername(username) {
        cy.get('input[name="customer.username"]').type(username);
    }

    typePassword(password) {
        cy.get('input[name="customer.password"]').type(password);
    }

    repeatPassword(password) {
        cy.get('input[name="repeatedPassword"]').type(password);
    }

    clickRegisterButton() {
        cy.get('input[value="Register"]').click();
    }
}
export default Register_PO;
