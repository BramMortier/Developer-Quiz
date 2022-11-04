# Welcome to my Quiz App

![](./design/Startscreen%402x.png)

## Technologies used in this project:

-   HTML & SCSS
-   Javascript
-   Webpack
-   Npm package manager
-   Gsap animtaion library (https://greensock.com/gsap/)
-   Quiz API (https://quizapi.io/)

## About the project

When building this app I wanted to work on my JS abilities. So I put a lot of thought into how I was going to structure the project and made sure it was easy to build onto in the future. I learned how to use sessionStorage and localStorage to store leaderboard scores and and manage the selected answers.

## Features

### Settings

Before you start a quiz you can visit the settings page to tweak everything to your linking. When you press apply the settings will be tested because not every setting combination has matching questions.

### Quiz

Once you press start you are met with the first question. Your are free to navigate through all the questions and change your answer if needed. Once you are happy with your answers you can submit the quiz.

### Results

After you submit a quiz you can view all the details about it. For example correct answers, total questions, difficulty, topics... There will also be a points score which is calculated based on the settings you selected.

### Answer Comparison

Got some questions wrong? Compare your answer for every question and learn from your mistakes.

### leaderboard

If you are happy with your points score you can save it to the leaderboard and compare how you did vs other quizheads.

## How do you run the project?

first step is to install the node_modules with

> $ npm install

to quickly build to project run

> $ npm run build

if you want the optimized build for production run

> $ npm run build-production
