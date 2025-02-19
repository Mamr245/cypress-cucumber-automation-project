import Base_PO from "./Base_PO";

class FindTransactions_PO extends Base_PO { 
    
    clickFindTransactionsButton(filter) {
            switch(filter) {
            case 'id':
                cy.get('#findById').click();
                break;
            case 'amount':
                cy.get('#findByAmount').click();
                break;
            case 'date':
                cy.get('#findByDate').click();
                break;
            case 'dateRange':
                cy.get('#findByDateRange').click();
                break;
            }
    }
    
    typeTransactionId(transactionId) {
        cy.get('#transactionId').type(transactionId);
    }

    typeTransactionDate(date) {
        cy.get('#transactionDate').type(date);
    }

    typeFromDate(date) {
        cy.get('#fromDate').type(date);
    }

    typeToDate(date) {
        cy.get('#toDate').type(date);
    }

    typeAmount(amount) {
        cy.get('#amount').type(amount);
    }

    selecToAccount(account) {
        cy.get('#accountId').select(account);
    }

    clickTransactionLink() {
        cy.get('a[href*="/parabank/transaction.htm?id"]').click();
    }
}
export default FindTransactions_PO;