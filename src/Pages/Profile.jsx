import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({});
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedExpenses = localStorage.getItem("expenses");
    const savedBudget = localStorage.getItem("budget");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }

    if (savedBudget) {
      setBudget(Number(savedBudget));
    }
  }, []);

  const totalExpenses = expenses
    .filter((expense) => expense.type === "expense")
    .reduce(
      (sum, expense) => sum + expense.amount,
      0
    );

  const remainingBudget =
    budget - totalExpenses;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">
        Profile
      </h1>

      <p className="text-gray-600 mb-6">
        Manage your account information.
      </p>

      {/* User Information */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          User Information
        </h2>

        <div className="space-y-3">
          <p>
            <span className="font-medium">
              Name:
            </span>{" "}
            {user.name || "Guest User"}
          </p>

          <p>
            <span className="font-medium">
              Email:
            </span>{" "}
            {user.email ||
              "No email available"}
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <p className="text-gray-500">
            Total Transactions
          </p>

          <h2 className="text-3xl font-bold">
            {expenses.length}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <p className="text-gray-500">
            Monthly Budget
          </p>

          <h2 className="text-3xl font-bold">
            ₹{budget}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <p className="text-gray-500">
            Remaining Budget
          </p>

          <h2
            className={`text-3xl font-bold ${
              remainingBudget < 0
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            ₹{remainingBudget}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;