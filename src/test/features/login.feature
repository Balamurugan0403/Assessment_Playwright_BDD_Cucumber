@Login
Feature: Login in the application

  Background:
    Given the user launch the application

  Scenario Outline: Verify login with valid and invalid credentials
    When the user navigates to the login page
    And the user enters email "<email>" and password "<password>"
    And the user clicks the Login button
    Then the user should see the "<expectedResult>" message

    Examples:
      | email                | password     | expectedResult                                                   |
      | kalai123@gmail.com   | kalai@1234   | success                                                          |
      | kalai123@gmail.com   | kalaijjj@421 | Login was unsuccessful. Please correct the errors and try again. |
      | kalaitt123@gmail.com | kalai@1234   | Login was unsuccessful. Please correct the errors and try again. |