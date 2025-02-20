import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import { checkingAccountNumber } from "./Account_Overview_Steps";
import FindTransactions_PO from "../page_objects/Find_Transactions_PO";

const findTransactionsPage = new FindTransactions_PO();
const currentDate = findTransactionsPage.getCurrentDate();
const fromDate = findTransactionsPage.getFromDate(5);
var transactionId;
var amount;

When(`I select an account to search`, () => {
    findTransactionsPage.selecToAccount(checkingAccountNumber);
})

When(`I type today's date`, () => {
    findTransactionsPage.typeTransactionDate(currentDate);
})

When(`I type the transaction amount`, () => {
    findTransactionsPage.typeAmount(amount);
})

When(`I type a from date`, () => {
    findTransactionsPage.typeFromDate(fromDate);
})

When(`I type a to date`, () => {
    findTransactionsPage.typeToDate(currentDate);
})

When(`I click the Find Transactions button in the find by date section`, () => {
    findTransactionsPage.clickFindTransactionsButton('byDate');
})

When(`I click the Find Transactions button in the find by amount section`, () => {
    findTransactionsPage.clickFindTransactionsButton('byAmount');
})

When(`I click the Find Transactions button in the find by date range section`, () => {
    findTransactionsPage.clickFindTransactionsButton('byDateRange');
})

When(`I can see the transactions' information`, () => {
    findTransactionsPage.clickTransactionLink();
    cy.get('#rightPanel').contains('Transaction ID');
    cy.get('#rightPanel').contains('Date');
    cy.get('#rightPanel').contains('Description');
    cy.get('#rightPanel').contains('Type');
    cy.get('#rightPanel').contains('Amount');
    cy.get('#rightPanel > table > tbody > tr').last().find('td').last().invoke('text').then((transactionAmount) => {
        amount = transactionAmount.replace('$','').replace(',','.');     
    })
})

Then(`The transactions performed today are shown`, () => {
    cy.get('#resultContainer').contains('Transaction Results');
    cy.get('#resultContainer').contains('Date');
    cy.get('#resultContainer').contains('Debit (-)');
    cy.get('#resultContainer').contains('Credit (+)');
    cy.get('#transactionBody > tr').each(($row) => {
        cy.wrap($row).contains(currentDate);
      })
})

Then(`The transactions with the searched amount are shown`, () => {
    cy.get('#resultContainer').contains('Transaction Results');
    cy.get('#resultContainer').contains('Date');
    cy.get('#resultContainer').contains('Debit (-)');
    cy.get('#resultContainer').contains('Credit (+)');
    cy.get('#transactionBody > tr').each(($row) => {
        cy.wrap($row).contains(amount);
      })
})

Then(`The transactions done between the selected dates are shown`, () => {
    const dateLowerInterval = Date.parse(fromDate);
    const dateHigherInterval = Date.parse(currentDate);
    cy.get('#resultContainer').contains('Transaction Results');
    cy.get('#resultContainer').contains('Date');
    cy.get('#resultContainer').contains('Debit (-)');
    cy.get('#resultContainer').contains('Credit (+)');
    cy.get('#transactionBody > tr').each(($row) => {
        cy.get('td').first().invoke('text').then((presentedTransactionDate) => {
            const transactionDate = Date.parse(presentedTransactionDate);
            assert(dateHigherInterval <= transactionDate <= dateLowerInterval , "Date is not between the defined interval!");
        })
    })
})

export { transactionId };
