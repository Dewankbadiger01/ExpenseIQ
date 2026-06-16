import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful!");

    navigate("/login");

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-gray-200 border border-gray-200 rounded-2xl p-10 w-full max-w-sm shadow-sm">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          <div className="text-center">
            <h1 className="text-xl font-medium text-gray-900">
              Create Account
            </h1>

            <p className="text-sm text-gray-500 mt-2">
              Register to start managing your expenses
            </p>
          </div>

          <input
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="outline-none text-lg border-2 border-emerald-600 rounded-full py-3 px-4"
          />

          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none text-lg border-2 border-emerald-600 rounded-full py-3 px-4"
          />

          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none text-lg border-2 border-emerald-600 rounded-full py-3 px-4"
          />

          <button
            type="submit"
            className="w-full bg-black text-white text-lg border-2 border-emerald-600 rounded-full py-3 hover:bg-gray-800 transition"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-emerald-600 font-medium hover:underline"
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