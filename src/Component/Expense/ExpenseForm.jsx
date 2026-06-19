import { useState, useEffect } from "react";
import axios from "axios";

const ExpenseForm = ({
  onAddExpense,
  editingExpense,
  onUpdateExpense,
}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [type, setType] = useState("expense");

  useEffect(() => {
    if (editingExpense) {
      setTitle(editingExpense.title);
      setAmount(editingExpense.amount);
      setCategory(editingExpense.category);
      setType(editingExpense.type);
    }
  }, [editingExpense]);
const handleSubmit = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem("token");

  try {
    if (editingExpense) {
      const response = await axios.put(
        `http://localhost:5000/api/expenses/${editingExpense.id}`,
        {
          title,
          amount: Number(amount),
          category,
          type,
          expense_date: new Date().toISOString().split("T")[0],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      onUpdateExpense({
        ...editingExpense,
        title,
        amount: Number(amount),
        category,
        type,
      });
    } else {
      const response = await axios.post(
        "http://localhost:5000/api/expenses",
        {
          title,
          amount: Number(amount),
          category,
          type,
          expense_date: new Date().toISOString().split("T")[0],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

      onAddExpense({
        id: response.data.expenseId,
        title,
        amount: Number(amount),
        category,
        type,
        expense_date: new Date().toISOString().split("T")[0],
      });
    }

    setTitle("");
    setAmount("");
    setCategory("Food");
    setType("expense");
  } catch (error) {
    console.error(error);
    alert(error.response?.data?.message || "Something went wrong");
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-md p-6 mt-8"
    >
      <h2 className="text-xl font-bold mb-4">
        {editingExpense ? "Edit Transaction" : "Add Transaction"}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border rounded-lg p-3 outline-none"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="border rounded-lg p-3 outline-none"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg p-3 outline-none"
        >
          <option>Food</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Entertainment</option>
        </select>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border rounded-lg p-3 outline-none"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-4 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700"
      >
        {editingExpense ? "Update Expense" : "Add Expense"}
      </button>
    </form>
  );
};

export default ExpenseForm;