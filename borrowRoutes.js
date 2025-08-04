const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { borrowBook, returnBook } = require("../controllers/borrowController");

router.post("/borrow/:bookId", auth, borrowBook);
router.post("/return/:bookId", auth, returnBook);

module.exports = router;