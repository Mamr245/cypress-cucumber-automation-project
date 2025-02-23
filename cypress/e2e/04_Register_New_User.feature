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
    
    Scenario: Empty First Name
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
        Then I should get the error message "First name is required."
    
    Scenario: Empty Last Name
        And I type a first name
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
        Then I should get the error message "Last name is required."
    
    Scenario: Empty address
        And I type a first name
        And I type a last name
        And I type a city
        And I type a state
        And I type a zip code
        And I type a phone number
        And I type a social security number
        And I type a username
        And I type a password
        And I confirm the password
        And I click on the register button
        Then I should get the error message "Address is required."
    
    Scenario: Empty city
        And I type a first name
        And I type a last name
        And I type an address
        And I type a state
        And I type a zip code
        And I type a phone number
        And I type a social security number
        And I type a username
        And I type a password
        And I confirm the password
        And I click on the register button
        Then I should get the error message "City is required."
    
    Scenario: Empty state
        And I type a first name
        And I type a last name
        And I type an address
        And I type a city
        And I type a zip code
        And I type a phone number
        And I type a social security number
        And I type a username
        And I type a password
        And I confirm the password
        And I click on the register button
        Then I should get the error message "State is required."
    
    Scenario: Empty zip code
        And I type a first name
        And I type a last name
        And I type an address
        And I type a city
        And I type a state
        And I type a phone number
        And I type a social security number
        And I type a username
        And I type a password
        And I confirm the password
        And I click on the register button
        Then I should get the error message "Zip Code is required."
    
    Scenario: Empty SSN
        And I type a first name
        And I type a last name
        And I type an address
        And I type a city
        And I type a state
        And I type a zip code
        And I type a phone number
        And I type a username
        And I type a password
        And I confirm the password
        And I click on the register button
        Then I should get the error message "Social Security Number is required."
    
    Scenario: Empty username
        And I type a first name
        And I type a last name
        And I type an address
        And I type a city
        And I type a state
        And I type a zip code
        And I type a phone number
        And I type a social security number
        And I type a password
        And I confirm the password
        And I click on the register button
        Then I should get the error message "Username is required."
    
    Scenario: Empty password
        And I type a first name
        And I type a last name
        And I type an address
        And I type a city
        And I type a state
        And I type a zip code
        And I type a phone number
        And I type a social security number
        And I type a username
        And I confirm the password
        And I click on the register button
        Then I should get the error message "Password is required."
    
    Scenario: Empty passoword confirmation
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
        And I click on the register button
        Then I should get the error message "Password confirmation is required."


