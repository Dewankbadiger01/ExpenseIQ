import { useEffect, useState } from "react";

const Budgets = () => {
  const[budget,setBudget]=useState("")
const [expenses, setExpenses] = useState([]);
  useEffect(()=>{
    const savedBudget=localStorage.getItem("budget")
    const savedExpense=localStorage.getItem("expenses")
    if(savedBudget){
      setBudget(savedBudget)
    }
    if(savedExpense){
      setExpenses(JSON.parse(savedExpense))
    }
  },[])
  const handleSavedBudget=()=>{
    localStorage.setItem("budget",budget)
    alert("Budget is Saved sucessfully")
  }
 const totalExpenses = expenses
    .filter((expense) => expense.type === "expense")
    .reduce((sum, expense) => sum + expense.amount, 0);

  const remainingBudget = Number(budget) - totalExpenses;
  const percentageUsed =
  budget > 0
    ? Math.min((totalExpenses / budget) * 100, 100)
    : 0;
    return (
    <div className="p-8">
   <h1 className="text-3xl font-bold mb-2">
        Budget Planner
      </h1>
      <p className="text-gray-600 mb-6">Track your Spending Against Your Budget</p>
      <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
        <div>
          <label className="font-medium block mb-2">
Monthly Budget
          </label>
          <div className="flex gap-4">
            <input value={budget}
            onChange={(e)=>setBudget(e.target.value)}
            className="border rounded-lg p-3 flex-1 outline-none"
            type="number"placeholder="Enter your Budget"/>
            <button onClick={handleSavedBudget}
             className="bg-emerald-600 text-white p-6 rounded-lg hover:bg-emerald-700 "
            >Save</button>
          </div>
        </div>
          <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-100 rounded-xl p-4">
            <p className="text-gray-500">
              Budget
            </p>

            <h2 className="text-2xl font-bold">
              ₹{budget || 0}
            </h2>
          </div>

          <div className="bg-gray-100 rounded-xl p-4">
            <p className="text-gray-500">
              Spent
            </p>

            <h2 className="text-2xl font-bold text-red-600">
₹{totalExpenses.toLocaleString()}            </h2>
          </div>

          <div className="bg-gray-100 rounded-xl p-4">
            <p className="text-gray-500">
              Remaining
            </p>

            <h2
              className={`text-2xl font-bold ${
                remainingBudget < 0
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
₹{remainingBudget.toLocaleString()}
            </h2>
          </div>
        </div>

        {remainingBudget < 0 && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg">
            ⚠️ You have exceeded your budget!
          </div>
          
        )}
        <div>
  <div className="flex justify-between mb-2">
    <span>Budget Usage</span>
    <span>{percentageUsed.toFixed(0)}%</span>
  </div>

  <div className="w-full bg-gray-200 rounded-full h-4">
    <div
      className={`h-4 rounded-full ${
        percentageUsed > 80
          ? "bg-red-500"
          : "bg-emerald-500"
      }`}
      style={{ width: `${percentageUsed}%` }}
    />
  </div>
</div>
      </div>
      
      </div>
          
  );
};

export default Budgets;