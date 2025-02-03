import Base_PO from "./Base_PO";

class Homepage_PO extends Base_PO {
    footer = '#footerPanel';
    headerLeftMenu = '#headerPanel > ul[class="leftmenu"]';

    clickOnRegisterLink() {
        cy.get('a[href*="register"]').click()
    }

    clickOnLoginButton() {
        cy.get('input[value="Log In"]').click();
    }

    typeUsername(username) {
        cy.get('input[name="username"]').type(username);
    }

    typePassword(password) {
        cy.get('input[name="password"]').type(password);
    }

    clickAboutUsFooterLink() {
        cy.get(this.footer).find('a[href*="about"]').click()
    }
    
    clickProductsFooterLink() {
        cy.get(this.footer).find('a[href*="products"]').click()
    } 

    clickLocationsFooterLink() {
        cy.get(this.footer).find('a[href*="contacts"]').click()
    }
    
    clickForumFooterLink() {
        cy.get(this.footer).find('a[href*="forums"]').click()
    } 

    clickContactUsFooterLink() {
        cy.get(this.footer).find('a[href*="contact.htm"]').click()
    } 

    clickSiteMapFooterLink() {
        cy.get(this.footer).find('a[href*="sitemap"]').click()
    } 

    clickServicesFooterLink() {
        cy.get(this.footer).find('a[href*="services"]').click()
    } 

    clickAboutUsHeaderLink() {
        cy.get(this.headerLeftMenu).find('a[href*="about"]').click()
    }

    clickServicesHeaderLink() {
        cy.get(this.headerLeftMenu).find('a[href*="services"]').click()
    } 

    clickProductsHeaderLink() {
        cy.get(this.headerLeftMenu).find('a[href*="products"]').click()
    } 

    clickLocationsHeaderLink() {
        cy.get(this.headerLeftMenu).find('a[href*="contacts"]').click()
    }  
}
export default Homepage_PO;