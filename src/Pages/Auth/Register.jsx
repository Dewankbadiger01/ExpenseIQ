import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/register",
      {
        name,
        email,
        password,
      }
    );

    alert(response.data.message || "Registration successful!");

    navigate("/login");

    setName("");
    setEmail("");
    setPassword("");
  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.message ||
      "Registration failed"
    );
  }
};

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-gray-100 px-4">
    <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl hover:shadow-2xl transition duration-300">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <h2 className="text-center text-emerald-600 text-3xl font-bold">
          ExpenseIQ
        </h2>

        <h1 className="text-center text-2xl font-bold text-gray-800">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-4">
          Register to start managing your expenses
        </p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Register
        </button>

        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-emerald-600 font-semibold hover:underline"
          >
            Login
          </button>
        </p>

      </form>
    </div>
  </div>
);
};

export default Register;