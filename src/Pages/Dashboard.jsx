import { useState, useEffect } from "react";
import SummaryCard from "../Component/Dashboard/SummaryCard";
import RecentTransactions from "../Component/Dashboard/RecentTransactions";
import ExpenseChart from "../Component/Dashboard/ExpenseChart";
import ExpenseForm from "../Component/Expense/ExpenseForm";
import axios from "axios";
const Dashboard = () => {
const [expenses, setExpenses] = useState([]);
  const handleAddExpense = () => {
  fetchExpenses();
};
const totalIncome = expenses.filter((expense) => expense.type === "income").reduce((sum, expense) => sum + expense.amount, 0);
const totalExpenses = expenses.filter((expense) => expense.type === "expense") .reduce((sum, expense) => sum + expense.amount, 0);
const totalBalance = totalIncome - totalExpenses;
const totalSavings = totalBalance;
const stats = [
  {
    title: "Total Balance",
    amount: totalBalance,
  },
  {
    title: "Total Income",
    amount: totalIncome,
  },
  {
    title: "Total Expenses",
    amount: totalExpenses,
  },
  {
    title: "Total Savings",
    amount: totalSavings,
  },
];
const handleDeleteExpense = async (id) => {
  try {
    const token = localStorage.getItem("token");

    await axios.delete(
      `http://localhost:5000/api/expenses/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchExpenses();
  } catch (error) {
    console.error(error);
  }
};
  const [editingExpense, setEditingExpense] = useState(null);

const handleEditExpense = () => {
  fetchExpenses();
  setEditingExpense(null);
};
useEffect(() => {
  fetchExpenses();
}, []);

const fetchExpenses = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      "http://localhost:5000/api/expenses",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

setExpenses(response.data.data || []);  } catch (error) {
    console.error(error);
  }
};
const user = JSON.parse(localStorage.getItem("user"));
const income = expenses
  .filter((e) => e.type === "income")
  .reduce((sum, e) => sum + Number(e.amount), 0);

const expense = expenses
  .filter((e) => e.type === "expense")
  .reduce((sum, e) => sum + Number(e.amount), 0);
  const pieData = [
  { name: "Income", value: income },
  { name: "Expenses", value: expense },
];
  return (
    <div className="flex min-h-screen bg-gray-100">

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold">
          Welcome back {user?.name}
        </h1>

        <p className="mt-2 text-gray-500">
          Here's an overview of your finances.
        </p>

    
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          {stats.map((stat) => (
            <SummaryCard
              key={stat.title}
              title={stat.title}
              amount={stat.amount}
            />
          ))}
        </div>
<RecentTransactions
  expenses={expenses}
  onDelete={handleDeleteExpense}
  onEdit={setEditingExpense}
/>       
<div className="mt-8">
  <ExpenseChart data={pieData} />
</div>
   <div className="mt-8">
<ExpenseForm
  onAddExpense={handleAddExpense}
  editingExpense={editingExpense}
  onUpdateExpense={handleEditExpense}
/></div>
      </main>
    </div>
  );
};

export default Dashboard;