<a name="readme-top"></a>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
    - [Live Demo](#live-demo)
    - [Walkthrough](#Walkthrough)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)

- [📝 License](#license)

# 📖 JS Capstone Project <a name="about-project"></a>

JS Capstone Project - Microverse! project is a repository consisting of the following files:

- HTML file
- CSS file
- JS files
- HTML, CSS, and JS linters file
- callbacks and promises used.
- Implementation of External API
- Learn how to use proper ES6 syntax.
Use ES6 modules to write modular JavaScript.
- Use webpack to bundle JavaScript.


## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

  <ul>
    <li><a href="https://microverse.notion.site/HTML-CSS-Get-a-head-start-275eb85fd34b4416aa06ec635d69cdaf">HTML</a></li>
    <li><a href="https://microverse.notion.site/HTML-CSS-Get-a-head-start-275eb85fd34b4416aa06ec635d69cdaf">CSS</a></li>
       <li><a href="https://microverse.notion.site/HTML-CSS-Get-a-head-start-275eb85fd34b4416aa06ec635d69cdaf">JS</a></li>
  </ul>

## 🔑 Key Features <a name="key-features"></a>
### Javascript Capstone Project: [Requirements](https://github.com/microverseinc/curriculum-javascript/blob/main/group-capstone/js_capstone.md)

### Features Added:
- [x] Interfaces:
   - The home page.
   - The comments popup. 
- [x] The layout of the wireframes provided is followed and the layouts are personalized for the rest of the design including colors, typographies, spacings, etc.
  - Home page
     - When the page loads, the web app retrieves data from [API](https://rapidapi.com/hub) and shows the list of items on the screen used.
     - The [Involvement API](https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6b6MwShRJVij7XaDVDix/likes/) to show the item likes used.
     - The Page  makes only 2 requests:
          - One to the base [API](https://rapidapi.com/hub).
          - And one to the [Involvement API](https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6b6MwShRJVij7XaDVDix/likes/).
     - When the user clicks on the Like button of an item, the interaction is recorded in the [Involvement API](https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6b6MwShRJVij7XaDVDix/likes/) and the screen is updated.
    - When the user clicks on the "Comments" button, the Comments popup appears from this [API Storega](https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6b6MwShRJVij7XaDVDix/comments).
    - Home page header and navigation similar to the given [mockup](https://github.com/microverseinc/curriculum-javascript/blob/main/group-capstone/images/Home.png).
    - Home page footer similar to the given [mockup](https://github.com/microverseinc/curriculum-javascript/blob/main/group-capstone/images/Home.png).
- [x] Comments popup
   - When the popup loads, the webapp retrieves data from:
   - The selected API and shows details about the selected item.
   - The Involvement API to show the item comments.
   - When the user clicks on the "Comment" button, the data is recorded in the Involvement API and the screen is updated.
   - When the popup loads, the webapp retrieves data from: The selected API and shows details about the selected item.
- [x] Counters We have counters in all the interfaces that show:
   - The number of items (home).
   - The number of comments (comments popup).
   
 <p align="right">(<a href="#readme-top">back to top</a>)</p>
 
## 🚀 Live Demo <a name="live-demo"></a> 
[Live Demo Link ](https://benawi.github.io/Microverse-JS-Capstone/dist/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👁 Walkthrough <a name="Walkthrough"></a>

[Live vedio](https://drive.google.com/file/d/1JdyRRXO2_W1Fq5bu_4MYirS2-VoofdFz/view?usp=sharing) 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### 💻Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Setup

Clone this repository to your desired folder:

> cd my-folder
> git clone git@github.com:Microverse-JS-Capstone.git

### Prerequisites

In order to run this project you need:

- gitHub account;
- git installed on your OS.

### Install

> [Linters](https://github.com/microverseinc/linters-config/tree/master/html-css-js)

- Installations required to run this project:

### Install the node module

- Run the following command:

```
npm install
```

### Install the webpack-cli.

- Run the following command:

```
npm install webpack webpack-cli --save-dev
```

### Install the plugin and adjust the webpack.config.js file

- Run the following command:

```
npm install --save-dev html-webpack-plugin
```

### In order to import a CSS file add the style-loader and css-loader to your module configuration

- Run the following command:

```
npm install --save-dev style-loader css-loader
```

### webpack-dev-server

- Run the following command:

```
npm install --save-dev webpack-dev-server
```

### Webhint installation.

- Run the following command:

```
npm install --save-dev hint@7.x
```

### Stylelint installation.

- Run the following command:

```
npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
```

### ESLint

- Run

```
npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
```

### Usage

You can use this project by cloning it to your folder and changing index.html and styles.css files.

### Run tests

To run tests, run the following commands:

To track linter errors locally follow these steps:

Download all the dependencies run:

```
npm install
```

Track HTML linter errors run:

```
npx hint .
```

Track CSS linter errors run:

```
npx stylelint "**/*.{css,scss}"
```

Track JavaScript linter errors run:

```
npx eslint .
```

### Deployment

You can redeploy this project by adding new lines of code to source files.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

### 👤 Habtamu Alemayehu

- GitHub: [Benawi](https://github.com/Benawi)

### 👤 ANTHONY OBI

- GitHub: [Megagig](https://github.com/Megagig)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- User Based Authentication for commet and like

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

Give us ⭐️ If you like this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- We would like to thank Microverse program for providing us this great chance.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
