import { Given, When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import Homepage_PO from "../page_objects/Homepage_PO";

const homePage = new Homepage_PO();

/* Workaround because demo site does not save credentials
This file is generated while creating an account.
Right after that the login tests are performed using the data written to the created file
*/
const userData = 'userData.json' 

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
    cy.fixture(userData).then((data)  => {
        homePage.typeUsername(data.username);
    })
})

When(`I type an invalid username`, () => {
    homePage.typeUsername("WrongUsername");
})

When(`I type a valid password`, () => {
    cy.fixture(userData).then((data)  => {
        homePage.typePassword(data.password);
    })
})

When(`I type an invalid password`, () => {
    homePage.typePassword("WrongUsername");
})

Then(`I should be able to access my account`, () => {
    cy.fixture(userData).then((data)  => {
        cy.get('#leftPanel > p').contains('Welcome');
        cy.get('#leftPanel > p').contains(data.firstName + ' ' + data.lastName);
    })
})

Then(`I should get the error {string}`, (errorMessage) => {
    cy.get('#rightPanel > h1').should('have.text', 'Error!');
    cy.get('#rightPanel > p').should('have.text', errorMessage);
})

Then(`I should be logged out`, () => {
    cy.fixture("config.json").then((data) => {
        cy.url().should('include', data.baseURL);
    })
})

 