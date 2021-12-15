package com.demo.orangeHRM.pages;

import com.demo.orangeHRM.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import org.testng.Reporter;

public class ViewSystemUsersPage extends Utility {

    private static final Logger log = LogManager.getLogger(ViewSystemUsersPage.class.getName());

     public ViewSystemUsersPage(){
         PageFactory.initElements(driver, this);
}

  //  @FindBy(xpath = "")
    WebElement systemUserText;
    @FindBy(xpath = "//input[@id='btnSave']")
    WebElement saveButton;
    @FindBy(id = "menu_admin_viewSystemUsers")
    WebElement saveNotification;
    @FindBy(xpath = "//input[@id='searchSystemUser_userName']")
    WebElement username;
    @FindBy(xpath = "//select[@id='searchSystemUser_userType']")
    WebElement userRoll;
    @FindBy(xpath = "//select[@id='searchSystemUser_status']")
    WebElement status;
    @FindBy(xpath = "//input[@id='searchBtn']")
    WebElement searchBtn;
    @FindBy(xpath = "//input[@id='btnDelete']")
    WebElement deleteBtn;
    @FindBy(xpath = "//input[@id='ohrmList_chkSelectAll']")
    WebElement checkBox;
    @FindBy(xpath = "//input[@id='dialogDeleteBtn']")
    WebElement popupOK;
    @FindBy(xpath = "//div[@id='successBodyDelete']")
    WebElement deleteMsg;
    @FindBy(xpath = "//td[contains(text(),'No Records Found')]")
    WebElement noRecord;
    @FindBy(id = "searchSystemUser_employeeName_empName")
    WebElement employeeName;


    public void setSystemUserText(){
        Reporter.log("verify System Users" +systemUserText.toString());
        verifyText("System Users",systemUserText,"System Users not displayed");
        log.info("verify System Users"+systemUserText.toString());
    }

    public String savedNotification(){
        log.info("verify Successfully Saved "+saveNotification.toString());
        return saveNotification.getText();
    }
    public void setUsername(String usname){
        Reporter.log("send username" +username.toString());
        sendTextToElement(username,usname);
        log.info("send username "+username.toString());
    }
    public  void employeeName(String empName){
        sendTextToElement(employeeName,empName);
        log.info("send employee name "+employeeName.toString());
    }
    public void setUserRoll(String ESS){
        Reporter.log("select user roll" +userRoll.toString());
        selectByVisibleTextFromDropDown(userRoll,ESS);
        log.info("select user roll"+userRoll.toString());
    }

    public void setStatus(String stus){
        Reporter.log("select status" +status.toString());
        selectByVisibleTextFromDropDown(status,stus);
        log.info("select status"+status.toString());
    }
    public void setSearchBtn(){
        Reporter.log("click on search button" +searchBtn.toString());
        clickOnElement(searchBtn);
        log.info("click on search button "+searchBtn.toString());
    }
    public void setCheckBox(){
        Reporter.log("click on checkbox" +checkBox.toString());
        clickOnElement(checkBox);
        log.info("click on checkbox"+checkBox.toString());
    }
    public void setDeleteBtn(){
        Reporter.log("click on delete button" +deleteBtn.toString());
        clickOnElement(deleteBtn);
        log.info("click on delete button "+deleteBtn.toString());
    }
    public void clickOnPopUPOk(){
        Reporter.log("click on popup button" +popupOK.toString());
        clickOnElement(popupOK);
        log.info("click on popup button "+popupOK.toString());
    }
    public String verifyDeleteMsg(){
        Reporter.log("verify Successfully Deleted" +deleteMsg.toString());
     //   verifyText("Successfully Deleted",deleteMsg,"Successfully Deleted");
        log.info("verify Successfully Deleted "+deleteMsg.toString());
        return deleteMsg.getText();
    }
   /* public void verifyNoRecordFound(){
        Reporter.log("verify No Records Found" +noRecord.toString());

        verifyText("No Records Found",noRecord,"No Records Found not found");


    }*/
    public String verifyNoRecordFound(){
        log.info("No user record found "+noRecord.toString());
        return noRecord.getText();
    }


}
