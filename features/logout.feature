Feature: Logout action

    As a user
    I want to logout of the application

    Scenario: Logout of the application
      Given I visit a login page
      When I fill the login form with valid credentials
      Then I should see the home page
      When I click on the hamburger menu
      And I click on the logout button
      Then I see the login page
