Feature: ParaBank - Update Contact Info feature

    Background: Pre conditions
        Given I navigate to the ParaBank website
        When I type a valid username
        And I type a valid password
        And I click on the Log In button
        And I click on the Update Contact Info link

    #@skip
    Scenario: Update Account
        And I type the the necessary updated information
        And I click the Update Profile buton
        Then A successful message is presented
        And The information is updated

    Scenario: Empty First Name
        And I type the updated information but leave the first name field empty
        And I click the Update Profile buton
        Then I should get the error message "First name is required."

    Scenario: Empty Last Name
        And I type the updated information but leave the last name field empty
        And I click the Update Profile buton
        Then I should get the error message "Last name is required."

    Scenario: Empty address
        And I type the updated information but leave the address field empty
        And I click the Update Profile buton
        Then I should get the error message "Address is required."

    Scenario: Empty city
        And I type the updated information but leave the city field empty
        And I click the Update Profile buton
        Then I should get the error message "City is required."

    Scenario: Empty state
        And I type the updated information but leave the state field empty
        And I click the Update Profile buton
        Then I should get the error message "State is required."

    Scenario: Empty zip code
        And I type the updated information but leave the zip code field empty
        And I click the Update Profile buton
        Then I should get the error message "Zip Code is required."