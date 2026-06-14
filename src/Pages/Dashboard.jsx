import { useState, useEffect } from "react";
import Sidebar from "../Component/Layout/Sidebar";
import SummaryCard from "../Component/Dashboard/SummaryCard";
import RecentTransactions from "../Component/Dashboard/RecentTransactions";
import ExpenseChart from "../Component/Dashboard/ExpenseChart";
import ExpenseForm from "../Component/Expense/ExpenseForm";
const Dashboard = () => {
const [expenses, setExpenses] = useState(() => {
  const savedExpenses = localStorage.getItem("expenses");
  return savedExpenses ? JSON.parse(savedExpenses) : [];
});
  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };
const totalIncome = expenses
  .filter((expense) => expense.type === "income")
  .reduce((sum, expense) => sum + expense.amount, 0);

const totalExpenses = expenses
  .filter((expense) => expense.type === "expense")
  .reduce((sum, expense) => sum + expense.amount, 0);

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
const handleDeleteExpense = (id) => {
  setExpenses((prevExpenses) =>
    prevExpenses.filter((expense) => expense.id !== id)
  );
};
useEffect(() => {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}, [expenses]);
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold">
          Welcome back 👋
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
/>       
<div className="mt-8">
  <ExpenseChart />
</div>
   <div className="mt-8">
<ExpenseForm onAddExpense={handleAddExpense} /></div>
      </main>
    </div>
  );
};

export default Dashboard;