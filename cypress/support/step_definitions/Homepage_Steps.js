import { Given, When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import Homepage_PO from "../page_objects/Homepage_PO";

const homePage = new Homepage_PO();

/* Workaround because demo site does not save credentials
This file is generated while creating an account.
Right after that the login tests are performed using the data written to the created file
*/
const credentialsFile = 'credentials.json' 

Given(`I navigate to the ParaBank website`, () => {
    homePage.navigateToHomepage();
})

When(`I click on the register link`, () => {
    homePage.clickOnRegisterButton();
})

When(`I click on the Log In button`, () => {
    homePage.clickOnLoginButton();
})

When(`I type a valid username`, () => {
    cy.fixture(credentialsFile).then((userCredentials)  => {
        homePage.typeUsername(userCredentials.username);
    })
})

When(`I type a valid password`, () => {
    cy.fixture(credentialsFile).then((userCredentials)  => {
        homePage.typePassword(userCredentials.password);
    })
})

Then(`I should be able to access my account`, () => {
    cy.fixture(credentialsFile).then((userCredentials)  => {
        cy.get('#leftPanel > p').contains('Welcome');
        cy.get('#leftPanel > p').contains(userCredentials.firstName + ' ' + userCredentials.lastName);
    })
})

Then(`I should get an error`, () => {
    cy.get('#rightPanel > h1').should('have.text', 'Error!');
    cy.get('#rightPanel > p').should('have.text', 'Please enter a username and password.')
})

