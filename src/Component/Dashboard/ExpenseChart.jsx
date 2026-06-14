import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ExpenseChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Income",
        data: [50000, 60000, 55000, 70000, 65000, 75000],
        backgroundColor: "#10B981",
      },
      {
        label: "Expenses",
        data: [30000, 35000, 32000, 40000, 38000, 45000],
        backgroundColor: "#EF4444",
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4">
        Income vs Expenses
      </h2>

      <Bar data={data} />
    </div>
  );
};

export default ExpenseChart;