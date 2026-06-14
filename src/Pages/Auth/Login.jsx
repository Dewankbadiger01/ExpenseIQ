import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);

    

    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-xl p-20">
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center gap-5"
        >
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none text-xl border-2 border-emerald-600 rounded-full py-3 px-5 placeholder:text-gray-500"
          />

          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none text-xl border-2 border-emerald-600 rounded-full py-3 px-5 placeholder:text-gray-500"
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