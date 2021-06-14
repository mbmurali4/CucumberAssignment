#Author: BalaMurali M (Murali)
#Assignment : Verify user registration for Elearning upskill portal
@featuretag
Feature: user registration

  @Registration
  Scenario Outline: User Registration on Elearning upskill application
    Given User is on Elearning application registration page
    When User click on signup button for registration
    And User enter mandatory "<Firstname>" and "<Lastname>" and "email" and "Username" and "Pass" and "Confirmpassword"
    And User click on register button
    Then User should redirect to elearn home page
    And User select inbox from user profile
    And User click on compose message icon to enter subject line
    And User click on send message button at the bottom

    Examples: 
      | Firstname | Lastname | email            | Username | Pass     | Confirmpassword |
      | Apples    | Zizs     | apples@gmail.com | Apple20  | Abcd@123 | Abcd@123        |
