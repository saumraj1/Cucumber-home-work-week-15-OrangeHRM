package com.demo.orangeHRM.pages;

import com.demo.orangeHRM.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import org.testng.Reporter;

public class LoginPage extends Utility {
private static final Logger log = LogManager.getLogger(LoginPage.class.getName());
     public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//input[@id='txtUsername']")
    WebElement username;
    @FindBy(xpath = "//input[@id='txtPassword']")
    WebElement password;
    @FindBy(xpath = "//input[@id='btnLogin']")
    WebElement loginButton;
    @FindBy(xpath = "//a[contains(text(),'Welcome Paul')]")
    WebElement verifyWelcome;
    @FindBy(id = "welcome")
    WebElement Welcome;
    @FindBy(xpath = "//img[@alt='OrangeHRM']")
    WebElement verifyLogo;
    @FindBy(id = "welcome")
    WebElement clickOnWelcome;
    @FindBy(xpath = "//a[text()='Logout']")
    WebElement clickOnLogout;
    @FindBy(id = "logInPanelHeading")
    WebElement loginPanelMsg;




    public void setUsername(String name){
        Reporter.log("Entering username :" +username+ " in the usernameField :" +username.toString() + "<br>");
        sendTextToElement(username, name);
    }
    public void setPassword(String psw){
        Reporter.log("Entering password :" +password+ " in the passwordField :" +password.toString() + "<br>");
        sendTextToElement(password,psw);
    }
    public void setLoginButton() {
        Reporter.log("click on login button" +username.toString()+"<br>");
        clickOnElement(loginButton);
    }
    public void setVerifyPanel(){
        Reporter.log("verify message Welcome Paul" +verifyWelcome.toString()+"<br>");
      //  verifyText("Welcome Paul",verifyWelcome,"Welcome sra not displayed");
        verifyThatTextIsDisplayed(verifyWelcome,"Welcome Paul");

    }
    public void setVerifyWelcome(){
        Reporter.log("verify message Welcome Paul" +Welcome.toString()+"<br>");
        //  verifyText("Welcome Paul",verifyWelcome,"Welcome sra not displayed");
      //  verifyThatTextIsDisplayed(Welcome,"Welcome");
        mouseHoverToElementAndClick(Welcome);

    }
    public boolean setVerifyLogo(){
        if(verifyLogo.isDisplayed())
        {
            return true;
        }
        else
        {
            return false;
        }
//    return  verifyLogo.isDisplayed();

        /*Boolean p = (Boolean) ((JavascriptExecutor)driver).executeScript("return arguments[0].complete " + "&& typeof arguments[0].naturalWidth != \"undefined\" " + "&& arguments[0].naturalWidth > 0", logoClick);
        if (p) {
            System.out.println("Logo present");
        } else {
            System.out.println("Logo not present");
        }*/
    }
    public void setClickWelcome(){
        Reporter.log("click on Welcome button" +clickOnWelcome.toString()+"<br>");
        clickOnElement(clickOnWelcome);
    }
    public void setClickLogout(){
        Reporter.log("click on logOut button" +clickOnLogout.toString()+"<br>");
      //  mouseHoverToElementAndClick(clickOnLogout);
clickOnElement(clickOnLogout);
    }
    public void verifyLoginPanel(){
        verifyThatTextIsDisplayed(loginPanelMsg,"LOGIN Panel");
        log.info("LOGIN Panel "+loginPanelMsg.toString());

    }
}
