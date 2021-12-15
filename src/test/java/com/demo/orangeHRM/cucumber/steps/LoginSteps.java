package com.demo.orangeHRM.cucumber.steps;

import com.demo.orangeHRM.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

/**
 * By Bhoomi
 **/
public class LoginSteps {
    @Given("^I am on Login page$")
    public void iAmOnLoginPage() {
        System.out.println("I am on Login page");
    }


    @When("^I enter Username \"([^\"]*)\"$")
    public void iEnterUsername(String name) {
        new LoginPage().setUsername(name);

    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new LoginPage().setPassword(password);

    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().setLoginButton();
    }

    @Then("^I should login successfully$")
    public void iShouldLoginSuccessfully() {
    }





    @And("^I should see \"([^\"]*)\" message on home page$")
    public void iShouldSeeMessageOnHomePage(String message ) {
            new LoginPage().setVerifyPanel();


        }

    @Given("^I am on home page$")
    public void iAmOnHomePage() {
        System.out.println("I am on home Page");


    }

   /* @When("^I click on User profile logo$")
    public void iClickOnUserProfileLogo(String logoPresent) {

*//*        Assert.assertEquals(exceptedMessage, new LoginPage().setVerifyLogo());
        Boolean logoPresent = verifyLogo.isDisplayed();*//*
       Assert.assertTrue(logoPresent, new LoginPage().setVerifyLogo());
    }*/

    @And("^I click on logout$")
    public void iClickOnLogout() {
        new LoginPage().setClickLogout();
    }

    @Then("^I should see \"([^\"]*)\" text is displayed$")
    public void iShouldSeeTextIsDisplayed(String text) {
        new LoginPage().verifyLoginPanel();




    }

    @When("^I Click on User profile logo$")
    public void iClickOnUserProfileLogo() {
        new LoginPage().setVerifyWelcome();
    }
}