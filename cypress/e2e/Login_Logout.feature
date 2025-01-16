Feature: ParaBank - Login/Logout feature

    Background: Pre conditions
        Given I navigate to the ParaBank website

    Scenario: Valid user
        When I type a valid username
        And I type a valid password
        And I click on the Log In button
        Then I should not be able to access my account page
        
    Scenario: Invalid user - Invalid username
        When I type a invalid username
        And I type a valid password
        And I click on the Log In button
        Then I should not be able to access my account page

    Scenario: Invalid user - Invalid password
        When I type a valid username
        And I type a invalid password
        And I click on the Log In button
        Then I should not be able to access my account page

    Scenario: Invalid user - Missing username
        When I type a invalid password
        And I click on the Log In button
        Then I should not be able to access my account page

    Scenario: Invalid user - Missing password
        When I type a valid username
        And I click on the Log In button
        Then I should not be able to access my account page

    Scenario: Invalid user - Missing credentials
        When I click on the Log In button
        Then I should not be able to access my account page