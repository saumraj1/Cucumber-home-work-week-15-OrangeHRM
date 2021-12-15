package com.demo.orangeHRM.pages;


import com.demo.orangeHRM.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DashBoardPage extends Utility {
    public DashBoardPage() {
        PageFactory.initElements(driver, this);
    }
    @FindBy(xpath = "//h1[contains(text(),'Dashboard')]")
    WebElement dashBoardTxt;

public String verifyDashboard(){

    getTextFromElement(dashBoardTxt);
    return dashBoardTxt.getText();

}

}
