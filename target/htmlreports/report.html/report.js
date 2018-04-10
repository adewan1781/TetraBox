$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BoxLogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author       :  TetraNoodle"
    },
    {
      "line": 2,
      "value": "#Scenario     :  Login and Logout from Box app"
    },
    {
      "line": 3,
      "value": "#Application  :  Box"
    }
  ],
  "line": 4,
  "name": "Box loginlogout",
  "description": "",
  "id": "box-loginlogout",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Box Loginlogout scenario",
  "description": "",
  "id": "box-loginlogout;box-loginlogout-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I want to navigate to box website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "page with title \"Box | Login\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enter \"\u003cuser\u003e\" username",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to enter \"\u003cpassword\u003e\" password",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "page with title \"All Files | Powered By Box\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks on logout button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "page with title \"Box | Login\" should open",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "box-loginlogout;box-loginlogout-scenario;",
  "rows": [
    {
      "cells": [
        "user",
        "password"
      ],
      "line": 19,
      "id": "box-loginlogout;box-loginlogout-scenario;;1"
    },
    {
      "cells": [
        "h2so4in2008@gmail.com",
        "Qazplm123"
      ],
      "line": 20,
      "id": "box-loginlogout;box-loginlogout-scenario;;2"
    },
    {
      "cells": [
        "nancydhingra131@gmail.com",
        "nancy131"
      ],
      "line": 21,
      "id": "box-loginlogout;box-loginlogout-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2684932846,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Box Loginlogout scenario",
  "description": "",
  "id": "box-loginlogout;box-loginlogout-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I want to navigate to box website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "page with title \"Box | Login\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enter \"h2so4in2008@gmail.com\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to enter \"Qazplm123\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "page with title \"All Files | Powered By Box\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks on logout button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "page with title \"Box | Login\" should open",
  "keyword": "Then "
});
formatter.match({
  "location": "BoxLoginLogoutSteps.navigateToBox()"
});
formatter.result({
  "duration": 3675406883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Box | Login",
      "offset": 17
    }
  ],
  "location": "BoxLoginLogoutSteps.veriifyPageTitle(String)"
});
formatter.result({
  "duration": 13581846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "h2so4in2008@gmail.com",
      "offset": 12
    }
  ],
  "location": "BoxLoginLogoutSteps.enterUserName(String)"
});
formatter.result({
  "duration": 79502514,
  "status": "passed"
});
formatter.match({
  "location": "BoxLoginLogoutSteps.clickNext()"
});
formatter.result({
  "duration": 690691017,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qazplm123",
      "offset": 30
    }
  ],
  "location": "BoxLoginLogoutSteps.enterPassword(String)"
});
formatter.result({
  "duration": 45210945,
  "status": "passed"
});
formatter.match({
  "location": "BoxLoginLogoutSteps.clickLoginButton()"
});
formatter.result({
  "duration": 4704130640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All Files | Powered By Box",
      "offset": 17
    }
  ],
  "location": "BoxLoginLogoutSteps.veriifyPageTitle(String)"
});
formatter.result({
  "duration": 12996182,
  "status": "passed"
});
formatter.match({
  "location": "BoxLoginLogoutSteps.clickLogoutBtn()"
});
formatter.result({
  "duration": 5587104832,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Box | Login",
      "offset": 17
    }
  ],
  "location": "BoxLoginLogoutSteps.veriifyPageTitle(String)"
});
formatter.result({
  "duration": 6956119,
  "status": "passed"
});
formatter.before({
  "duration": 85698,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Box Loginlogout scenario",
  "description": "",
  "id": "box-loginlogout;box-loginlogout-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I want to navigate to box website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "page with title \"Box | Login\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enter \"nancydhingra131@gmail.com\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to enter \"nancy131\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "page with title \"All Files | Powered By Box\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks on logout button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "page with title \"Box | Login\" should open",
  "keyword": "Then "
});
formatter.match({
  "location": "BoxLoginLogoutSteps.navigateToBox()"
});
formatter.result({
  "duration": 1105501442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Box | Login",
      "offset": 17
    }
  ],
  "location": "BoxLoginLogoutSteps.veriifyPageTitle(String)"
});
formatter.result({
  "duration": 5289204,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nancydhingra131@gmail.com",
      "offset": 12
    }
  ],
  "location": "BoxLoginLogoutSteps.enterUserName(String)"
});
formatter.result({
  "duration": 62683475,
  "status": "passed"
});
formatter.match({
  "location": "BoxLoginLogoutSteps.clickNext()"
});
formatter.result({
  "duration": 668385488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nancy131",
      "offset": 30
    }
  ],
  "location": "BoxLoginLogoutSteps.enterPassword(String)"
});
formatter.result({
  "duration": 41753854,
  "status": "passed"
});
formatter.match({
  "location": "BoxLoginLogoutSteps.clickLoginButton()"
});
formatter.result({
  "duration": 3196386830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All Files | Powered By Box",
      "offset": 17
    }
  ],
  "location": "BoxLoginLogoutSteps.veriifyPageTitle(String)"
});
formatter.result({
  "duration": 12008285,
  "status": "passed"
});
formatter.match({
  "location": "BoxLoginLogoutSteps.clickLogoutBtn()"
});
formatter.result({
  "duration": 4949708445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Box | Login",
      "offset": 17
    }
  ],
  "location": "BoxLoginLogoutSteps.veriifyPageTitle(String)"
});
formatter.result({
  "duration": 6079812,
  "status": "passed"
});
formatter.uri("CreateFolder.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author       :  TetraNoodle"
    },
    {
      "line": 2,
      "value": "#Scenario     :  Create and Delete folder from Box app."
    },
    {
      "line": 3,
      "value": "#Application  :  Box"
    }
  ],
  "line": 4,
  "name": "CreateFolder",
  "description": "",
  "id": "createfolder",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Createfolder scenario",
  "description": "",
  "id": "createfolder;createfolder-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@createfolder"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I want to navigate to box website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "page with title \"Box | Login\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enter \"\u003cuser\u003e\" username",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to enter \"\u003cpassword\u003e\" password",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "page with title \"All Files | Powered By Box\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click on new button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "click on new folder link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Create folder pop up should get open",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "enter folder name given below:",
  "rows": [
    {
      "cells": [
        "Dcfolder"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on create folder button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "select the newly created folder row",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "click on Trash link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "confirm popup should get displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "click on ok button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "page with title \"All Files | Powered By Box\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user clicks on logout button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "page with title \"Box | Login\" should open",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "createfolder;createfolder-scenario;",
  "rows": [
    {
      "cells": [
        "user",
        "password"
      ],
      "line": 30,
      "id": "createfolder;createfolder-scenario;;1"
    },
    {
      "cells": [
        "h2so4in2008@gmail.com",
        "Qazplm123"
      ],
      "line": 31,
      "id": "createfolder;createfolder-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 47043,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Createfolder scenario",
  "description": "",
  "id": "createfolder;createfolder-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@createfolder"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I want to navigate to box website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "page with title \"Box | Login\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enter \"h2so4in2008@gmail.com\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to enter \"Qazplm123\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "page with title \"All Files | Powered By Box\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click on new button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "click on new folder link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Create folder pop up should get open",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "enter folder name given below:",
  "rows": [
    {
      "cells": [
        "Dcfolder"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on create folder button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "select the newly created folder row",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "click on Trash link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "confirm popup should get displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "click on ok button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "page with title \"All Files | Powered By Box\" should open",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user clicks on logout button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "page with title \"Box | Login\" should open",
  "keyword": "Then "
});
formatter.match({
  "location": "BoxLoginLogoutSteps.navigateToBox()"
});
formatter.result({
  "duration": 1145609532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Box | Login",
      "offset": 17
    }
  ],
  "location": "BoxLoginLogoutSteps.veriifyPageTitle(String)"
});
formatter.result({
  "duration": 5911334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "h2so4in2008@gmail.com",
      "offset": 12
    }
  ],
  "location": "BoxLoginLogoutSteps.enterUserName(String)"
});
formatter.result({
  "duration": 59062647,
  "status": "passed"
});
formatter.match({
  "location": "BoxLoginLogoutSteps.clickNext()"
});
formatter.result({
  "duration": 777922755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qazplm123",
      "offset": 30
    }
  ],
  "location": "BoxLoginLogoutSteps.enterPassword(String)"
});
formatter.result({
  "duration": 38429869,
  "status": "passed"
});
formatter.match({
  "location": "BoxLoginLogoutSteps.clickLoginButton()"
});
formatter.result({
  "duration": 3182713452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All Files | Powered By Box",
      "offset": 17
    }
  ],
  "location": "BoxLoginLogoutSteps.veriifyPageTitle(String)"
});
formatter.result({
  "duration": 16686663,
  "status": "passed"
});
formatter.match({
  "location": "CreateFolderSteps.clickNewMenu()"
});
formatter.result({
  "duration": 339406460,
  "status": "passed"
});
formatter.match({
  "location": "CreateFolderSteps.clickCreateFolderMenu()"
});
formatter.result({
  "duration": 293746604,
  "status": "passed"
});
formatter.match({
  "location": "CreateFolderSteps.verifyFolderPopUp()"
});
formatter.result({
  "duration": 651224386,
  "status": "passed"
});
formatter.match({
  "location": "CreateFolderSteps.enterFolderName(DataTable)"
});
formatter.result({
  "duration": 30535813,
  "status": "passed"
});
formatter.match({
  "location": "CreateFolderSteps.createFolderBtn()"
});
formatter.result({
  "duration": 242243243,
  "status": "passed"
});
formatter.match({
  "location": "CreateFolderSteps.selectFolderRow()"
});
formatter.result({
  "duration": 1938265766,
  "status": "passed"
});
formatter.match({
  "location": "CreateFolderSteps.clickTrash()"
});
formatter.result({
  "duration": 328799609,
  "status": "passed"
});
formatter.match({
  "location": "CreateFolderSteps.verifyFolderPopup()"
});
formatter.result({
  "duration": 58717667,
  "status": "passed"
});
formatter.match({
  "location": "CreateFolderSteps.confirmOk()"
});
formatter.result({
  "duration": 265162880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All Files | Powered By Box",
      "offset": 17
    }
  ],
  "location": "BoxLoginLogoutSteps.veriifyPageTitle(String)"
});
formatter.result({
  "duration": 5728998,
  "status": "passed"
});
formatter.match({
  "location": "BoxLoginLogoutSteps.clickLogoutBtn()"
});
formatter.result({
  "duration": 4894107264,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Box | Login",
      "offset": 17
    }
  ],
  "location": "BoxLoginLogoutSteps.veriifyPageTitle(String)"
});
formatter.result({
  "duration": 4285261,
  "status": "passed"
});
});