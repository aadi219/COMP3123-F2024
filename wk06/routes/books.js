const express = require("express");
const BookModel = require("../models/books");
const routes = express.Router();

//Get All Books
routes.get("/books", (req, res) => {
  const books = BookModel.find({})
    .then((books) => {
      return res.status(200).json(books);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});

//Add NEW Book
routes.post("/books", async (req, res) => {
  const bookData = req.body;
  const newBook = BookModel(bookData);
  await newBook.save();
  res.send({ message: "Added NEW Book", id: newBook._id });
});

//Update existing Book By Id
routes.put("/book/:bookid", async (req, res) => {
  try {
    const book = await BookModel.findByIdAndUpdate(
      req.params.bookid,
      req.body,
      { new: true },
    );
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ status: "failed" });
  }
});

//Delete Book By ID
routes.delete("/book/:bookid", async (req, res) => {
  try {
    await BookModel.findByIdAndDelete(req.params.bookid);
    res.status(204).json({});
  } catch (err) {
    res.status(500).json({ status: "failed" });
  }
});

//Get Book By ID
routes.get("/book/:bookid", async (req, res) => {
  try {
    const book = await BookModel.findById(req.params.bookid);
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ status: "failed" });
  }
});

//Get All Books in sorted order
routes.get("/books/sort", async (req, res) => {
  try {
    const books = await BookModel.find({}).sort("price");
    res.status(200).json(books);
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "failed" });
  }
});

module.exports = routes;
