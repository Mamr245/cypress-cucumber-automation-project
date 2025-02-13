import Base_PO from "./Base_PO";

class CustomerLookup_PO extends Base_PO { 
    typeFirstName(firstName) {
        cy.get('#firstName').type(firstName);
    }

    typeLastName(lastName) {
        cy.get('#lastName').type(lastName);
    }

    typeAddress(address) {
        cy.get('input[name="address.street"]').type(address);
    }

    typeCity(city) {
        cy.get('input[name="address.city"]').type(city);
    }

    typeState(state) {
        cy.get('input[name="address.state"]').type(state);
    }
 
    typeZipCode(zipCode) {
        cy.get('input[name="address.zipCode"]').type(zipCode);
    }
 
    typeSSN(ssn) {
        cy.get('#ssn').type(ssn);
    }

    clickFindMyLoginInfo() {
        cy.get('input[value="Find My Login Info"]').click()
    }
}
export default CustomerLookup_PO
