import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
 const menuItems = [
  { name: "Dashboard", path: "/" },
  { name: "Expenses", path: "/expenses" },
  { name: "Analytics", path: "/analytics" },
  { name: "Budgets", path: "/budgets" },
  { name: "Profile", path: "/profile" },
];

  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg p-6">
      
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-emerald-600">
          Expense<span className="text-black">IQ</span>
        </h1>
      </div>

      
    <nav>
  {menuItems.map((item) => (
    <div key={item.name} className="mb-3">
      <NavLink
        to={item.path}
        className="block px-4 py-3 rounded-lg hover:bg-zinc-500"
      >
        {item.name}
      </NavLink>
    </div>
  ))}
</nav>

      {/* Logout */}
      <button className="mt-9 w-full  active:scale-95 rounded-xl bg-red-400 py-3 text-white font-medium hover:bg-red-400 transition">
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;