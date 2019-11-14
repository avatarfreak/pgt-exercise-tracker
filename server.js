"user strict";
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

require("dotenv").config();

app.use(cors());
app.options("*", cors());
app.use(express.json());

// env variables
const URI = process.env.MONGO_URI;
mongoose.connect(URI, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () =>
  console.log("Database connection established succesfully")
);

//Set static folder
app.use(express.static(path.join(__dirname, "frontend", "dist")));
//Routes api
const routes = require("./src/routes/index");
app.use(routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
