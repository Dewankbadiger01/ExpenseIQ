import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate();
const onSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        email,
        password,
      }
    );

    console.log("Login Response:", response.data);

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    localStorage.setItem("isAuthenticated", "true");

    navigate("/dashboard");
  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.message || "Invalid email or password"
    );
  }

  setEmail("");
  setPassword("");
};
  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-gray-200 border border-gray-200 rounded-2xl p-10 w-full max-w-sm shadow-sm">
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center gap-5"
        >
          <h1 className="text-center text-xl font-medium text-gray-900 mb-1">Welcome back</h1>
        <p className="text-center text-sm text-gray-500 mb-8">Sign in to your account</p>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none text-xl border-2 border-emerald-600 rounded-full py-3 px-4 placeholder:text-gray-500"
          />

          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none text-xl border-2 border-emerald-600 rounded-full py-3 px-4 placeholder:text-gray-500"
          />

          <button
            type="submit"
            className="w-full bg-black text-white text-xl border-2 border-emerald-600 rounded-full py-3 px-5 hover:bg-gray-800 transition"
          >
            Log In
          </button>
          <p className="text-center text-sm"> Don't have an account?{" "} <button type="button" onClick={() => navigate("/register")} className="text-emerald-600 hover:underline" > Register </button> </p>
        </form>
      </div>
    </div>
  );
};

export default Login;