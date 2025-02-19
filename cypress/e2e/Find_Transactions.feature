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

    




