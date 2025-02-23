Feature: ParaBank - Customer Lookup page

    Background: Pre conditions
        Given I navigate to the ParaBank website
        When I click on the Forgot Login Info link

    Scenario: Recover credentials
        And I type the user's correct information
        And I click the Find My Login Info buton
        Then I can see the user's username and password

    Scenario: Empty First Name
        And I type the user's information and leave the first name field empty
        And I click the Find My Login Info buton
        Then I should get the error message "First name is required."

    Scenario: Empty Last Name
        And I type the user's information and leave the last name field empty
        And I click the Find My Login Info buton
        Then I should get the error message "Last name is required."

    Scenario: Empty address
        And I type the user's information and leave the address field empty
        And I click the Find My Login Info buton
        Then I should get the error message "Address is required."

    Scenario: Empty city
        And I type the user's information and leave the city field empty
        And I click the Find My Login Info buton
        Then I should get the error message "City is required."

    Scenario: Empty state
        And I type the user's information and leave the state field empty
        And I click the Find My Login Info buton
        Then I should get the error message "State is required."

    Scenario: Empty zip code
        And I type the user's information and leave the Zip Code field empty
        And I click the Find My Login Info buton
        Then I should get the error message "Zip Code is required."

    Scenario: Empty SSN
        And I type the user's information and leave the SSN field empty
        And I click the Find My Login Info buton
        Then I should get the error message "Social Security Number is required."

    Scenario: Mismatching Informaiton
        And I type mismatching user information
        And I click the Find My Login Info buton
        Then I should get the error message "The customer information provided could not be found."

