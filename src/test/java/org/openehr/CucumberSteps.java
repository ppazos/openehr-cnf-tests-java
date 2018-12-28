package org.openehr;

import cucumber.api.java8.En;

public class CucumberSteps implements En {

   //Lambda-steps inside Constructors
   public CucumberSteps() {

      Given("first step", () -> {
          // Write code here that turns the phrase above into concrete actions
          throw new cucumber.api.PendingException();
      });

      Given("second step", () -> {
          // Write code here that turns the phrase above into concrete actions
          throw new cucumber.api.PendingException();
      });

      Given("third step", () -> {
          // Write code here that turns the phrase above into concrete actions
          throw new cucumber.api.PendingException();
      });

      When("second{int} step", (Integer int1) -> {
          // Write code here that turns the phrase above into concrete actions
          throw new cucumber.api.PendingException();
      });

      Then("third{int} step", (Integer int1) -> {
          // Write code here that turns the phrase above into concrete actions
          throw new cucumber.api.PendingException();
      });
   }
}
