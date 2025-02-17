import { Before, After, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`I should get the error message {string}`, (errorMessage) => {
    cy.get('.error').contains(errorMessage);
})