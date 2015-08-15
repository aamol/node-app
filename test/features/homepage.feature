@tag1
Feature: Add Numbers
  As a user of the calculator
  I want to add 2 numbers

#  Scenario: Home page validation
#    When I open home page
#    Then I should see home page	

  Scenario: Reading documentation
    Given I am on the Cucumber.js GitHub repository
    When I go to the README file
    Then I should see "Usage" as the page title
