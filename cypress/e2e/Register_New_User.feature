Feature: ParaBank - Register New User Page

    Background: Pre conditions
        Given I navigate to the ParaBank website
        When I click on the register link

    Scenario: Register a new user
        And I type a first name
        And I type a last name
        And I type an address
        And I type a city
        And I type a state
        And I type a zip code
        And I type a phone number
        And I type a social security number
        And I type a username
        And I type a password
        And I confirm the password
        And I click on the register button
        Then My account should be created

