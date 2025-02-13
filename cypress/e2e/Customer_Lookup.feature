Feature: ParaBank - Forgot login info page

    Background: Pre conditions
        Given I navigate to the ParaBank website
        When I click on the Forgot Login Info link

    Scenario: Recover credentials
        And I type the user's correct information
        And I click the Find My Login Info buton
        Then I can see the user's username and password

    #Scenario: Empty First Name

    #Scenario: Empty Last Name

    #Scenario: Empty address

    #Scenario: Empty city

   #Scenario: Empty state

    #Scenario: Empty zip code

    #Scenario: Empty SSN







