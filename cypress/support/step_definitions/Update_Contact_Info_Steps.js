import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import { faker } from '@faker-js/faker';
import UpdateContactInfo_PO from "../page_objects/Update_Contact_Info_PO";
import AccountServices_PO from "../page_objects/Account_Overview_PO";

const accountServicesPage = new AccountServices_PO();
const updateContactInfoPage = new UpdateContactInfo_PO();

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const address = faker.location.street();
const city = faker.location.city();
const state = faker.location.state();
const zipCode = faker.location.zipCode();
const phoneNumber = faker.phone.number();

When(`I type the the necessary updated information`, () => {
    updateContactInfoPage.waitForUserInformationToAppear();
    updateContactInfoPage.typeFirstName(firstName);
    updateContactInfoPage.typeLastName(lastName);
    updateContactInfoPage.typeAddress(address);
    updateContactInfoPage.typeCity(city);
    updateContactInfoPage.typeState(state);
    updateContactInfoPage.typeZipCode(zipCode);
    updateContactInfoPage.typePhoneNumber(phoneNumber);
})

When(`I type the updated information but leave the first name field empty`, () => {
    updateContactInfoPage.waitForUserInformationToAppear();
    updateContactInfoPage.typeFirstName('');
    updateContactInfoPage.typeLastName(lastName);
    updateContactInfoPage.typeAddress(address);
    updateContactInfoPage.typeCity(city);
    updateContactInfoPage.typeState(state);
    updateContactInfoPage.typeZipCode(zipCode);
    updateContactInfoPage.typePhoneNumber(phoneNumber);
})

When(`I type the updated information but leave the last name field empty`, () => {
    updateContactInfoPage.waitForUserInformationToAppear();
    updateContactInfoPage.typeFirstName(firstName);
    updateContactInfoPage.typeLastName('');
    updateContactInfoPage.typeAddress(address);
    updateContactInfoPage.typeCity(city);
    updateContactInfoPage.typeState(state);
    updateContactInfoPage.typeZipCode(zipCode);
    updateContactInfoPage.typePhoneNumber(phoneNumber);
})

When(`I type the updated information but leave the address field empty`, () => {
    updateContactInfoPage.waitForUserInformationToAppear();
    updateContactInfoPage.typeFirstName(firstName);
    updateContactInfoPage.typeLastName(lastName);
    updateContactInfoPage.typeAddress('');
    updateContactInfoPage.typeCity(city);
    updateContactInfoPage.typeState(state);
    updateContactInfoPage.typeZipCode(zipCode);
    updateContactInfoPage.typePhoneNumber(phoneNumber);
})

When(`I type the updated information but leave the city field empty`, () => {
    updateContactInfoPage.waitForUserInformationToAppear();
    updateContactInfoPage.typeFirstName(firstName);
    updateContactInfoPage.typeLastName(lastName);
    updateContactInfoPage.typeAddress(address);
    updateContactInfoPage.typeCity('');
    updateContactInfoPage.typeState(state);
    updateContactInfoPage.typeZipCode(zipCode);
    updateContactInfoPage.typePhoneNumber(phoneNumber);
})

When(`I type the updated information but leave the state field empty`, () => {
    updateContactInfoPage.waitForUserInformationToAppear();
    updateContactInfoPage.typeFirstName(firstName);
    updateContactInfoPage.typeLastName(lastName);
    updateContactInfoPage.typeAddress(address);
    updateContactInfoPage.typeCity(city);
    updateContactInfoPage.typeState('');
    updateContactInfoPage.typeZipCode(zipCode);
    updateContactInfoPage.typePhoneNumber(phoneNumber);
})

When(`I type the updated information but leave the zip code field empty`, () => {
    updateContactInfoPage.waitForUserInformationToAppear();
    updateContactInfoPage.typeFirstName(firstName);
    updateContactInfoPage.typeLastName(lastName);
    updateContactInfoPage.typeAddress(address);
    updateContactInfoPage.typeCity(city);
    updateContactInfoPage.typeState(state);
    updateContactInfoPage.typeZipCode('');
    updateContactInfoPage.typePhoneNumber(phoneNumber);
})

When(`I click the Update Profile buton`, () => {
    updateContactInfoPage.clickUpdateProfileButton();
})

Then(`A successful message is presented`, () => {
    cy.get('#updateProfileResult > h1').contains('Profile Updated');
    cy.get('#updateProfileResult > p').contains('Your updated address and phone number have been added to the system.');
})

When(`The information is updated`, () => {
    accountServicesPage.clickUpdateContactInfoLink();
    updateContactInfoPage.validateUserInformation(firstName, lastName, address, city, state, zipCode, phoneNumber);
})
