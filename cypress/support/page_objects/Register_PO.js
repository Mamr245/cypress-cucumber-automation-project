import Base_PO from "./Base_PO";
import { faker } from '@faker-js/faker';

class Register_PO extends Base_PO {

    clientFirstName = faker.person.firstName();
    clientLastName = faker.person.lastName();
    clientAddress = faker.location.street();
    clientCity = faker.location.city();
    clientState = faker.location.state();
    clientZipCode = faker.location.zipCode();
    clientPhoneNumber = faker.phone.number();
    clientSSN= super.generateSSN();
    clientUsername = `${faker.internet.username()}_${Date.now().toString().slice(-5)}`
    clientPassword = faker.internet.password();

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

    /* Workaround because demo site does not save credentials
    We save the defined credentials into a file while creating an account and read that file when performing the login tests
    */
    saveUserData(username, password, firstName, lastName, address, city, state, zipCode, ssn) {
        cy.writeFile('cypress/fixtures/userData.json', { 
            username: username, 
            password: password, 
            firstName: firstName, 
            lastName: lastName,
            address: address,
            city: city,
            state: state,
            zipCode: zipCode,
            SSN: ssn
         })
    }
}
export default Register_PO;
