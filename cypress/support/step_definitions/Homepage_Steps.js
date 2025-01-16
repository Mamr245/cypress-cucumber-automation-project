import { Given, When }  from "@badeball/cypress-cucumber-preprocessor";
import Homepage_PO from "../page_objects/Homepage_PO";

const homePage = new Homepage_PO();

Given(`I navigate to the ParaBank website`, () => {
    homePage.navigateToHomepage();
})

When(`I click on the register link`, () => {
    homePage.clickOnRegisterButton();
})

