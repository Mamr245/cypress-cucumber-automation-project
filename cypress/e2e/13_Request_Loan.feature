Feature: ParaBank - Request Loan feature

    Background: Pre conditions
        Given I navigate to the ParaBank website
        When I type a valid username
        And I type a valid password
        And I click on the Log In button
        And I click on the Request Loan link

    Scenario Outline: Valid Loans
        And I type the loan amount: '<loan amount>'
        And I type the down payment amount: '<down payment amount>'
        And I select an account for the down payment
        And I click the Apply Now button
        Then The loan is approved
        And I can see the created account in the Account Overview
        And It has the correct amount of money
        And The account for the down payment has the right amount deducted

        Examples:
            | loan amount | down payment amount |
            | 2.00        | 1.00                |
            | 50.00       | 0.00                |
            | 12.50       | 2.75                |