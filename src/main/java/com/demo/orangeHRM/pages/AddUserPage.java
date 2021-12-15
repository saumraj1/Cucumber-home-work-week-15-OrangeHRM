package com.demo.orangeHRM.pages;
import com.demo.orangeHRM.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;



public class AddUserPage extends Utility {


    private static final Logger log = LogManager.getLogger(AddUserPage.class.getName());

    public AddUserPage () {
       PageFactory.initElements(driver, this);
   }

    @FindBy(xpath = "//h1[@id='UserHeading']")
    WebElement addUserText;
    @FindBy(xpath = "//select[@id='systemUser_userType']")
    WebElement userRole;
    @FindBy(xpath = "//input[@id='systemUser_employeeName_empName']")
    WebElement empName;
    @FindBy(xpath = "//input[@id='systemUser_userName']")
    WebElement username;
    @FindBy(xpath = "//select[@id='systemUser_status']")
    WebElement status;
    @FindBy(xpath = "//input[@id='systemUser_password']")
    WebElement password;
    @FindBy(xpath = "//input[@id='systemUser_confirmPassword']")
    WebElement conPassword;
    @FindBy(xpath = "//input[@id='btnSave']")
    WebElement saveButton;
    @FindBy(xpath = "//input[@id='btnAdd']")
    WebElement addButton;

    public void clickOnAdd(){
        Reporter.log("click on Add button" +addButton.toString() +"<br>");
        clickOnElement(addButton);
        log.info("click on Add Button "+addButton.toString());
    }
   /* public void setAddUserText(String user){
        Reporter.log("verify Add User" +addUserText.toString());
        verifyThatTextIsDisplayed(addUserText,user);

        verifyText("Add User",addUserText,"Add User");
    }*/
    public String setAddUserText(){
        log.info("Getting confirmation text to confirm amount to be Withdrawn successfully "+addUserText.toString());
        return addUserText.getText();
    }


    public void setUserRole(String role){
        Reporter.log("Select User role" +addUserText.toString()+"<br>");
        selectByVisibleTextFromDropDown(userRole,role);
        log.info("Select User role"+userRole.toString());
    }
    public void setEmpName(String name){
        Reporter.log("Send Username" +empName.toString()+"<br>");
        sendTextToElement(empName,name);
        log.info("Send Username "+empName.toString());
    }
    public void setUsername(String uName){
        Reporter.log("send username" +username.toString()+"<br>");
sendTextToElement(username,uName);
        log.info("send username"+username.toString());
      //  randomUserName(username);
    }
    public void setStatus(String sta){
        Reporter.log("Send status" +status.toString()+"<br>");

        selectByVisibleTextFromDropDown(status,sta);
        log.info("send status "+status.toString());
    }
    public void setPassword(String pass){
        Reporter.log("send password" +password.toString()+"<br>");
        log.info("send password"+password.toString());
        sendTextToElement(password,pass);
    }
    public void setConPassword(String conPass){
        Reporter.log("send confirm password" +conPassword.toString()+"<br>");

        sendTextToElement(conPassword,conPass);
        log.info("send confirm password "+conPassword.toString());
    }
    public void setSaveButton(){
        Reporter.log("click on" +saveButton.toString()+"<br>");
        clickOnElement(saveButton);
        log.info("click on "+saveButton.toString());
    }




}
