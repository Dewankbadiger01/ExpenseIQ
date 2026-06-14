import React from "react";

const SummaryCard = ({ title, amount }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-gray-500 text-sm font-medium">
        {title}
      </h3>

      <p className="mt-3 text-3xl font-bold text-gray-800">
        ₹{amount.toLocaleString()}
      </p>
    </div>
  );
};

export default SummaryCard;