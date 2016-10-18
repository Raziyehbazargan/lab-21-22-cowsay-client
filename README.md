
# To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

# Build Tool Instructions
* include an .eslintrc and .eslintignore
* include a .gitignore
 * **ignore the build directory**
* include a package.json
 * create a `watch` npm script for running `webpack-dev-server --inline --hot`
 * create a `lint` npm script to lint your javscript code using eslint
* include a webpack.config.js
 * must output budndle.js and index.html into a **build** dir
 * must have a sass loader config

# Requirements 
* Create these directories to organize your code: 
 * app/html
 * app/scss
* create a **app/scss/base.scss** file 
 * write some styles that use the color variables
* create a**app/index.html** 
  * make sure to have the `ng-app` atribute pointing to your default angular module
* create a **app/entry.js**
 * require your **app/scss/base.scss**
 * setup angular and create a controller that uses `$log` and `$scope` for adding cowsay logic

# Client Functionality
* in your index.html include an input and a pre tag
 * the pre tag should be a preview, showing the result of `cowsay.say` with two way data-binding to the input
 * feel free to add any features or styling you want

# Bonus
* **1pt** add a button that uses the ng-click directive to populate a second pretag with the current pretag state
* **1pt** add a third button that uses the `ng-click` directive
 * whenever this button is clicked it should reset the second pretag with the content it last showed
* **1pt** add a select menu that uses the `ng-repeat` directive (read the docs)
 * use the `ng-repeat` to populate the select menu with the names of all cowsay files 
 * *hint:* `cowsay.list(list => {})`
 * when a cowsay filename is selected from the menu, have the first pre tag use that cowfile


> Advanced Software Development  

[![](https://img.shields.io/badge/YouTube-401d10-red.svg)](https://www.youtube.com/playlist?list=PLVngfM2hsbi86RFbvl4BPeaEu69IuaxGD)
[![](https://img.shields.io/badge/canvas-401d10-blue.svg)](https://canvas.instructure.com/courses/1046705/modules)
[![](https://img.shields.io/badge/Labs-401d10-yellow.svg)](https://github.com/codefellows-seattle-javascript-401d10)
[![](https://img.shields.io/badge/slack-401d10-orange.svg)](https://codefellows.slack.com/messages/sea-javascript-401d10/)

# Welcome

Welcome to Code 401 Javascript! This is a class that builds on your fundamental Javascript programming knowledge to make you a proficient full-stack Javascript developer, and to prepare you for getting a job in today's Javascript job market!

# Introduction 
In this class we are going to cover a lot of advanced web development topics. The first 10 weeks of this course will be dedicated to learning back-end development using **Node.js**. In this section of the course you will learn to create authenticated RESTful APIs with persistent storage. In the second 10 weeks of this course we will be focusing on learing advanced front-end development. In this section of the course you will learn to create client side web apps using **AngularJS**, that interact with RESTful APIs to authenticate users and persist data.

# Course Layout
This course is organized into 38 lecture/lab units that have been spread across 20 weeks. Each week will have either 2 or 3 lecture/lab units. The class schedule is Monday-Thursday 6:30pm-9:30pm, and Sundays from 9am-5pm. Coworking time is scheduled to be Monday and Wednesday nights from 6:30pm-9:30pm on all weeks with 2 lecture/lab units.

# Lecture Code
Each day of class there will be a new directory created named after the class number, and the topics covered that day, _e.g._ `class-02-modular-patterns`.  After each lecture the code demos from lecture will be placed in a lecture directory, in the `class-number-topic` directory. Other resources from the days lecture will be added into appropriately named directorys in the `class-number-topic` directory.

# Assignments
All readings, homework, labs, and quizzes will be published on the class canavs the day they are assigned. All coding assignment instructions and materials will be organized into git repositories on the courses GitHub organization
