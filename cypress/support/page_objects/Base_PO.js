class Base_PO {
    userData = 'userData.json';
    configFile = 'config.json';

    navigateToHomepage() {
        cy.fixture(this.configFile).then((data) => {
            cy.visit(data.baseURL)
        })
    }

    getPageTitle() {
        return cy.title();
    }

    generateSSN() {
        const firstThreeDigits = Math.floor(Math.random() * 999).toString();
        const middleDigits = Math.floor(Math.random() * 99).toString();
        const lastFourDigits = Math.floor(Math.random() * 9999).toString();

        const ssn = firstThreeDigits + "-" + middleDigits + "-" + lastFourDigits;
        return ssn;
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
        const fromDate = new Date(currentDate);
        fromDate.setDate(fromDate.getDate() - numberOfdaysToSubtract);

        // Extract day, month, and year
        let day = fromDate.getDate();
        let month = fromDate.getMonth() + 1;
        let year = fromDate.getFullYear();

        // Add leading zero to day and month if needed
        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;

        // Format the date as dd/mm/yyyy
        const formattedfromDate= `${month}-${day}-${year}`;
        return formattedfromDate;
    }
}
export default Base_PO;