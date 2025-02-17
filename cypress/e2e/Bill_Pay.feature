Feature: ParaBank - Account Services feature

    Background: Pre conditions
        Given I navigate to the ParaBank website
        When I type a valid username
        And I type a valid password
        And I click on the Log In button    
     
    Scenario: Bill Pay
        And I click on the Bill Pay link
        And I type the payee's name
        And I type the payee's address 
        And I type the payee's city 
        And I type the payee's state 
        And I type the payee's Zip Code 
        And I type the payee's bank account 
        And I confirm the payee's bank account 
        And I confirm the amount to be transfered
        And I select an account from which to pay the bill 
        And I click the Send Payment Button
        Then The bill is paid
        And The paid amount is removed from the used account    
