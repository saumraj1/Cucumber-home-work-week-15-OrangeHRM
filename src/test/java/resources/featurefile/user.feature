@user
Feature:  Employee Records
  As a user I am able to  create and verify all employee details on Admin Page.

  Background: User should be able to login successfully
    Given I am on Login page
    When I enter Username "Admin"
    And I enter password "admin123"
    And I click on login button
    Then I should login successfully

  @smoke@regression
  Scenario: Admin should add users successfully
    When I click on Admin Tab
    And I click on Add Button
     And I Verify "Add User" Text message
    And I select User Role "ESS"
    And I enter Employee Name "Dominic Chase"
    And I enter username "Aravind"
    And I Select status "Enabled"
    And  I enter Password "Rutu1234"
    And  I enter Confirm Password "Rutu1234"
    And  I click On Save Button
    Then I should able to verify message "Successfully Saved"

  @sanity@regression
  Scenario: Admin should search employee details

    When I click on Admin Tab
    And I Enter username "Aravind"
    And I Select User Role "ESS"
    And I enter employee Name "Dominic Chase"
    And I select status "Enabled"
    And I click On Search Button
    Then I should see the the user in result list

  @sanity@regression
  Scenario: Admin should delete the users successfully
    When I click on Admin Tab
    And I Enter username "Ehioze Ebo"
    And I Select User Role "ESS"
    And I enter employee Name "Ehioze Ebo"
    And I select status "Enabled"
    And I click On Search Button
    Then I should see the the user in result list

    And I Click on Check box
    And I Click on Delete Button
    And I should see pop is displayed
    And I Click on Ok Button on Popup
    Then I should see the  message "Successfully Deleted"

  @regression
  Scenario: Admin should search the deleted user And verify the message no record found
    When I click on Admin Tab
    And I Enter username "Aravind"
    And I Select User Role "ESS"
    And I enter employee Name "Dominic Chase"
    And I select status "Enabled"
    And I click On Search Button
    Then I should see message "No Records Found"





