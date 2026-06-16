import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);
const Analytics = () => {
  const [expenses, setExpenses] = useState([]);
  

  useEffect(() => {
    const savedExpenses = localStorage.getItem("expenses");

    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);
  const categoryTotals = {};

expenses
  .filter((expense) => expense.type === "expense")
  .forEach((expense) => {
    categoryTotals[expense.category] =
      (categoryTotals[expense.category] || 0) +
      expense.amount;
  });
const pieData = {
  labels: Object.keys(categoryTotals),

  datasets: [
    {
      data: Object.values(categoryTotals),

      backgroundColor: [
        "#10B981",
        "#3B82F6",
        "#F59E0B",
        "#EF4444",
        "#8B5CF6",
      ],
    },
  ],
};
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">
        Analytics
      </h1>

      <p className="text-gray-600 mb-8">
        View insights into your spending habits.
      </p>

     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  <div className="bg-white rounded-2xl shadow-md p-8">
    <h2 className="text-xl font-semibold mb-6">
      Total Transactions
    </h2>

    <p className="text-4xl font-bold text-emerald-600">
      {expenses.length}
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-md p-8">
    <h2 className="text-xl font-semibold mb-6">
      Expenses by Category
    </h2>

    {Object.keys(categoryTotals).length > 0 ? (
      <div className="max-w-sm mx-auto">
        <Pie data={pieData} />
      </div>
    ) : (
      <p className="text-gray-500">
        No expense data available.
      </p>
    )}
  </div>
</div>
    </div>
  );
};

export default Analytics;