import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import { faker } from '@faker-js/faker';
import UpdateProfile_PO from "../page_objects/Update_Profile_PO";
import AccountServices_PO from "../page_objects/AccountServices_PO";

const accountServicesPage = new AccountServices_PO();
const updateProfilePage = new UpdateProfile_PO();
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const address = faker.location.street();
const city = faker.location.city();
const state = faker.location.state();
const zipCode = faker.location.zipCode();
const phoneNumber = faker.phone.number();

When(`I type the the necessary updated information`, () => {
    updateProfilePage.waitForUserInformationToAppear();
    updateProfilePage.typeFirstName(firstName);
    updateProfilePage.typeLastName(lastName);
    updateProfilePage.typeAddress(address);
    updateProfilePage.typeCity(city);
    updateProfilePage.typeState(state);
    updateProfilePage.typeZipCode(zipCode);
    updateProfilePage.typePhoneNumber(phoneNumber);
})


When(`I type the updated information but leave the first name field empty`, () => {
    updateProfilePage.waitForUserInformationToAppear();
    updateProfilePage.typeFirstName('');
    updateProfilePage.typeLastName(lastName);
    updateProfilePage.typeAddress(address);
    updateProfilePage.typeCity(city);
    updateProfilePage.typeState(state);
    updateProfilePage.typeZipCode(zipCode);
    updateProfilePage.typePhoneNumber(phoneNumber);
})


When(`I type the updated information but leave the last name field empty`, () => {
    updateProfilePage.waitForUserInformationToAppear();
    updateProfilePage.typeFirstName(firstName);
    updateProfilePage.typeLastName('');
    updateProfilePage.typeAddress(address);
    updateProfilePage.typeCity(city);
    updateProfilePage.typeState(state);
    updateProfilePage.typeZipCode(zipCode);
    updateProfilePage.typePhoneNumber(phoneNumber);
})


When(`I type the updated information but leave the address field empty`, () => {
    updateProfilePage.waitForUserInformationToAppear();
    updateProfilePage.typeFirstName(firstName);
    updateProfilePage.typeLastName(lastName);
    updateProfilePage.typeAddress('');
    updateProfilePage.typeCity(city);
    updateProfilePage.typeState(state);
    updateProfilePage.typeZipCode(zipCode);
    updateProfilePage.typePhoneNumber(phoneNumber);
})


When(`I type the updated information but leave the city field empty`, () => {
    updateProfilePage.waitForUserInformationToAppear();
    updateProfilePage.typeFirstName(firstName);
    updateProfilePage.typeLastName(lastName);
    updateProfilePage.typeAddress(address);
    updateProfilePage.typeCity('');
    updateProfilePage.typeState(state);
    updateProfilePage.typeZipCode(zipCode);
    updateProfilePage.typePhoneNumber(phoneNumber);
})


When(`I type the updated information but leave the state field empty`, () => {
    updateProfilePage.waitForUserInformationToAppear();
    updateProfilePage.typeFirstName(firstName);
    updateProfilePage.typeLastName(lastName);
    updateProfilePage.typeAddress(address);
    updateProfilePage.typeCity(city);
    updateProfilePage.typeState('');
    updateProfilePage.typeZipCode(zipCode);
    updateProfilePage.typePhoneNumber(phoneNumber);
})


When(`I type the updated information but leave the zip code field empty`, () => {
    updateProfilePage.waitForUserInformationToAppear();
    updateProfilePage.typeFirstName(firstName);
    updateProfilePage.typeLastName(lastName);
    updateProfilePage.typeAddress(address);
    updateProfilePage.typeCity(city);
    updateProfilePage.typeState(state);
    updateProfilePage.typeZipCode('');
    updateProfilePage.typePhoneNumber(phoneNumber);
})



When(`I click the Update Profile buton`, () => {
    updateProfilePage.clickUpdateProfileButton();
})

Then(`A successful message is presented`, () => {
    cy.get('#updateProfileResult > h1').contains('Profile Updated');
    cy.get('#updateProfileResult > p').contains('Your updated address and phone number have been added to the system.');
})

When(`The information is updated`, () => {
    accountServicesPage.clickUpdateContactInfoLink();
    //cy.wait(5000);
    updateProfilePage.validateUserInformation(firstName, lastName, address, city, state, zipCode, phoneNumber);
})
