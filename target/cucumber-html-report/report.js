$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Sign.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: BalaMurali M (Murali)"
    },
    {
      "line": 2,
      "value": "#Assignment : Verify user registration for Elearning upskill portal"
    }
  ],
  "line": 4,
  "name": "user registration",
  "description": "",
  "id": "user-registration",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@featuretag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "User Registration on Elearning upskill application",
  "description": "",
  "id": "user-registration;user-registration-on-elearning-upskill-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on Elearning application registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User click on signup button for registration",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enter mandatory \"\u003cFirstname\u003e\" and \"\u003cLastname\u003e\" and \"email\" and \"Username\" and \"Pass\" and \"Confirmpassword\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should redirect to elearn home page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User select inbox from user profile",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on compose message icon to enter subject line",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on send message button at the bottom",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "user-registration;user-registration-on-elearning-upskill-application;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "email",
        "Username",
        "Pass",
        "Confirmpassword"
      ],
      "line": 18,
      "id": "user-registration;user-registration-on-elearning-upskill-application;;1"
    },
    {
      "cells": [
        "Apples",
        "Zizs",
        "apples@gmail.com",
        "Apple20",
        "Abcd@123",
        "Abcd@123"
      ],
      "line": 19,
      "id": "user-registration;user-registration-on-elearning-upskill-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "User Registration on Elearning upskill application",
  "description": "",
  "id": "user-registration;user-registration-on-elearning-upskill-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@featuretag"
    },
    {
      "line": 6,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on Elearning application registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User click on signup button for registration",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enter mandatory \"Apples\" and \"Zizs\" and \"email\" and \"Username\" and \"Pass\" and \"Confirmpassword\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should redirect to elearn home page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User select inbox from user profile",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on compose message icon to enter subject line",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on send message button at the bottom",
  "keyword": "And "
});
formatter.match({
  "location": "Signin.user_is_on_Elearning_application_registration_page()"
});
formatter.result({
  "duration": 12960086100,
  "status": "passed"
});
formatter.match({
  "location": "Signin.user_click_on_signup_button_for_registration()"
});
formatter.result({
  "duration": 2939635100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apples",
      "offset": 22
    },
    {
      "val": "Zizs",
      "offset": 35
    },
    {
      "val": "email",
      "offset": 46
    },
    {
      "val": "Username",
      "offset": 58
    },
    {
      "val": "Pass",
      "offset": 73
    },
    {
      "val": "Confirmpassword",
      "offset": 84
    }
  ],
  "location": "Signin.user_enter_mandatory_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1579728500,
  "status": "passed"
});
formatter.match({
  "location": "Signin.user_click_on_register_button()"
});
formatter.result({
  "duration": 3154728800,
  "status": "passed"
});
formatter.match({
  "location": "Signin.user_should_redirect_to_elearn_home_page()"
});
formatter.result({
  "duration": 5540343300,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat StepDefinition.Signin.user_should_redirect_to_elearn_home_page(Signin.java:89)\r\n\tat ✽.Then User should redirect to elearn home page(Sign.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Signin.user_select_inbox_from_user_profile()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signin.user_click_on_compose_message_icon_to_enter_subject_line()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signin.user_click_on_send_message_button_at_the_bottom()"
});
formatter.result({
  "status": "skipped"
});
});