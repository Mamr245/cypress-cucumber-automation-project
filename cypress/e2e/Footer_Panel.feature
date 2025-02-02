Feature: ParaBank - Footer Panel feature

    Background: Pre conditions
        Given I navigate to the ParaBank website

    Scenario: About Us
        When I click on the About Us link in the footer panel
        Then I am presented with information about ParaBank
        
    Scenario: Services
        When I click on the Services link in the footer panel
        Then I can view the available Bookstore SOAP services
        And I can view the available Bookstore services
        And I can view the available ParaBank SOAP services
        And I can view the available ParaBank services
        And I can view the available RESTful services

    Scenario: Products
        When I click on the Products link in the footer panel
        Then I am redirected to ParaBank's products website

    Scenario: Locations
        When I click on the Locations link in the footer panel
        Then I am redirected to ParaBank's solutions website

    Scenario: Forum
        When I click on the Forum link in the footer panel
        Then I am redirected to ParaBank's forum website

    Scenario: Site Map
        When I click on the Site Map link in the footer panel
        Then I can view the ParaBank's website structure

    Scenario: Contact Us
        When I click on the Contact Us link in the footer panel
        Then A customer care section with a form is presented


