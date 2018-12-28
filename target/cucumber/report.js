$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("org/openehr/sample.feature");
formatter.feature({
  "name": "Feature A",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "first step",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberSteps.java:10"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat org.openehr.CucumberSteps.lambda$new$0(CucumberSteps.java:12)\n\tat ✽.first step(org/openehr/sample.feature:3)\n",
  "status": "pending"
});
formatter.scenario({
  "name": "A good start",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "first step",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberSteps.java:10"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "second step",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberSteps.java:15"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "third step",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberSteps.java:20"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Followed by some examples",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "\u003cx\u003e step",
  "keyword": "When "
});
formatter.step({
  "name": "\u003cy\u003e step",
  "keyword": "Then "
});
formatter.examples({
  "name": "examples 1 name",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "x",
        "y"
      ]
    },
    {
      "cells": [
        "second2",
        "third2"
      ]
    },
    {
      "cells": [
        "second2",
        "third3"
      ]
    }
  ]
});
formatter.background({
  "name": "background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "first step",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberSteps.java:10"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat org.openehr.CucumberSteps.lambda$new$0(CucumberSteps.java:12)\n\tat ✽.first step(org/openehr/sample.feature:3)\n",
  "status": "pending"
});
formatter.scenario({
  "name": "Followed by some examples",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "second2 step",
  "keyword": "When "
});
formatter.match({
  "location": "CucumberSteps.java:25"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "third2 step",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberSteps.java:30"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "first step",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberSteps.java:10"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat org.openehr.CucumberSteps.lambda$new$0(CucumberSteps.java:12)\n\tat ✽.first step(org/openehr/sample.feature:3)\n",
  "status": "pending"
});
formatter.scenario({
  "name": "Followed by some examples",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "second2 step",
  "keyword": "When "
});
formatter.match({
  "location": "CucumberSteps.java:25"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "third3 step",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberSteps.java:30"
});
formatter.result({
  "status": "skipped"
});
formatter.examples({
  "name": "examples 2 name",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "x",
        "y"
      ]
    },
    {
      "cells": [
        "second3",
        "third3"
      ]
    }
  ]
});
formatter.background({
  "name": "background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "first step",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberSteps.java:10"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat org.openehr.CucumberSteps.lambda$new$0(CucumberSteps.java:12)\n\tat ✽.first step(org/openehr/sample.feature:3)\n",
  "status": "pending"
});
formatter.scenario({
  "name": "Followed by some examples",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "second3 step",
  "keyword": "When "
});
formatter.match({
  "location": "CucumberSteps.java:25"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "third3 step",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberSteps.java:30"
});
formatter.result({
  "status": "skipped"
});
});