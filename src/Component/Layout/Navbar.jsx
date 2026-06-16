// Navbar.jsx
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-emerald-600">
        ExpenseIQ
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-gray-600">
          Hello, {user?.name || "User"} 👋
        </span>

        <button
          onClick={() => navigate("/profile")}
          className="text-emerald-600 hover:underline"
        >
          Profile
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;