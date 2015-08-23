Feature: Register User
    As a user
    I should be able to Register User 

Scenario: Register a New user
    Given the page url is not "http://localhost"
    And   I open the site "/"
    Then  I expect that the title is "Shadowpact Ecom"
    When  I click on the element "[href='register']"
    Then  I expect that element "#new-account" is visible
    When  I add "Name" random to the inputfield "#firstName"
    When  I add "email" randomEmail to the inputfield "#new-account #email"
    When  I add "password" random to the inputfield "#new-account #password"
    When  I submit the form "[action='customer_account']"
    Then  I expect that element "h1" contains the text "My account"
    When  I add "LastName" random to the inputfield "#lastName"
    When  I add "Company" random to the inputfield "#company"
    When  I add "Street" random to the inputfield "#street"
    When  I add "City" random to the inputfield "#city"
    # When  I add "110011" to the inputfield "#zip"
    # When  I add "State"  to the inputfield "#state"
    # When  I add "India"  to the inputfield "#country"
    # When  I add "9811001100" random to the inputfield "#phone"
