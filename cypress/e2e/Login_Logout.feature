Feature: ParaBank - Login/Logout feature

    # Workaround because demo site does not save credentials
    # A file is generated while creating an account.
    # Right after that the login tests are performed using the data written to the created file

    Background: Pre conditions
        Given I navigate to the ParaBank website

    Scenario: Login - Valid user
        When I type a valid username
        And I type a valid password
        And I click on the Log In button
        Then I should be able to access my account

    Scenario: Login - Invalid user - Invalid username
        When I type an invalid username
        And I type a valid password
        And I click on the Log In button
        Then I should get the error "The username and password could not be verified."

    Scenario: Login - Invalid user - Invalid password
        When I type a valid username
        And I type an invalid password
        And I click on the Log In button
        Then I should get the error "The username and password could not be verified."

    Scenario: Login - Invalid user - Missing username
        When I type a valid password
        And I click on the Log In button
        Then I should get the error "Please enter a username and password."

    Scenario: Login - Invalid user - Missing password
        When I type a valid username
        And I click on the Log In button
        Then I should get the error "Please enter a username and password."

    Scenario: Login - Invalid user - Missing credentials
        When I click on the Log In button
        Then I should get the error "Please enter a username and password."

    Scenario: Logout
        When I type a valid username
        And I type a valid password
        And I click on the Log In button
        And I click on the Log Out link
        Then I should be logged out
