<!-- HTTP REQUESTS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->


<!-- PROJECT'S TITLE -->
<a name="readme-top"></a>
<h1 align="center">
  <a href="#"> HTTP REQUESTS </a>
</h1>


<!-- PROJECT'S STATUS -->
<h4 align="center"> 
  Status: Finished
</h4>


<!-- TABLE OF CONTENTS DETAIL -->
<p align="center">
  <a href="#about-the-project">About</a> •
  <a href="#features">💻 Features</a> •
  <a href="#prerequisites">Prerequisites</a> •
  <a href="#requirements">Requirements</a> •
  <a href="#starting">Starting</a> •
  <a href="#license">:memo: License</a> •
  <a href="#contact">:mailbox_with_mail: Contact</a> •
  <a href="#acknowledgments">Acknowledgments</a>  
</p>


<!-- TABLE OF CONTENTS DETAIL -->
<details>
  <summary>Table of Contents Detail</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">:rocket: Built With</a></li>
      </ul>
    </li>
    <li><a href="#features">💻 Features</a></li>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#requirements">Requirements</a></li>
    <li>
      <a href="#starting">Getting Started</a>
      <ul>
        <li><a href="#install">🛠️ Installation Steps</a></li>
        <li><a href="#running">:zap: Running...</a></li>
	<li><a href="#usage">Usage</a></li>
      </ul>
    </li>
    <li><a href="#license">:memo: License</a></li>
    <li><a href="#contact">:mailbox_with_mail: Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



## About The Project

In this project we will have a first contact with Node.Js and Express.JS, create a simple project structure, configure nodemon to restart automatically the server if there are any changes in the code and make some requests with main http verbs.

<a name="built-with"></a>
### :rocket: Built With
This project was developed with the following technology:

[![Javascript][js-shield]][js-url]
[![Node-JS][node-shield]][node-url]
[![Express-JS][express-shield]][express-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<a name="features"></a>
## 💻 Features

Create a simple application with `yarn` using the `express` framework, add the `src/` folder for the `javascript` files, set up `nodemon` for easy restart when there are any changes and do the `routes` below:

1. Run a route with the `get` method on the root `/` and reply to the message 'Hello World! o/';

2. Routing the `get` method on `/courses` and response a `json` with the `array`: ['Course 1', 'Course 2', 'Course 3'];

3. Routing the `put` method on `/courses` for to receive a `route param` 'id' and the response a `json` with the `array`: ['Course 6', 'Course 2', 'Course 3'];

4. Routing the `patch` method on `/courses` for to receive a `route param` 'id' and the response a `json` with the `array`: ['Course 6', 'Course 7', 'Course 3'];

5. Routing the `delete` method on `/courses` for to receive a `query param` 'id' and the response a `json` with the `array`: ['Course 6', 'Course 7'];

6. Routing the `post` method on `/courses` for to receive a `body param` with 'name' and the response a `json` with the `array`: ['Course 6', 'Course 7', 'Course 8'];

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Prerequisites

For this project you should to have basic konwledgement about: 
- Javascript, Node.JS, Express.JS, Nodemon and Yarn;
- Http verbs, request and response;
- Basic knowledgement about request's parameters;
- Basic knowledgement about midleware (json parse);
- API Client (Postman or Insomnia).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Requirements

For this project you will need:
- NodeJS LTS (18.12.0+);
- Yarn LTS (1.22.19+).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<a name="starting"></a>
## Getting Start

To get a local copy, setting up and running the project, follow these simple steps.

<a name="install"></a>
### 🛠️ Installation Steps
1. Clone the repository
```Bash
git clone https://github.com/sidneyaquino/rocketseat-ignite-node-01-basics-js
```
2. Go into the project directory

3. Install dependencies (packages):
```bash
yarn install
```

<a name="running"></a>
### :zap: Runnig...
In the projet folder execute the commands:
```bash
yarn dev  # nodemon.
```

### Usage
- **Collection**: get/read, get/list, post/create, put/update, patch/update and delete 

Import the `Project Workspace` into your `Postman`, use the following link: [postman-workspace](https://www.postman.com/sidneyaquino/workspace/rocketseat-ignite-node-01-basics-js/overview)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<a name="license"></a>
## :memo: License
This project is under the MIT license. See the file [LICENSE](LICENSE.md) for more details.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<a name="contact"></a>
## :mailbox_with_mail: Contact
Made by *Sidney Aquino*, **get in Touch!** 
[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Acknowledgments
>[Rocketseat Ignite - Node.JS Bootcamp](https://app.rocketseat.com.br/ignite/node-js?&) 

Build scalable and simple architectures for the web with `Node.JS` using `Javascript`, a flexible and popular language. Through a hands-on methodology based on the pillars of focus, practice, and group, you will prepare for real-world challenges and develop the behavioral skills to excel in the marketplace.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[js-shield]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[js-url]: https://en.wikipedia.org/wiki/ECMAScript#13th_Edition_%E2%80%93_ECMAScript_2022
[node-shield]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[node-url]: https://nodejs.org
[express-shield]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[express-url]: http://expressjs.com/
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://de.linkedin.com/in/sidneydeaquino