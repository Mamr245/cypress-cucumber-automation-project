Feature: ParaBank - Request Loan feature

    Background: Pre conditions
        Given I navigate to the ParaBank website
        When I type a valid username
        And I type a valid password
        And I click on the Log In button
        And I click on the Request Loan link

    Scenario Outline: Valid Loans
        And I type the loan amount '<loan amount>'
        And I type the down payment amount '<down payment amount>'
        And I select a from account
        And I click the Apply Now button
        Then The loan is approved
        And I can see the created account in the Account Overview
        And It has the correct amount of money

        Examples:
            | loan amount | down payment amount |
            | 100         | 50                  |
            | 50          | 0                   |