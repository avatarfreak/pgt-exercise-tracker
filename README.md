# Exercise Tracker Microservice

#### Project Structure

```
Project
|
└───backend
|   └───src
|       └───models
|           └───exerciseModels.js
|           └───userModel.js
|
|       └───routes
|           └───exercise.js
|           └───users.js
|
└───client
|   └───dist
|   └───public
|       └───index.html
│   └───src
│       └───components
│            └───CreateExercise.js
|            └───CreateUser.js
|            └───EditExercise.js
|            └───Footer.js
|            └───NavBar.js
|            └───toggle.js
|
│       └───App.js
│       └───index.js
│
└───README.md
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

This project is built from scratch and powered by webpack4 and babel for modern js.

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
