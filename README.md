# End To End UI Test Automation

This project automates the validation of mobile application on iOS Simulator using typescript, webdriverIO & appium framework.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Prerequisites](#prerequisites)
- [Running Tests](#running-tests)
- [Directory Structure](#directory-structure)

---

## About the Project

This project uses following framework for UI Test automation :

| Module Name      | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| **webdriverio**  | Core framework which is used to automate tests to execute on IOS Device  |
| **appium**       | applium is used to communicate with iOS simulator and run test           |

---

## Prerequisites

Ensure you have the following installed before proceeding:
- Install **nvm** to install and manage **Node.js** version from [NVM Github](https://github.com/nvm-sh/nvm).
    - Install **Node.js** version 18.20.7 using nvm
- Install Xcode from Apple Store
- Install Xcode commandline tools, if not already installed in previous step, using command 'xcode-select --install'
- Setup iOS Simulator
- Install appium globally using command 'npm install -f appium'. We need appium version >= 2.x.x.
- Run 'appium driver doctor xcuitest' command to validate iOS app automation installation requirement 
- Optional Installations
    - Install Carthage using command 'brew install carthage'. This is not required with new appium version.
    - Install applesimutils using following commands:
        - brew tap wix/brew
        - brew install applesimutils
    - Install ffmpeg using command 'brew install ffmpeg'    


---

## Running Tests

iOS Mobile App Tests are run successfully on Macbook with apple silicon running os version 15.4.
Note: For convenience wdiodemoapp.app.zip - iOS app file is kept in the repository at 'ios_app_automation/apps/ios/' location.
      just unzip it to use it. 


1. Download the ios.simulator.wdio.native.app.v1.0.8.zip App from [here](https://github.com/webdriverio/native-demo-app/releases).

2. Unzip the ios.simulator.wdio.native.app.v1.0.8.zip file in current directory

3. Copy the app 'Payload/wdiodemoapp.app' in project directory 'ios_app_automation/apps/ios/' location

4. Install node modules:
   ```bash
   npm install

5. Execute Tests

   ```bash
   npx wdio 

6. Generate Allure Report in HTML Format 

   ```bash
   npm run allure:report

## Directory Structure

| Directory Name         | Description                                                              |
|------------------------|--------------------------------------------------------------------------|
| **allure-results**     | This folder contains test reports in raw format                          |
| **allure-report**      | This folder contains test report file in html format                     |
| **test**               | This folder contains entire test resources                               |
| **test/pageobjects**   | This folder contains page object models                                  |
| **test/apps**          | This folder contains test app                                            |
| **test/specs**         | This folder contains end to end tests                                    |

## Test Documentation

This section outlines the automated test coverage for various features in the app. 
Each test suite targets a specific functionality or screen in the application.

---

### WebView Features

- ✅ `webview.spec.ts`
  - Testcase: Verify Context switching from native_app to webview and viceversa and Verify UI elements
  - Purpose: Navigate to webview and switch context from native_app to webview and verify UI elements. Go back to Native_App context and verify UI elements again
  - Expected Outcomes: Expected UI elements are displayed in respective views.

---

### Login & Signup Screen

- ✅ `login.spec.ts`
  - Testcase: Verify valid user login
  - Purpose: valid user can login successfully
  - Expected Outcomes: valid user is logged in successfully after entering email/password

  - Testcase: Verify New user registration
  - Purpose: New User can signup
  - Expected Outcomes: New user is signed up successfully after filling up the signup form

---

### Swipe Screen

- ✅ `swipe.spec.ts`
  - Testcase: Verify Horizontal Swipe Workflow  in Left <-> Right direction
  - Purpose: User can perform swipe in left or right direction
  - Expected Outcomes: Expected UI elements (card) are visible after swipe operation

  - Testcase: Verify Vertical Swipe Workflow in UP direction 
  - Purpose: User can perform swipe in up or down direction 
  - Expected Outcome: Expected UI element is displayed, after swipe action in UP direction

---

### Forms Screen 

- ✅ `forms.spec.ts`
  - Testcase : Verify Different Forms Operations
  - PurPose: Interact with following UI elements
    - Enter Input Text
    - Switch Button
    - Dropdown List
    - Picker wheel 
    - Button
  - Expected Outcome: Expected UI elements are displaed correctly

---

### Drag Screen 

- ✅ `drag.spec.ts`
  - Testcase: Verify drag and drop workflow 
  - Purpose: User can perform drag & drop operation
  - Expected Outcomes: 'Congratulation' message is displayed after successful drag/drop action

---

## Appium Doctor Dependency Check Logs

```
$ appium driver doctor xcuitest
Running 6 doctor checks for the "xcuitest" driver
info Doctor ### Starting doctor diagnostics  ###
info Doctor  ✔ HOME is set to: /Users/tarun
info Doctor  ✔ xCode is installed at '/Applications/Xcode.app/Contents/Developer'
info Doctor  ✔ xCode tools are installed and work properly
info Doctor  ✔ applesimutils is installed at: /opt/homebrew/bin/applesimutils
info Doctor  ✔ ffmpeg exists at '/opt/homebrew/bin/ffmpeg'
WARN Doctor  ✖ idb and idb_companion are not installed
info Doctor ### Diagnostic completed, 0 required fixes needed, 1 optional fix possible. ###
info Doctor
info Doctor ### Optional Manual Fixes ###
info Doctor To fix these optional issues, please do the following manually:
WARN Doctor  ➜ Why idb is needed and how to install it: https://git.io/JnxQc
info Doctor
info Doctor Bye! All issues have been fixed!
info Doctor
```