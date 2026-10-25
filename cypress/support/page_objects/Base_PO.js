import configFile from '../../fixtures/config.json';

class Base_PO {
    rightPanelLocator = '#rightPanel';
    homePageURL = configFile.homePageURL;

    navigateToHomepage() {
        cy.visit(this.homePageURL);
    }

    selectFromAccount(fromAccount) {
        cy.get('#fromAccountId').select(fromAccount);
    }

    getCurrentDate() {
        // Get current date
        const currentDate = new Date();

        // Extract day, month, and year
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();

        // Add leading zero to day and month if needed
        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;

        // Format the date as dd/mm/yyyy
        const formattedCurrentDate = `${month}-${day}-${year}`;
        return formattedCurrentDate;
    }

    getFromDate(numberOfdaysToSubtract) {
        // Get the current date
        const currentDate = new Date();

        // Instantiate another date object to avoid mutating the current date object
        const subtractedDate = new Date(currentDate);
        subtractedDate.setDate(subtractedDate.getDate() - numberOfdaysToSubtract);

        // Extract day, month, and year
        let day = subtractedDate.getDate();
        let month = subtractedDate.getMonth() + 1;
        let year = subtractedDate.getFullYear();

        // Add leading zero to day and month if needed
        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;

        // Format the date as dd/mm/yyyy
        const formattedSubtractedDate = `${month}-${day}-${year}`;
        return formattedSubtractedDate;
    }
}
export default Base_PO;