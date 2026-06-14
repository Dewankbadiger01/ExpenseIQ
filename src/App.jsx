import { Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import Expense from "./Pages/Expense";
import Analytics from "./Pages/Analytics";
import Budget from "./Pages/Budget";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/expenses" element={<Expense />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/budgets" element={<Budget />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;