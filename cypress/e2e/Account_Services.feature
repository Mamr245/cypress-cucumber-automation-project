Feature: ParaBank - Account Services feature

    Background: Pre conditions
        Given I navigate to the ParaBank website
        When I type a valid username
        And I type a valid password
        And I click on the Log In button

    Scenario: Account Overview
        Then I should be able to view my account overview

    Scenario: Open New Checking Account
        And I click on the Open New Account link
        And I select the Checking option
        And I select an account from which to transfer funds
        And I click on the Open New Account button
        Then A success message and my new account number are shown
        And The new account is visible in the account overview
        And It has the right amount of money

    Scenario: Open New Savings Account
        And I click on the Open New Account link
        And I select the Savings option
        And I select an account from which to transfer funds
        And I click on the Open New Account button
        Then A success message and my new account number are shown
        And The new account is visible in the account overview
        And It has the right amount of money

    Scenario: Transfer Funds
        And I click on the Transfer Funds link
        And I type a valid amount to transfer
        And I select a from account
        And I select a to account
        And I click on the Transfer button
        Then A succes message with the transfer information is shown
        And The updated account values are shown in the account overview

