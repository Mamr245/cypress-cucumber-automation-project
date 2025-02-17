Feature: ParaBank - Account Services feature

    Background: Pre conditions
        Given I navigate to the ParaBank website
        When I type a valid username
        And I type a valid password
        And I click on the Log In button

    Scenario: Account Overview
        Then I should be able to view my account overview