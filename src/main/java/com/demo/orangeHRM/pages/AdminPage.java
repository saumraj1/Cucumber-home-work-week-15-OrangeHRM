package com.demo.orangeHRM.pages;


import com.demo.orangeHRM.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AdminPage extends Utility {

    private static final Logger log = LogManager.getLogger(AdminPage.class.getName());

    public AdminPage() {
        PageFactory.initElements(driver, this);
    }
    @FindBy(xpath = "//a[@id='menu_admin_UserManagement']")
    WebElement userManagementLink;
    @FindBy(id = "menu_admin_Job")
    WebElement jobsLink;
    @FindBy(id="menu_admin_Organization")
    WebElement organizationLink;

    public void setUserManagementLink(){

        mouseHoverToElement(userManagementLink);
        clickOnElement(userManagementLink);
        log.info("click on userManagementLink "+userManagementLink.toString());
    }
    public  void setJobsLink(){
        mouseHoverToElement(jobsLink);
        clickOnElement(jobsLink);
    }
    public void setOrganizationLink(){
        mouseHoverToElement(organizationLink);
        clickOnElement(organizationLink);
    }

}
