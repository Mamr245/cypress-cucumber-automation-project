import { Given, When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import Homepage_PO from "../page_objects/Homepage_PO";

const homePage = new Homepage_PO();

Given(`I navigate to the ParaBank website`, () => {
    homePage.navigateToHomepage();
})

When(`I click on the register link`, () => {
    homePage.clickOnRegisterLink();
})

When(`I click on the Forgot Login Info link`, () => {
    homePage.clickOnForgotLoginInfoLink();
})

When(`I click on the About Us link in the footer panel`, () => {
    homePage.clickAboutUsFooterLink();
})

When(`I click on the Home link in the footer panel`, () => {
    homePage.clickHomeFooterLink();
})

When(`I click on the About Us link in the header panel`, () => {
    homePage.clickAboutUsHeaderLink();
})

When(`I click on the Products link in the footer panel`, () => {
    homePage.clickProductsFooterLink();
})

When(`I click on the Products link in the header panel`, () => {
    homePage.clickProductsHeaderLink();
})

When(`I click on the Locations link in the footer panel`, () => {
    homePage.clickLocationsFooterLink();
})

When(`I click on the Locations link in the header panel`, () => {
    homePage.clickLocationsHeaderLink();
})

When(`I click on the Forum link in the footer panel`, () => {
    homePage.clickForumFooterLink();
})

When(`I click on the Contact Us link in the footer panel`, () => {
    homePage.clickContactUsFooterLink();
})

When(`I click on the Site Map link in the footer panel`, () => {
    homePage.clickSiteMapFooterLink();
})

When(`I click on the Services link in the footer panel`, () => {
    homePage.clickServicesFooterLink();
})

When(`I click on the Services link in the header panel`, () => {
    homePage.clickServicesHeaderLink();
})

When(`I click on the Parasoft website link in the footer panel`, () => {
    homePage.clickParasoftWebsiteFooterLink();
})

When(`I click on the About Us button in the header panel`, () => {
    homePage.clickAboutUsButton();
})

When(`I click on the Envelope button in the header panel`, () => {
    homePage.clickEnvelopeButton();
})

When(`I click on the Home button in the header panel`, () => {
    homePage.clickHomeButton();
})

When(`I click on the Admin Page button in the header panel`, () => {
    homePage.clickAdminPageHeaderLink();
})

When(`I click on the Log In button`, () => {
    homePage.clickOnLoginButton();
})

When(`I type a valid username`, () => {
    cy.fixture(homePage.userData).then((data)  => {
        homePage.typeUsername(data.username);
    })
})

When(`I type an invalid username`, () => {
    homePage.typeUsername("WrongUsername");
})

When(`I type a valid password`, () => {
    cy.fixture(homePage.userData).then((data)  => {
        homePage.typePassword(data.password);
    })
})

When(`I type an invalid password`, () => {
    homePage.typePassword("WrongUsername");
})

Then(`I should be logged out`, () => {
    cy.fixture(homePage.configFile).then((data) => {
        cy.url().should('include', data.baseURL);
    })
})

Then(`I am redirected to ParaBank's products website`, () => {
    cy.url().should('eq', 'https://www.parasoft.com/products/');
})

Then(`I am redirected to ParaBank's solutions website`, () => {
    cy.url().should('eq', 'https://www.parasoft.com/solutions/');
})

Then(`I am redirected to ParaBank's forum website`, () => {
    cy.url().should('eq', 'https://forums.parasoft.com/');
})

Then(`I am redirected back to the main page`, () => {
    cy.fixture(homePage.configFile).then((data) => {
        cy.url().should('include', data.baseURL);
    })
})

Then(`I am redirected to Parasoft's website`, () => {
    cy.url().should('eq', 'https://www.parasoft.com/');
})

 
 