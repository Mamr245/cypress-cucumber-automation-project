import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import { checkingAccountNumber } from "./Account_Overview_Steps";
import FindTransactions_PO from "../page_objects/Find_Transactions_PO";

const findTransactionsPage = new FindTransactions_PO();
const currentDate = findTransactionsPage.getCurrentDate();
/* Variable fromDate is used to define the lower end of the date interval to use in the "Find Trasactions - Find By Date Range" scenario
The value 5 passed as an argument indicates the number of days to subtract from the current date */
const fromDate = findTransactionsPage.getFromDate(5);
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
    cy.get(`${findTransactionsPage.rightPanelLocator}`).contains('Transaction ID');
    cy.get(`${findTransactionsPage.rightPanelLocator}`).contains('Date');
    cy.get(`${findTransactionsPage.rightPanelLocator}`).contains('Description');
    cy.get(`${findTransactionsPage.rightPanelLocator}`).contains('Type');
    cy.get(`${findTransactionsPage.rightPanelLocator}`).contains('Amount');
    
    // Save the a trasaction amount as a variable to use in the "Find Trasactions - Find By Amount" scenario"
    cy.get(`${findTransactionsPage.rightPanelLocator}> table > tbody > tr`).last().find('td').last().invoke('text').then((transactionAmountshown) => {
        amount = transactionAmountshown.replace('$','').replace(',','.');     
    })
})

Then(`The transactions performed today are shown`, () => {
    cy.get(`${findTransactionsPage.resultContainerLocator}`).contains('Transaction Results');
    cy.get(`${findTransactionsPage.resultContainerLocator}`).contains('Date');
    cy.get(`${findTransactionsPage.resultContainerLocator}`).contains('Debit (-)');
    cy.get(`${findTransactionsPage.resultContainerLocator}`).contains('Credit (+)');
    cy.get('#transactionBody > tr').each(($row) => {
        cy.wrap($row).contains(currentDate);
      })
})

Then(`The transactions with the searched amount are shown`, () => {
    cy.get(`${findTransactionsPage.resultContainerLocator}`).contains('Transaction Results');
    cy.get(`${findTransactionsPage.resultContainerLocator}`).contains('Date');
    cy.get(`${findTransactionsPage.resultContainerLocator}`).contains('Debit (-)');
    cy.get(`${findTransactionsPage.resultContainerLocator}`).contains('Credit (+)');
    cy.get('#transactionBody > tr').each(($row) => {
        cy.wrap($row).contains(amount);
      })
})

Then(`The transactions done between the selected dates are shown`, () => {
    const dateRangeLowerInterval = Date.parse(fromDate);
    const dateRangeHigherInterval = Date.parse(currentDate);
    cy.get(`${findTransactionsPage.resultContainerLocator}`).contains('Transaction Results');
    cy.get(`${findTransactionsPage.resultContainerLocator}`).contains('Date');
    cy.get(`${findTransactionsPage.resultContainerLocator}`).contains('Debit (-)');
    cy.get(`${findTransactionsPage.resultContainerLocator}`).contains('Credit (+)');
    cy.get('#transactionBody > tr').each(() => {
        cy.get('td').first().invoke('text').then((presentedTransactionDate) => {
            const transactionDate = Date.parse(presentedTransactionDate);
            assert(dateRangeLowerInterval <= transactionDate <=  dateRangeHigherInterval, "Date is not between the defined interval!");
        })
    })
})