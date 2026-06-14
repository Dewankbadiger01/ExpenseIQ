import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";

import Dashboard from "./Pages/Dashboard";
import Expense from "./Pages/Expense";
import Analytics from "./Pages/Analytics";
import Budget from "./Pages/Budget";
import Profile from "./Pages/Profile";

import MainLayout from "./Component/Layout/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/expenses" element={<Expense />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/budgets" element={<Budget />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
