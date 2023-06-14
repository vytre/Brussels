# PRO202-Agile-Project Team Brussels

## Starting the React App
To start the applictation you will need to have [node.js](https://nodejs.org/en) and [npm](https://www.npmjs.com/) installed on your computer. <br>
Once you have it installed you can clone the project and run the commands
```
npm run build
```

```
npm run start
```
This will run the built app then start the application locally <br>
open http://localhost:3000 in your web-browser to view the app

## Azure
[![Build and deploy Node.js app to Azure Web App - Brussels-ANCEP](https://github.com/vytre/Brussels/actions/workflows/main_brussels-ancep.yml/badge.svg)](https://github.com/vytre/Brussels/actions/workflows/main_brussels-ancep.yml) <br>
Our React Application is hosted on Azure Webservers at --> https://brussels-ancep.azurewebsites.net/
## Overview
* **[docs](https://github.com/vytre/Brussels/tree/main/docs)** - Document folder
  * **[group-docs](https://github.com/vytre/Brussels/tree/main/docs/group-docs)** - Group Documentation, Riskplan, Contract and Radar Test
  * **[sprint-reports](https://github.com/vytre/Brussels/tree/main/docs/sprint-reports)** - Weekly sprint reports
* **[client](https://github.com/vytre/Brussels/tree/main/client)** - client side code
  * **[images](https://github.com/vytre/Brussels/tree/main/client/images)** - Images used in our application
  * **[pages](https://github.com/vytre/Brussels/tree/main/client/pages)** - Page components
  * **[stylesheets](https://github.com/vytre/Brussels/tree/main/client/stylesheets)** - css Stylesheets
  * **[utils](https://github.com/vytre/Brussels/tree/main/client/utils)** - commonly used components
* **[server](https://github.com/vytre/Brussels/tree/main/server)** - server side code






## Standards

### *Code Editors*
![VSC](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white) ![IntelliJ](https://img.shields.io/badge/IntelliJ_IDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white) ![WebStorm](https://img.shields.io/badge/WebStorm-000000?style=for-the-badge&logo=WebStorm&logoColor=white)


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
└── server
     └── server.js
````
