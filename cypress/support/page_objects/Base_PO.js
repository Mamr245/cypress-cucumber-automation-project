class Base_PO {
    userData = 'userData.json';
    configFile = 'config.json';
    rightPanelLocator = '#rightPanel';

    navigateToHomepage() {
        cy.fixture(this.configFile).then((data) => {
            cy.visit(data.baseURL);
        })
    }

    generateSSN() {
        const firstThreeDigits = this.getRandomIntInclusive(100, 999).toString();
        const middleDigits = this.getRandomIntInclusive(10, 99).toString();
        const lastFourDigits = this.getRandomIntInclusive(1000, 9999).toString();
        const ssn = firstThreeDigits + "-" + middleDigits + "-" + lastFourDigits;
        return ssn;
    }

    getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
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