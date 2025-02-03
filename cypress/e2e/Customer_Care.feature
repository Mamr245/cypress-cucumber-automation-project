Feature: ParaBank - Customer Care feature

    Background: Pre conditions
        Given I navigate to the ParaBank website
        When I click on the Contact Us link in the footer panel

    Scenario: Send message to Customer Care
        And I type a name
        And I type a valid email
        And I type a valid phone number
        And I type a message
        And I click the Send to Customer Care button
        Then A message saying I'll be contacted is shown

    Scenario: Send message to Customer Care - Empty name
        And I type a valid email
        And I type a valid phone number
        And I type a message
        And I click the Send to Customer Care button
        Then I should get the error message "Name is required."

    Scenario: Send message to Customer Care - Empty email
        And I type a name
        And I type a valid phone number
        And I type a message
        And I click the Send to Customer Care button
        Then I should get the error message "Email is required."

    Scenario: Send message to Customer Care - Empty phone number
        And I type a name
        And I type a valid email
        And I type a message
        And I click the Send to Customer Care button
        Then I should get the error message "Phone is required."

    Scenario: Send message to Customer Care - Empty message
        And I type a name
        And I type a valid email
        And I type a valid phone number
        And I click the Send to Customer Care button
        Then I should get the error message "Message is required."