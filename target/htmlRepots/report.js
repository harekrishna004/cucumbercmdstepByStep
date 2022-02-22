$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Demo.feature");
formatter.feature({
  "line": 1,
  "name": "login functionality test",
  "description": "",
  "id": "login-functionality-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "check login with valid credentials",
  "description": "",
  "id": "login-functionality-test;check-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@retest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user calculated 1/0",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    },
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "LoginSteps.user_calculated(int,int)"
});
formatter.result({
  "duration": 203064200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_valid_username_and_password()"
});
formatter.result({
  "duration": 32800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicks_on_login_button()"
});
formatter.result({
  "duration": 23300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_navigated_to_home_page()"
});
formatter.result({
  "duration": 18200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "check login with invalid credentials",
  "description": "",
  "id": "login-functionality-test;check-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user enters valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "error message is displayed invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 131300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_valid_username_and_password()"
});
formatter.result({
  "duration": 17500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicks_on_login_button()"
});
formatter.result({
  "duration": 14700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.error_message_is_displayed_invalid_credentials()"
});
formatter.result({
  "duration": 19700,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "login functionality test",
  "description": "",
  "id": "login-functionality-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "check login with valid credentials",
  "description": "",
  "id": "login-functionality-test;check-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 34300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_valid_username_and_password()"
});
formatter.result({
  "duration": 22200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicks_on_login_button()"
});
formatter.result({
  "duration": 16300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_navigated_to_home_page()"
});
formatter.result({
  "duration": 16900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "check login with invalid credentials",
  "description": "",
  "id": "login-functionality-test;check-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user enters valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "error message is displayed invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 35500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_valid_username_and_password()"
});
formatter.result({
  "duration": 13400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicks_on_login_button()"
});
formatter.result({
  "duration": 14500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.error_message_is_displayed_invalid_credentials()"
});
formatter.result({
  "duration": 16700,
  "status": "passed"
});
});