import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import { checkingAccountNumber } from "./Account_Overview_Steps";
import FindTransactions_PO from "../page_objects/Find_Transactions_PO";

const findTransactionsPage = new FindTransactions_PO();
var currentDate;
var transactionId;

When(`I select an account to search`, () => {
    findTransactionsPage.selecToAccount(checkingAccountNumber);
})

When(`I type today's date`, () => {
    currentDate = findTransactionsPage.getCurrentDate();
    findTransactionsPage.typeTransactionDate(currentDate);
})

When(`I click the Find Transactions button in the find by date section`, () => {
    findTransactionsPage.clickFindTransactionsButton('date');
})

When(`I can see the transactions' information`, () => {
    findTransactionsPage.clickTransactionLink();
    cy.get('#rightPanel').contains('Transaction ID');
    cy.get('#rightPanel').contains('Date');
    cy.get('#rightPanel').contains('Description');
    cy.get('#rightPanel').contains('Type');
    cy.get('#rightPanel').contains('Amount');
    cy.get('#rightPanel > table').find('tr').first().invoke('text').then((TransactionID) => {
        transactionId = TransactionID;       
    })
})

Then(`The transactions performed today are shown`, () => {
    cy.get('#resultContainer').contains('Transaction Results');
    cy.get('#resultContainer').contains('Date');
    cy.get('#resultContainer').contains('Debit (-)');
    cy.get('#resultContainer').contains('Credit (+)');
    cy.get('#transactionBody tr').each(($row) => {
        cy.wrap($row).contains(currentDate);
      })
})

export { transactionId };
