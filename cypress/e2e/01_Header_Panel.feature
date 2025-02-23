Feature: ParaBank - Header Panel feature

    Background: Pre conditions
        Given I navigate to the ParaBank website

    Scenario: About Us
        When I click on the About Us link in the header panel
        Then I am presented with information about ParaBank

    Scenario: Services
        When I click on the Services link in the header panel
        Then I can view the available Bookstore SOAP services
        And I can view the available Bookstore services
        And I can view the available ParaBank SOAP services
        And I can view the available ParaBank services
        And I can view the available RESTful services

    Scenario: Products
        When I click on the Products link in the header panel
        Then I am redirected to ParaBank's products website

    Scenario: Locations
        When I click on the Locations link in the header panel
        Then I am redirected to ParaBank's solutions website

    Scenario: About Us Button
        When I click on the About Us button in the header panel
        Then I am presented with information about ParaBank

    Scenario: Envelope Button
        When I click on the Envelope button in the header panel
        Then A customer care section with a form is presented

    Scenario: Home Button
        When I click on the About Us button in the header panel
        And I click on the Home button in the header panel
        Then I am redirected back to the main page

    Scenario: Admin page
        When I click on the Admin Page button in the header panel
        Then I am redirected to the webstite's administration page
        And The administration page has a Database configuration section
        And The administration page has a JSM Service section
        And The administration page has a Data Access Mode configuration section
        And The administration page has a Web Service configuration section
        And The administration page has a Application Settings configuration section
