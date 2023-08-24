//Dependencies
const express = require("express");
const app = express();
const path = require("path");
const { Sequelize, json } = require("sequelize");
const cors = require("cors");

//configurations/middlewares
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Controllers
const booksController = require("./controllers/book_controller");
app.use("/api/books", booksController);

//Run the server
app.listen(4005, () => {
  console.log("App listening to port 4005");
});
