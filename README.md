# PRO202-Agile-Project Team Brussels
## Overview
* **[docs](https://github.com/vytre/Brussels/tree/main/docs)** - Document folder
  * **[group-docs](https://github.com/vytre/Brussels/tree/main/docs/group-docs)** - Group Documentation, Riskplan, Contract and Radar Test
  * **[sprint-reports](https://github.com/vytre/Brussels/tree/main/docs/sprint-reports)** - Weekly sprint reports


## Starting the React App
Open project in root folder and run:
```
npm run build
```
This will download dependencies and build the app

```
npm run start
```
This will run the built app locally, open http://localhost:3000 in your web-browser to view the app

## Azure WebServer
[![Build and deploy Node.js app to Azure Web App - Brussels-ANCEP](https://github.com/vytre/Brussels/actions/workflows/main_brussels-ancep.yml/badge.svg)](https://github.com/vytre/Brussels/actions/workflows/main_brussels-ancep.yml) <br>
Our React App is hosted on Azure Webservers at https://brussels-ancep.azurewebsites.net/

## Standards

### *Code Editors*
We have no set Code Editors, we are using WebStorm, VSC and IntelliJ.

### *Plugins*
We are using the **[Prettier Plugin](https://prettier.io/)** integrated with our IDEs

### *Functions and Variables*
We are using lowerCamelCase for our Funtions and Variables

*Functions*
```javascript
function showYear() {
  console.log("Hello, World!");
}

````

<br>

*Variables*

```javascript
const universityCourse = "PRO 202 Agile Project";
const groupName = "Brussels";
```

### *Folder Structure*
```
├── docs
│     ├── group-docs
│     │        ├── Employment-Contract-Brussels.pdf
│     │        ├── Radar-Test-Brussels.pdf
│     │        └── Risk-Plan-Brussels.pdf
│     │
│     └── sprint-reports
│               ├── Design-Sprint-Report.pdf
│               └── Sprint-1-Report.pdf
│ 
├── client
│     ├── application.jsx
│     ├── index.html
│     ├── index.jsx
│     ├── pages
│     │    ├── archive.jsx
│     │    ├── dilemmaRoute.jsx
│     │    ├── frontpage.jsx
│     │    └── dilemmaPage
│     │            ├── dilemmaAgeGroup.jsx
│     │            ├── dilemmaCategory.jsx
│     │            ├── dilemmaCrossroad.jsx
│     │            ├── dilemmaQuestion.jsx
│     │            ├── dilemmaResult.jsx
│     │            ├── dilemmaStart.jsx
│     │            └── dilemmaWorkMode.jsx
│     │                
│     ├── stylesheets
│     │     ├── archive.css
│     │     ├── frontpage.css
│     │     ├── header.css
│     │     └── dilemmaPage
│     │            ├── dilemmaAgeGroup.css
│     │            ├── dilemmaCategory.css
│     │            ├── dilemmaCrossroad.css
│     │            ├── dilemmaQuestion.css
│     │            ├── dilemmaResult.css
│     │            ├── dilemmaStart.css
│     │            └── dilemmaWorkMode.css
│     └── utils
│           └── header.jsx
├── server
│     └── server.js

````
