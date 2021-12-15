@login
Feature: Login Functionality
  As a user i want to login in to orangeHRM website

  Scenario: User should login successfully with valid credentials
    Given I am on Login page
    When I enter Username "Admin"
    And I enter password "admin123"
    And I click on login button
    Then I should login successfully
    And I should see "Welcome New Automation" message on home page

  Scenario: User should logout successfully
    Given I am on Login page
    When I enter Username "Admin"
    And I enter password "admin123"
    And I click on login button
    And I should login successfully
    When I Click on User profile logo
    And I click on logout
    Then I should see "Login Panel" text is displayed










