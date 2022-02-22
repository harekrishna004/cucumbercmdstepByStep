Feature: login functionality test

@retest
Scenario: check login with valid credentials

Given user calculated 1/0
When user enters valid username and password
And clicks on login button
Then user is navigated to home page

@smoke
Scenario: check login with invalid credentials

Given user is on login page
When user enters valid username and password
And clicks on login button
Then error message is displayed invalid credentials
