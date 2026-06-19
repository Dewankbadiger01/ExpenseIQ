import React from "react";
const RecentTransactions = ({ expenses, onDelete, oneEdit }) => {   return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-bold mb-4">
        Recent Transactions
      </h2>

      {expenses.length === 0 ? (
        <p className="text-gray-500">
          No transactions yet.
        </p>
      ) : (
        <table className="w-full">
        <thead>
  <tr>
    <th className="text-left py-2">Title</th>
    <th className="text-left py-2">Category</th>
    <th className="text-left py-2">Date</th>
    <th className="text-left py-2">Amount</th>
    <th className="text-left py-2">Actions</th>
  </tr>
</thead>

          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="border-b">
                <td className="py-4">{expense.title}</td>
      <td className="py-4">
        {expense.category}
      </td>

      <td className="py-4">
        {expense.date}
      </td>

      <td className="py-4">
        ₹{expense.amount}
      </td>

      <td className="py-4">
       <div className="flex gap-2">
  <button
  onClick={() => onEdit(expense)}
  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
>
  Edit
</button>

  <button
    onClick={() => onDelete(expense.id)}
    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
  >
    Delete
  </button>
</div>
      </td>
    </tr>

                
))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RecentTransactions;