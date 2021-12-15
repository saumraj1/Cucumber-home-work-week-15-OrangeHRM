package com.demo.orangeHRM.cucumber.steps;

import com.demo.orangeHRM.pages.*;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

/**
 * By Bhoomi
 **/
public class UserSteps {
    @And("^I am on admin page$")
    public void iAmOnAdminPage() {
        new AdminPage().setUserManagementLink();

    }

    @When("^I click on \"([^\"]*)\" Tab$")
    public void iClickOnTab() {
        new HomePage().setAdmin();

    }

    @And("^I verify \"([^\"]*)\" Text$")
    public void iVerifyText(String user) {
        // new AddUserPage().setAddUserText(user);

        Assert.assertEquals(user, new AddUserPage().setAddUserText());

    }

    @And("^I select User Role \"([^\"]*)\"$")
    public void iSelectUserRole(String role) {
        new AddUserPage().setUserRole(role);
    }

    @And("^I enter Employee Name \"([^\"]*)\"$")
    public void iEnterEmployeeName(String eName) {
        new AddUserPage().setEmpName(eName);
    }

    @And("^I enter username \"([^\"]*)\"$")
    public void iEnterUsername(String uName) {
        new AddUserPage().setUsername(uName);
    }


    @And("^I Select status \"([^\"]*)\"$")
    public void iSelectStatus(String status) {
        new AddUserPage().setStatus(status);
    }


    @And("^I enter Password \"([^\"]*)\"$")
    public void iEnterPassword(String pass) {
        new AddUserPage().setPassword(pass);
    }


    @And("^I enter Confirm Password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String conPass) {

        new AddUserPage().setConPassword(conPass);
    }


    @Then("^I should able to verify message \"([^\"]*)\"$")
    public void iShouldAbleToVerifyMessage(String arg0) {

    }

    @And("^I click on Add Button$")
    public void iClickOnAddButton() {
        new AddUserPage().clickOnAdd();

    }

    @And("^I click On Save Button$")
    public void iClickOnSaveButton() {
        new AddUserPage().setSaveButton();
    }

    @And("^I Verify \"([^\"]*)\" Text message$")
    public void iVerifyTextMessage(String userText) {
     //   new ViewSystemUsersPage().savedNotification();
        Assert.assertEquals(userText, new ViewSystemUsersPage().savedNotification());
    }


    @And("^I click On Search Button$")
    public void iClickOnSearchButton() {
        new ViewSystemUsersPage().setSearchBtn();
    }


    @Then("^I should see the the user in result list$")
    public void iShouldSeeTheTheUserInResultList() {
    }

    @And("^I Click on Check box$")
    public void iClickOnCheckBox() {
        new ViewSystemUsersPage().setCheckBox();
    }

    @And("^I Click on Delete Button$")
    public void iClickOnDeleteButton() {
        new ViewSystemUsersPage().setDeleteBtn();
    }

    @And("^I should see pop is displayed$")
    public void iShouldSeePopIsDisplayed() {
        System.out.println("pop is displayed");
    }

    @And("^I Click on Ok Button on Popup$")
    public void iClickOnOkButtonOnPopup() {
        new ViewSystemUsersPage().clickOnPopUPOk();
    }

    @Then("^I should see the  message \"([^\"]*)\"$")
    public void iShouldSeeTheMessage(String verifyDelMsg) {

        Assert.assertEquals(verifyDelMsg, new ViewSystemUsersPage().verifyDeleteMsg());
    }

    @Then("^I should see message \"([^\"]*)\"$")
    public void iShouldSeeMessage(String NoRecordFound) {
        //  new ViewSystemUsersPage().verifyNoRecordFound();
        Assert.assertEquals(NoRecordFound, new ViewSystemUsersPage().verifyNoRecordFound());
    }

    @When("^I click on Admin Tab$")
    public void iClickOnAdminTab() {
        new HomePage().setAdmin();
    }

    @And("^I Enter username \"([^\"]*)\"$")
    public void IEnterUsername(String usname) {
        new ViewSystemUsersPage().setUsername(usname);
    }

    @And("^I Select User Role \"([^\"]*)\"$")
    public void ISelectUserRole(String ESS) {
        new ViewSystemUsersPage().setUserRoll(ESS);
    }


    @And("^I select status \"([^\"]*)\"$")
    public void ISelectStatus(String stus) {
        new ViewSystemUsersPage().setStatus(stus);
    }

    @And("^I enter employee Name \"([^\"]*)\"$")
    public void IEnterEmployeeName(String empName) {
        new ViewSystemUsersPage().employeeName(empName);

    }
}

