# Exercise Tracker Microservice

#### Project Structure

```
Project
├── client
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   └── manifest.json
│   ├── README.md
│   └── src
│       ├── App.js
│       ├── components
│       │   ├── CreateExercise.js
│       │   ├── CreateUser.js
│       │   ├── EditExercise.js
│       │   ├── ExercisesList.js
│       │   ├── Footer.js
│       │   ├── NavBar.js
│       │   └── toggle.js
│       ├── index.js
│       └── logo.png
├── package.json
├── package-lock.json
├── Procfile
├── README.md
├── server.js
└── src
    ├── models
    │   ├── exerciseModel.js
    │   └── userModel.js
    └── routes
        ├── exercises.js
        ├── index.js
        └── users.js

```

## Disclosure

The technologies used for this project

- Frontend
  - **React js**
- Backend
  - **Node js**
  - **Express js**
  - **Mongodb Atlas**
- Style
  - **Bulma css**

I would like to acknowledge, this project is totally based on **@beaucarnes** tutorial. Below is the link to video tutorial and to the articles.

- Video Tutorial: https://www.youtube.com/watch?v=7CqJlxBYj-M

- Article Tutorial: https://medium.com/@beaucarnes/learn-the-mern-stack-by-building-an-exercise-tracker-mern-tutorial-59c13c1237a1

## API Project - Exercise Tracker REST API

### User Stories

- I can create a user by posting form data username

- I can get an array of all users by getting

- I can add an exercise to any user by posting form data username, description, duration, and optionally date to /api/exercise/add. If no date supplied it will use current date. Returned will the the user object with also with the exercise fields added.
- I can retrieve a full exercise log of any user by getting /api/exercise/log with a parameter of username.
- I can retrieve part of the log of any user by also passing along optional parameters of from & to or limit. (Date format dd-mm-yyyy, limit = int)

## Author

- [avatarfreak](https://github.com/avatarfreak "avatarfreak")
