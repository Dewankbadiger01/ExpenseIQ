import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate();
  const onSubmit = (e) => {
  e.preventDefault();

  console.log("Email:", email);
  console.log("Password:", password);

  
  navigate("/");

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
        </form>
      </div>
    </div>
  );
};

export default Login;