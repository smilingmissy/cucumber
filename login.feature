Feature: Login Functionality

  Scenario Outline: User Login with valid credentials

    Given I am on the login page
    When user enters with right  username and password
    Then user should be redirected to secure page

  Scenario:for Logout
  Given user is on secure page
  When user clicks on logout 
  Then user should be redirected to login page

Scenario: User Login with invalid credentials
  Given I am on the login page
  When user enters wrong username and password
  Then user should see an flash error message