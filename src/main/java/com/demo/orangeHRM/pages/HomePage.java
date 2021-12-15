package com.demo.orangeHRM.pages;


import com.demo.orangeHRM.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(AddUserPage.class.getName());
    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(linkText = "Log in")
    WebElement loginLink;

    @FindBy(linkText = "Register")
    WebElement registerLink;
    @FindBy(id = "menu_admin_viewAdminModule")
    WebElement admin;


    public void clickOnLoginLink() {
        Reporter.log("Entering username :" +loginLink+ " in the usernameField :" +loginLink.toString() + "<br>");
        clickOnElement(loginLink);
        log.info("Entering username :"+loginLink.toString());
    }

    public void clickOnRegisterLink() {
        Reporter.log("Entering username :" +registerLink+ " in the usernameField :" +registerLink.toString() + "<br>");
        clickOnElement(registerLink);
        log.info("click on register link"+registerLink.toString());
    }
    public void setAdmin(){
        clickOnElement(admin);
        log.info("add admin"+admin.toString());
    }
}
