Feature: Home Page validation
    As a user
    I should be able to open home page 

Scenario: open sub page of website
    Given the page url is not "http://localhost"
    And   I open the site "/"
    Then  I expect that the url is "http://localhost/"
    And   I expect that the url is not "http://google.com"
#    When  I wait on element ".lateElem" for 5000ms to be enabled
