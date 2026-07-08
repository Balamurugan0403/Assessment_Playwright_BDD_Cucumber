@Register
Feature: Register in the application

  Background:
    Given the user launch the application
    
  Scenario: Verify successful registration
    When the user navigates to the register page
    And the user enters registration details
    And the user clicks the Register button
    Then the registration should be successful
    And the user clicks the continue button
    Then it navigates to the Homepage
