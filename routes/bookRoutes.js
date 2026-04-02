const express = require("express");
const router = express.Router();
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  borrowBook,
  returnBook,
} = require("../controllers/bookController");
const { validateBook } = require("../middleware/validate");

router.post("/", validateBook, createBook);
router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.put("/:id", validateBook, updateBook);
router.delete("/:id", deleteBook);
router.post("/:id/borrow", borrowBook);
router.post("/:id/return", returnBook);

module.exports = router;