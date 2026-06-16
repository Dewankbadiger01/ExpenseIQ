import ExpenseForm from "../Component/Expense/ExpenseForm";
import { useEffect, useState } from "react";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [sortOption, setSortOption] = useState("newest");
const [searchTerm, setSearchTerm] = useState("");
const [selectedCategory, setSelectedCategory] = useState("All");
const [selectedType, setSelectedType] = useState("All");
  useEffect(()=>{
    const savedExpenses = localStorage.getItem("expenses");
    if(savedExpenses){
      setExpenses(JSON.parse(savedExpenses))
    }
  },[])
  const filteredExpenses = expenses.filter((expense) => {
  const matchesSearch = expense.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    expense.category === selectedCategory;

  const matchesType =
    selectedType === "All" ||
    expense.type === selectedType;

  return matchesSearch && matchesCategory && matchesType;
})
.sort((a,b)=>{
switch(sortOption){
case "highest":
        return b.amount - a.amount;

      case "lowest":
        return a.amount - b.amount;

      case "oldest":
        return a.id - b.id;

      default: 
        return b.id - a.id;
}
})
const handleAddExpense = (newExpense) => {
  const updatedExpenses = [
    newExpense,
    ...expenses,
  ];

  setExpenses(updatedExpenses);

  localStorage.setItem(
    "expenses",
    JSON.stringify(updatedExpenses)
  );
};
const handleDelete = (id) => {
  const updatedExpenses = expenses.filter(
    (expense) => expense.id !== id
  );

  setExpenses(updatedExpenses);

  localStorage.setItem(
    "expenses",
    JSON.stringify(updatedExpenses)
  );
};
const [editingExpense, setEditingExpense] = useState(null);

const handleEdit = (expense) => {
  setEditingExpense(expense);
};
const handleUpdateExpense = (updatedExpense) => {
  const updatedExpenses = expenses.map((expense) =>
    expense.id === updatedExpense.id
      ? updatedExpense
      : expense
  );
const handleSubmit = (e) => {
  e.preventDefault();

  if (editingExpense) {
    onUpdateExpense({
      ...editingExpense,
      title,
      amount: Number(amount),
      category,
      type,
    });
  } else {
    onAddExpense({
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
      type,
      date: new Date().toLocaleDateString(),
    });
  }

  setTitle("");
  setAmount("");
  setCategory("Food");
  setType("expense");
};
  setExpenses(updatedExpenses);

  localStorage.setItem(
    "expenses",
    JSON.stringify(updatedExpenses)
  );

  setEditingExpense(null);
};

  return (
    <div className="p-8">
 <h1 className="text-3xl font-bold mb-2">
        Expenses
      </h1>    
      <p className="text-gray-600 mb-6">Manage the Recent Transaction</p>
<div className="mb-6 flex flex-col md:flex-row gap-4">
  <input
    type="text"
    placeholder="Search transactions..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full md:w-96 border rounded-lg p-3 outline-none"
  />

   <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    className="border rounded-lg p-3 outline-none"
  >
    <option value="All">All Categories</option>
    <option value="Food">Food</option>
    <option value="Transport">Transport</option>
    <option value="Shopping">Shopping</option>
    <option value="Bills">Bills</option>
    <option value="Entertainment">Entertainment</option>
  </select>

  <select
    value={selectedType}
    onChange={(e) => setSelectedType(e.target.value)}
    className="border rounded-lg p-3 outline-none"
  >
    <option value="All">All Types</option>
    <option value="expense">Expense</option>
    <option value="income">Income</option>
  </select>
<select
value={sortOption}
onChange={(e)=>setSortOption(e.target.value)}
className="border rounded-1g p-3 outline-none">
  <option value="newest">
    Newest First
  </option>

  <option value="oldest">
    Oldest First
  </option>

  <option value="highest">
    Highest Amount
  </option>

  <option value="lowest">
    Lowest Amount
  </option>
</select>
</div>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
<div className="overflow-x-auto">
  <table className="w-full">  <thead className="bg-gray-100">
  <tr>
    <th className="text-left p-4">Title</th>
    <th className="text-left p-4">Category</th>
    <th className="text-left p-4">Type</th>
    <th className="text-left p-4">Date</th>
    <th className="text-left p-4">Amount</th>
    <th className="text-left p-4">Actions</th>
  </tr>
</thead>
    <tbody>
            {filteredExpenses.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-6 text-gray-500"
                >
                  No transactions found.
                </td>
              </tr>
            ) : (
              filteredExpenses.map((expense) => (
                <tr
                  key={expense.id}
                  className="border-b"
                >
                  <td className="p-4">
                    {expense.title}
                  </td>

                  <td className="p-4">
                    {expense.category}
                  </td>

                  <td className="p-4 capitalize">
                    {expense.type}
                  </td>

                  <td className="p-4">
                    {expense.date}
                  </td>

                  <td
                    className={`p-4 font-semibold ${
                      expense.type === "income"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    ₹{expense.amount}
                  </td>
                 <td className="p-4">
  <div className="flex gap-2">
    <button
      onClick={() => handleEdit(expense)}
      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
    >
      Edit
    </button>

    <button
     onClick={() => {
  if (window.confirm("Delete this transaction?")) {
    handleDelete(expense.id);
  }
}}
      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
    >
      Delete
    </button>
    
  </div>
  <button type="submit">
  {editingExpense ? "Update Expense" : "Add Expense"}
</button>
</td>
                </tr>
              ))
            )}
          </tbody>
</table>
</div>
<ExpenseForm
  editingExpense={editingExpense}
  onUpdateExpense={handleUpdateExpense}
  onAddExpense={handleAddExpense}
/>
      </div>
      
      </div>
  );
}

export default Expenses;
