Feature: ParaBank - Open New Account feature

    Background: Pre conditions
        Given I navigate to the ParaBank website
        When I type a valid username
        And I type a valid password
        And I click on the Log In button

    Scenario: Transfer Funds
        And I click on the Transfer Funds link
        And I type an amount to transfer
        And I select a from account
        And I select a to account
        And I click on the Transfer button
        Then A success message with the transfer information is shown
        And The updated account values are shown in the account overview