@tag1
Feature: Add Numbers
  As a user of the calculator
  I want to add 2 numbers

  @tag2
  Scenario: Add 2 small numbers
    Given the calculator is cleared
    When I add 5 and 6
    Then the result should be 11

  Scenario: Home page validation
    When I open home page
    Then I should see home page

