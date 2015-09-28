Feature: Sign In  User
    As a registered User
    I should be able to Sign in

Scenario: Sign In from TopNav
    Given the page url is not "http://localhost"
    And   I open the site "/"
    Then  I expect that the title is "Shadowpact Ecom"
    When  I click on the element "[data-target='#login-modal']"
    When  I pause for 1000ms
    When  I add "email" randomEmail to the inputfield "#email-modal"
    When  I add "password" random to the inputfield "#password-modal"
    When  I submit the form "[action='customer_orders']"
    Then  I expect that element "#customer-orders" is visible
    When  I pause for 3000ms

    


Scenario: Sign In from Register Page
    Given the page url is not "http://localhost"
    And   I open the site "/"
    Then  I expect that the title is "Shadowpact Ecom"    
    When  I click on the element "[href='register']"
    Then  I expect that element "#sign-in" is visible
    When  I add "email" randomEmail to the inputfield "#sign-in #email"
    When  I add "password" random to the inputfield "#sign-in #password"
    When  I submit the form "[action='customer_orders']"
    Then  I expect that element "#customer-orders" is visible
    When  I pause for 3000ms