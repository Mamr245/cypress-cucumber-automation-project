Feature: ParaBank - Bill Pay feature

    Background: Pre conditions
        Given I navigate to the ParaBank website
        When I type a valid username
        And I type a valid password
        And I click on the Log In button
        And I click on the Bill Pay link

    Scenario: Bill Pay
        And I type the payee's name
        And I type the payee's address
        And I type the payee's city
        And I type the payee's state
        And I type the payee's zip code
        And I type the payee's phone number
        And I type the payee's bank account
        And I confirm the payee's bank account
        And I type the amount to be transfered
        And I select an account from which to pay the bill
        And I click the Send Payment Button
        Then A success message is shown with the bill payment information
        And The paid amount is removed from the used account

    Scenario: Bill Pay - Empty payee's name
        And I type the payee's address
        And I type the payee's city
        And I type the payee's state
        And I type the payee's zip code
        And I type the payee's phone number
        And I type the payee's bank account
        And I confirm the payee's bank account
        And I type the amount to be transfered
        And I select an account from which to pay the bill
        And I click the Send Payment Button
        Then I should get the error message "Payee name is required."

    Scenario: Bill Pay - Empty payee's address
        And I type the payee's name
        And I type the payee's city
        And I type the payee's state
        And I type the payee's zip code
        And I type the payee's phone number
        And I type the payee's bank account
        And I confirm the payee's bank account
        And I type the amount to be transfered
        And I select an account from which to pay the bill
        And I click the Send Payment Button
        Then I should get the error message "Address is required."

    Scenario: Bill Pay - Empty payee's city
        And I type the payee's name
        And I type the payee's address
        And I type the payee's state
        And I type the payee's zip code
        And I type the payee's phone number
        And I type the payee's bank account
        And I confirm the payee's bank account
        And I type the amount to be transfered
        And I select an account from which to pay the bill
        And I click the Send Payment Button
        Then I should get the error message "City is required."

    Scenario: Bill Pay - Empty payee's state
        And I type the payee's name
        And I type the payee's address
        And I type the payee's city
        And I type the payee's zip code
        And I type the payee's phone number
        And I type the payee's bank account
        And I confirm the payee's bank account
        And I type the amount to be transfered
        And I select an account from which to pay the bill
        And I click the Send Payment Button
        Then I should get the error message "State is required."

    Scenario: Bill Pay - Empty payee's zip code
        And I type the payee's name
        And I type the payee's address
        And I type the payee's city
        And I type the payee's state
        And I type the payee's phone number
        And I type the payee's bank account
        And I confirm the payee's bank account
        And I type the amount to be transfered
        And I select an account from which to pay the bill
        And I click the Send Payment Button
        Then I should get the error message "Zip Code is required."

    Scenario: Bill Pay - Empty payee's phone number
        And I type the payee's name
        And I type the payee's address
        And I type the payee's city
        And I type the payee's state
        And I type the payee's zip code
        And I type the payee's bank account
        And I confirm the payee's bank account
        And I type the amount to be transfered
        And I select an account from which to pay the bill
        And I click the Send Payment Button
        Then I should get the error message "Phone number is required."

    Scenario: Bill Pay - Empty payee's bank account
        And I type the payee's name
        And I type the payee's address
        And I type the payee's city
        And I type the payee's state
        And I type the payee's zip code
        And I type the payee's phone number
        And I confirm the payee's bank account
        And I type the amount to be transfered
        And I select an account from which to pay the bill
        And I click the Send Payment Button
        Then I should get the error message "Account number is required."

    Scenario: Bill Pay - Empty payee's bank account confirmation
        And I type the payee's name
        And I type the payee's address
        And I type the payee's city
        And I type the payee's state
        And I type the payee's zip code
        And I type the payee's phone number
        And I type the payee's bank account
        And I type the amount to be transfered
        And I select an account from which to pay the bill
        And I click the Send Payment Button
        Then I should get the error message "Account number is required."

    Scenario: Bill Pay - Empty amount
        And I type the payee's name
        And I type the payee's address
        And I type the payee's city
        And I type the payee's state
        And I type the payee's zip code
        And I type the payee's phone number
        And I type the payee's bank account
        And I confirm the payee's bank account
        And I select an account from which to pay the bill
        And I click the Send Payment Button
        Then I should get the error message "The amount cannot be empty."

    Scenario: Bill Pay - Invalid bank account
        And I type the payee's name
        And I type the payee's address
        And I type the payee's city
        And I type the payee's state
        And I type the payee's zip code
        And I type the payee's phone number
        And I type an invalid bank account
        And I confirm the payee's bank account
        And I type the amount to be transfered
        And I select an account from which to pay the bill
        And I click the Send Payment Button
        Then I should get the error message "Please enter a valid number."

    Scenario: Bill Pay - Invalid bank account in confirmation field
        And I type the payee's name
        And I type the payee's address
        And I type the payee's city
        And I type the payee's state
        And I type the payee's zip code
        And I type the payee's phone number
        And I type the payee's bank account
        And I type an invalid bank account in the confirmation field 
        And I type the amount to be transfered
        And I select an account from which to pay the bill
        And I click the Send Payment Button
        Then I should get the error message "Please enter a valid number."

    Scenario: Bill Pay - Mismatching bank accounts
        And I type the payee's name
        And I type the payee's address
        And I type the payee's city
        And I type the payee's state
        And I type the payee's zip code
        And I type the payee's phone number
        And I type the payee's bank account
        And I type a different bank account in the confirmation field
        And I type the amount to be transfered
        And I select an account from which to pay the bill
        And I click the Send Payment Button
        Then I should get the error message "The account numbers do not match."
