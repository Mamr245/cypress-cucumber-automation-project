import Base_PO from "./Base_PO";

class UpdateContactInfo_PO extends Base_PO { 
    firstNameInputLocator = 'input[name="customer.firstName"]';
    lastNameInputLocator = 'input[name="customer.lastName"]';
    addressInputLocator = 'input[name="customer.address.street"]';
    cityInputLocator = 'input[name="customer.address.city"]';
    stateInputLocator = 'input[name="customer.address.state"]';
    zipCodeNameInputLocator = 'input[name="customer.address.zipCode"]';
    phoneNumberNameInputLocator = 'input[name="customer.phoneNumber"]';

    waitForUserInformationToAppear() {
        /* All user info is shown at once
        Wait until first field (First Name) is not empty
        When the first field isn't empty, it means the remaining user info is being shown too */
        cy.get(this.firstNameInputLocator).invoke('val').should((firstName) => {
            expect(firstName).to.not.be.empty;
        });
    }
  
    typeFirstName(firstName) {
        if (firstName == '') {
            cy.get(this.firstNameInputLocator).clear();
            return;
        }
        cy.get(this.firstNameInputLocator).clear().type(firstName);
    }

    typeLastName(lastName) {
        if (lastName == '') {
            cy.get(this.lastNameInputLocator).clear();
            return;
        }
        cy.get(this.lastNameInputLocator).clear().type(lastName);
    }

    typeAddress(address) {
        if (address == '') {
            cy.get(this.addressInputLocator).clear();
            return;
        }
        cy.get(this.addressInputLocator).clear().type(address);
    }

    typeCity(city) {
        if (city == '') {
            cy.get(this.cityInputLocator).clear();
            return;
        }
        cy.get(this.cityInputLocator).clear().type(city);
    }

    typeState(state) {
        if (state == '') {
            cy.get(this.stateInputLocator).clear();
            return;
        }
        cy.get(this.stateInputLocator).clear().type(state);
    }
 
    typeZipCode(zipCode) {
        if (zipCode == '') {
            cy.get(this.zipCodeNameInputLocator).clear();
            return;
        }
        cy.get(this.zipCodeNameInputLocator).clear().type(zipCode);
    }
 
    typePhoneNumber(phoneNumber) {
        if (phoneNumber == '') {
            cy.get(this.phoneNumberNameInputLocator).clear();
            return;
        }
        cy.get(this.phoneNumberNameInputLocator).clear().type(phoneNumber);
    }

    clickUpdateProfileButton() {
        cy.get('input[value="Update Profile"]').click();
    }

    validateUserInformation(firstName, lastName, address, city, state, zipCode, phoneNumber) {
        cy.get(this.firstNameInputLocator).invoke('val').should('eq', firstName);
        cy.get(this.lastNameInputLocator).invoke('val').should('eq', lastName);
        cy.get(this.addressInputLocator).invoke('val').should('eq', address);
        cy.get(this.cityInputLocator).invoke('val').should('eq', city);
        cy.get(this.stateInputLocator).invoke('val').should('eq', state);
        cy.get(this.zipCodeNameInputLocator).invoke('val').should('eq', zipCode);
        cy.get(this.phoneNumberNameInputLocator).invoke('val').should('eq', phoneNumber);
    }
}
export default UpdateContactInfo_PO;