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
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-gray-100 px-4">     
<div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">
          <form
          onSubmit={onSubmit}
          className="flex flex-col items-center gap-5"
        >
          <h2 className="text-center text-emerald-600 text-3xl font-bold mb-2">
  ExpenseIQ
</h2>
          <h1 className="text-center text-xl font-medium text-gray-900 mb-1">Welcome back</h1>
        <p className="text-center text-sm text-gray-500 mb-8">Sign in to your account</p>
         <input
  type="email"
  placeholder="Email Address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
/>

       <input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
  className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
/>

         <button
  type="submit"
  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition duration-300"
>
  Log In
</button>
<p className="text-center mt-5 text-gray-600">
  Don't have an account?{" "}
  <button
    type="button"
    onClick={() => navigate("/register")}
    className="text-emerald-600 font-semibold hover:underline"
  >
    Register
  </button>
</p>        </form>
      </div>
    </div>
  );
};

export default Login;