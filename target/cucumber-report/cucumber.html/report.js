$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Functionality",
  "description": "As a user i want to login in to orangeHRM website",
  "id": "login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 7176431900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-functionality;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter Username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see \"Welcome New Automation\" message on home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 82712600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 124724200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 62769300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 3158228300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 17700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome New Automation",
      "offset": 14
    }
  ],
  "location": "LoginSteps.iShouldSeeMessageOnHomePage(String)"
});
formatter.result({
  "duration": 40571100,
  "status": "passed"
});
formatter.after({
  "duration": 659184200,
  "status": "passed"
});
formatter.before({
  "duration": 4724669700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should logout successfully",
  "description": "",
  "id": "login-functionality;user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter Username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should login successfully",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Click on User profile logo",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on logout",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see \"Login Panel\" text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 49400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 75708400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 75369500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 3052681200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 11300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnUserProfileLogo()"
});
formatter.result({
  "duration": 177726800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogout()"
});
formatter.result({
  "duration": 560997200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login Panel",
      "offset": 14
    }
  ],
  "location": "LoginSteps.iShouldSeeTextIsDisplayed(String)"
});
formatter.result({
  "duration": 30326900,
  "status": "passed"
});
formatter.after({
  "duration": 654836600,
  "status": "passed"
});
formatter.uri("user.feature");
formatter.feature({
  "line": 2,
  "name": "Employee Records",
  "description": "As a user I am able to  create and verify all employee details on Admin Page.",
  "id": "employee-records",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@user"
    }
  ]
});
formatter.before({
  "duration": 4174988500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be able to login successfully",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter Username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 60800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 74420700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 66850900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 3286046700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 15400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Admin should add users successfully",
  "description": "",
  "id": "employee-records;admin-should-add-users-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on Add Button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Verify \"Add User\" Text message",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select User Role \"ESS\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter Employee Name \"Dominic Chase\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter username \"Aravind\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Select status \"Enabled\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter Password \"Rutu1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter Confirm Password \"Rutu1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click On Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should able to verify message \"Successfully Saved\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 972063700,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iClickOnAddButton()"
});
formatter.result({
  "duration": 20488875400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add User",
      "offset": 10
    }
  ],
  "location": "UserSteps.iVerifyTextMessage(String)"
});
formatter.result({
  "duration": 35047400,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Add User]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.demo.orangeHRM.cucumber.steps.UserSteps.iVerifyTextMessage(UserSteps.java:89)\r\n\tat ✽.And I Verify \"Add User\" Text message(user.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "ESS",
      "offset": 20
    }
  ],
  "location": "UserSteps.iSelectUserRole(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Dominic Chase",
      "offset": 23
    }
  ],
  "location": "UserSteps.iEnterEmployeeName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Aravind",
      "offset": 18
    }
  ],
  "location": "UserSteps.iEnterUsername(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 17
    }
  ],
  "location": "UserSteps.iSelectStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Rutu1234",
      "offset": 18
    }
  ],
  "location": "UserSteps.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Rutu1234",
      "offset": 26
    }
  ],
  "location": "UserSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.iClickOnSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Successfully Saved",
      "offset": 33
    }
  ],
  "location": "UserSteps.iShouldAbleToVerifyMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 802976600,
  "status": "passed"
});
formatter.before({
  "duration": 4386477000,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be able to login successfully",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter Username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 35600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 84014900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 76924900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 3321954900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 9600,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Admin should search employee details",
  "description": "",
  "id": "employee-records;admin-should-search-employee-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@sanity"
    },
    {
      "line": 26,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I click on Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I Enter username \"Aravind\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I Select User Role \"ESS\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter employee Name \"Dominic Chase\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select status \"Enabled\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click On Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the the user in result list",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 912222500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aravind",
      "offset": 18
    }
  ],
  "location": "UserSteps.IEnterUsername(String)"
});
formatter.result({
  "duration": 66168300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ESS",
      "offset": 20
    }
  ],
  "location": "UserSteps.ISelectUserRole(String)"
});
formatter.result({
  "duration": 85164300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dominic Chase",
      "offset": 23
    }
  ],
  "location": "UserSteps.IEnterEmployeeName(String)"
});
formatter.result({
  "duration": 51394800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 17
    }
  ],
  "location": "UserSteps.ISelectStatus(String)"
});
formatter.result({
  "duration": 101882200,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 447890700,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iShouldSeeTheTheUserInResultList()"
});
formatter.result({
  "duration": 15300,
  "status": "passed"
});
formatter.after({
  "duration": 660164400,
  "status": "passed"
});
formatter.before({
  "duration": 4187345700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be able to login successfully",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter Username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 44400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 75627900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 60583400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 3170434000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 11200,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Admin should delete the users successfully",
  "description": "",
  "id": "employee-records;admin-should-delete-the-users-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@sanity"
    },
    {
      "line": 37,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I click on Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I Enter username \"Ehioze Ebo\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I Select User Role \"ESS\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter employee Name \"Ehioze Ebo\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I select status \"Enabled\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click On Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should see the the user in result list",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I Click on Check box",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I Click on Delete Button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I should see pop is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I Click on Ok Button on Popup",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I should see the  message \"Successfully Deleted\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 866233500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ehioze Ebo",
      "offset": 18
    }
  ],
  "location": "UserSteps.IEnterUsername(String)"
});
formatter.result({
  "duration": 69019000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ESS",
      "offset": 20
    }
  ],
  "location": "UserSteps.ISelectUserRole(String)"
});
formatter.result({
  "duration": 70113100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ehioze Ebo",
      "offset": 23
    }
  ],
  "location": "UserSteps.IEnterEmployeeName(String)"
});
formatter.result({
  "duration": 54392500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 17
    }
  ],
  "location": "UserSteps.ISelectStatus(String)"
});
formatter.result({
  "duration": 97215600,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 449393900,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iShouldSeeTheTheUserInResultList()"
});
formatter.result({
  "duration": 9500,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iClickOnCheckBox()"
});
formatter.result({
  "duration": 51515500,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iClickOnDeleteButton()"
});
formatter.result({
  "duration": 50120200,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iShouldSeePopIsDisplayed()"
});
formatter.result({
  "duration": 45900,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iClickOnOkButtonOnPopup()"
});
formatter.result({
  "duration": 20045994900,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d96.0.4664.110)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-ECCE3OFG\u0027, ip: \u0027192.168.1.74\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c5acfecec0fc863be537012594897037, clickElement {id\u003da8185a58-e3a3-4d78-b4b0-f6a08e2381f5}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\laxmi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59473}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59473/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (c5acfecec0fc863be537012594897037)] -\u003e xpath: //input[@id\u003d\u0027dialogDeleteBtn\u0027]]\nSession ID: c5acfecec0fc863be537012594897037\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat com.demo.orangeHRM.utility.Utility.clickOnElement(Utility.java:71)\r\n\tat com.demo.orangeHRM.pages.ViewSystemUsersPage.clickOnPopUPOk(ViewSystemUsersPage.java:95)\r\n\tat com.demo.orangeHRM.cucumber.steps.UserSteps.iClickOnOkButtonOnPopup(UserSteps.java:120)\r\n\tat ✽.And I Click on Ok Button on Popup(user.feature:50)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Successfully Deleted",
      "offset": 27
    }
  ],
  "location": "UserSteps.iShouldSeeTheMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 796280600,
  "status": "passed"
});
formatter.before({
  "duration": 4548511600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be able to login successfully",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter Username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 34900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 65236100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 66921800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 3295109400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 9400,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Admin should search the deleted user And verify the message no record found",
  "description": "",
  "id": "employee-records;admin-should-search-the-deleted-user-and-verify-the-message-no-record-found",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 53,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "I click on Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I Enter username \"Aravind\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I Select User Role \"ESS\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I enter employee Name \"Dominic Chase\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I select status \"Enabled\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I click On Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I should see message \"No Records Found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1287989000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aravind",
      "offset": 18
    }
  ],
  "location": "UserSteps.IEnterUsername(String)"
});
formatter.result({
  "duration": 65514200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ESS",
      "offset": 20
    }
  ],
  "location": "UserSteps.ISelectUserRole(String)"
});
formatter.result({
  "duration": 72809800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dominic Chase",
      "offset": 23
    }
  ],
  "location": "UserSteps.IEnterEmployeeName(String)"
});
formatter.result({
  "duration": 52843600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 17
    }
  ],
  "location": "UserSteps.ISelectStatus(String)"
});
formatter.result({
  "duration": 98108300,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 409409600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No Records Found",
      "offset": 22
    }
  ],
  "location": "UserSteps.iShouldSeeMessage(String)"
});
formatter.result({
  "duration": 40100673600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//td[contains(text(),\u0027No Records Found\u0027)]\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-ECCE3OFG\u0027, ip: \u0027192.168.1.74\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [3898cb30972676381607c3bb7ecd4b41, findElement {using\u003dxpath, value\u003d//td[contains(text(),\u0027No Records Found\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\laxmi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59501}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59501/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3898cb30972676381607c3bb7ecd4b41\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy24.getText(Unknown Source)\r\n\tat com.demo.orangeHRM.pages.ViewSystemUsersPage.verifyNoRecordFound(ViewSystemUsersPage.java:113)\r\n\tat com.demo.orangeHRM.cucumber.steps.UserSteps.iShouldSeeMessage(UserSteps.java:132)\r\n\tat ✽.Then I should see message \"No Records Found\"(user.feature:61)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 836401900,
  "status": "passed"
});
});