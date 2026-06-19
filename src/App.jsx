import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";

import Dashboard from "./Pages/Dashboard";
import Expense from "./Pages/Expense";
import Analytics from "./Pages/Analytics";
import Budget from "./Pages/Budget";
import Profile from "./Pages/Profile";

import ProtectedRoute from "./routes/ProtectedRoute";
import MainLayout from "./component/Layout/MainLayout";
import Landing from "./Pages/Landing";
function App() {
  return (
    <Routes>
      {/* Redirect root */}
      

      {/* Public Routes */}
      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/expenses" element={<Expense />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/budgets" element={<Budget />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;