import { Link } from "react-router-dom";

const LandingNavbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-sm">
      <h1 className="text-3xl font-bold text-emerald-600">
        Expense<span className="text-black">IQ</span>
      </h1>

      <div className="space-x-4">
        <Link
          to="/login"
          className="px-5 py-2 rounded-lg text-gray-700 hover:text-emerald-600"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-700"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavbar;