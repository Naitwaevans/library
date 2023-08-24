const books = require("express").Router();
const db = require("../models");
const { Book } = db;

//GET ALL BOOKS ROUTES
books.get("/", async (req, res) => {
  try {
    const foundBooks = await Book.findAll();
    res.status(200).json(foundBooks);
  } catch (err) {
    res.status(500).send("server error");
    console.log(err);
  }
});
module.exports = books;
