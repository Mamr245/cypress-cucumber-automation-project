import Base_PO from "./Base_PO";

class AdminPage_PO extends Base_PO { 
    dbFormLocator = 'form[name="initializeDB"]';
    jsmFormLocator = 'form[name="toggleJms"]';
    dataAccessModeLocator = '#adminForm > table[class="form"]';
    webServiceAndApplicationSettingsLocator = '#adminForm > table[class="form2"]';
    loanProviderDropdown = '#loanProvider';
    loanProcessorDropdown = '#loanProcessor';

    selectLoanProvider(loanProvider) {
        if (loanProvider == 'JMS') {
             cy.get(this.webServiceAndApplicationSettingsLocator).last().find(this.loanProviderDropdown).select(loanProvider).invoke("val").should("eq", "jms");
        } else if (loanProvider == 'Web Service') {
             cy.get(this.webServiceAndApplicationSettingsLocator).last().find(this.loanProviderDropdown).select(loanProvider).invoke("val").should("eq", "ws");
        } else if (loanProvider == 'Local') {
             cy.get(this.webServiceAndApplicationSettingsLocator).last().find(this.loanProviderDropdown).select(loanProvider).invoke("val").should("eq", "local");
        }
     }
    
    selectLoanProcessor(loanProcessor) {
       if (loanProcessor == 'Available Funds') {
            cy.get(this.webServiceAndApplicationSettingsLocator).last().find(this.loanProcessorDropdown).select(loanProcessor).invoke("val").should("eq", "funds");
       } else if (loanProcessor == 'Down Payment') {
            cy.get(this.webServiceAndApplicationSettingsLocator).last().find(this.loanProcessorDropdown).select(loanProcessor).invoke("val").should("eq", "down");
       } else if (loanProcessor == 'Combined') {
            cy.get(this.webServiceAndApplicationSettingsLocator).last().find(this.loanProcessorDropdown).select(loanProcessor).invoke("val").should("eq", "combined");
       }
    }
}
export default AdminPage_PO;