const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  addExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenseController");

// CREATE
router.post("/", authMiddleware, addExpense);

// READ
router.get("/", authMiddleware, getExpenses);

// UPDATE
router.put("/:id", authMiddleware, updateExpense);

// DELETE
router.delete("/:id", authMiddleware, deleteExpense);

module.exports = router;