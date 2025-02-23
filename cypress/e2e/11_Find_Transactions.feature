Feature: ParaBank - Find Trasactions feature

    Background: Pre conditions
        Given I navigate to the ParaBank website
        When I type a valid username
        And I type a valid password
        And I click on the Log In button
        And I click on the Find Transactions link
        And I select an account to search

    Scenario: Find Trasactions - Find By Date
        And I type today's date
        And I click the Find Transactions button in the find by date section
        Then The transactions performed today are shown
        And I can see the transactions' information

    Scenario: Find Trasactions - Find By Amount
        And I type the transaction amount
        And I click the Find Transactions button in the find by amount section
        Then The transactions with the searched amount are shown
    
     Scenario: Find Trasactions - Find By Date Range
        And I type a from date
        And I type a to date
        And I click the Find Transactions button in the find by date range section
        Then The transactions done between the selected dates are shown





    




