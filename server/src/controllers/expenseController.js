const db = require("../config/db");

// ADD EXPENSE
const addExpense = (req, res) => {
  const { title, amount, type, category, expense_date } = req.body;
  const userId = req.user.id;

  db.query(
    `INSERT INTO expenses (title, amount, type, category, expense_date, user_id)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [title, amount, type, category, expense_date, userId],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.json({
        success: true,
        message: "Expense added successfully",
        id: result.insertId,
      });
    }
  );
};

// GET EXPENSES
const getExpenses = (req, res) => {
  const userId = req.user.id;

  db.query(
    "SELECT * FROM expenses WHERE user_id = ? ORDER BY expense_date DESC",
    [userId],
    (err, results) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.json({
        success: true,
        data: results,
      });
    }
  );
};

// UPDATE EXPENSE
const updateExpense = (req, res) => {
  const { id } = req.params;
  const { title, amount, type, category, expense_date } = req.body;
  const userId = req.user.id;

  db.query(
    `UPDATE expenses
     SET title = ?, amount = ?, type = ?, category = ?, expense_date = ?
     WHERE id = ? AND user_id = ?`,
    [title, amount, type, category, expense_date, id, userId],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.json({
        success: true,
        message: "Expense updated successfully",
      });
    }
  );
};

// DELETE EXPENSE
const deleteExpense = (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  db.query(
    "DELETE FROM expenses WHERE id = ? AND user_id = ?",
    [id, userId],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.json({
        success: true,
        message: "Expense deleted successfully",
      });
    }
  );
};

module.exports = {
  addExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
};