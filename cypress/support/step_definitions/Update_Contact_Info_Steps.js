import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import UpdateContactInfo_PO from "../page_objects/Update_Contact_Info_PO";
import AccountOverview_PO from "../page_objects/Account_Overview_PO";
import updatedClientData from "../../fixtures/updatedClientData.json";

const accountOverviewPage = new AccountOverview_PO();
const updateContactInfoPage = new UpdateContactInfo_PO();

When(`I type the the necessary updated information`, () => {
    updateContactInfoPage.waitForUserInformationToAppear();
    updateContactInfoPage.typeFirstName(updatedClientData.firstname);
    updateContactInfoPage.typeLastName(updatedClientData.lastname);
    updateContactInfoPage.typeAddress(updatedClientData.address);
    updateContactInfoPage.typeCity(updatedClientData.city);
    updateContactInfoPage.typeState(updatedClientData.state);
    updateContactInfoPage.typeZipCode(updatedClientData.zipCode);
    updateContactInfoPage.typePhoneNumber(updatedClientData.phoneNumber);
})

When(`I type the updated information but leave the first name field empty`, () => {
    updateContactInfoPage.waitForUserInformationToAppear();
    updateContactInfoPage.typeFirstName('');
    updateContactInfoPage.typeLastName(updatedClientData.lastname);
    updateContactInfoPage.typeAddress(updatedClientData.address);
    updateContactInfoPage.typeCity(updatedClientData.city);
    updateContactInfoPage.typeState(updatedClientData.state);
    updateContactInfoPage.typeZipCode(updatedClientData.zipCode);
    updateContactInfoPage.typePhoneNumber(updatedClientData.phoneNumber);
})

When(`I type the updated information but leave the last name field empty`, () => {
    updateContactInfoPage.waitForUserInformationToAppear();
    updateContactInfoPage.typeFirstName(updatedClientData.firstname);
    updateContactInfoPage.typeLastName('');
    updateContactInfoPage.typeAddress(updatedClientData.address);
    updateContactInfoPage.typeCity(updatedClientData.city);
    updateContactInfoPage.typeState(updatedClientData.state);
    updateContactInfoPage.typeZipCode(updatedClientData.zipCode);
    updateContactInfoPage.typePhoneNumber(updatedClientData.phoneNumber);
})

When(`I type the updated information but leave the address field empty`, () => {
    updateContactInfoPage.waitForUserInformationToAppear();
    updateContactInfoPage.typeFirstName(updatedClientData.firstname);
    updateContactInfoPage.typeLastName(updatedClientData.lastname);
    updateContactInfoPage.typeAddress('');
    updateContactInfoPage.typeCity(updatedClientData.city);
    updateContactInfoPage.typeState(updatedClientData.state);
    updateContactInfoPage.typeZipCode(updatedClientData.zipCode);
    updateContactInfoPage.typePhoneNumber(updatedClientData.phoneNumber);
})

When(`I type the updated information but leave the city field empty`, () => {
    updateContactInfoPage.waitForUserInformationToAppear();
    updateContactInfoPage.typeFirstName(updatedClientData.firstname);
    updateContactInfoPage.typeLastName(updatedClientData.lastname);
    updateContactInfoPage.typeAddress(updatedClientData.address);
    updateContactInfoPage.typeCity('');
    updateContactInfoPage.typeState(updatedClientData.state);
    updateContactInfoPage.typeZipCode(updatedClientData.zipCode);
    updateContactInfoPage.typePhoneNumber(updatedClientData.phoneNumber);
})

When(`I type the updated information but leave the state field empty`, () => {
    updateContactInfoPage.waitForUserInformationToAppear();
    updateContactInfoPage.typeFirstName(updatedClientData.firstname);
    updateContactInfoPage.typeLastName(updatedClientData.lastname);
    updateContactInfoPage.typeAddress(updatedClientData.address);
    updateContactInfoPage.typeCity(updatedClientData.city);
    updateContactInfoPage.typeState('');
    updateContactInfoPage.typeZipCode(updatedClientData.zipCode);
    updateContactInfoPage.typePhoneNumber(updatedClientData.phoneNumber);
})

When(`I type the updated information but leave the zip code field empty`, () => {
    updateContactInfoPage.waitForUserInformationToAppear();
    updateContactInfoPage.typeFirstName(updatedClientData.firstname);
    updateContactInfoPage.typeLastName(updatedClientData.lastname);
    updateContactInfoPage.typeAddress(updatedClientData.address);
    updateContactInfoPage.typeCity(updatedClientData.city);
    updateContactInfoPage.typeState(updatedClientData.state);
    updateContactInfoPage.typeZipCode('');
    updateContactInfoPage.typePhoneNumber(updatedClientData.phoneNumber);
})

When(`I click the Update Profile buton`, () => {
    updateContactInfoPage.clickUpdateProfileButton();
})

Then(`A successful message is presented`, () => {
    cy.get('#updateProfileResult > h1').contains('Profile Updated');
    cy.get('#updateProfileResult > p').contains('Your updated address and phone number have been added to the system.');
})

When(`The information is updated`, () => {
    accountOverviewPage.clickUpdateContactInfoLink();
    updateContactInfoPage.waitForUserInformationToAppear()
    updateContactInfoPage.validateUserInformation(updatedClientData.firstname, updatedClientData.lastname, 
        updatedClientData.address, updatedClientData.city, updatedClientData.state, 
        updatedClientData.zipCode, updatedClientData.phoneNumber);
})
