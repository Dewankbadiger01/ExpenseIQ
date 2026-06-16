import { useNavigate } from "react-router-dom";

const Hero = () => {
const navigate = useNavigate();

return ( <section className="bg-gray-50 py-20 px-6"> <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
{/* Left Section */} <div> <h1 className="text-5xl font-bold leading-tight text-gray-900">
Take Control of Your <span className="text-emerald-600">
{" "}Finances </span> </h1>

```
      <p className="mt-6 text-lg text-gray-600">
        ExpenseIQ helps you track expenses, manage budgets,
        analyze spending habits, and achieve your financial goals.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <button
          onClick={() => navigate("/register")}
          className="bg-emerald-600 text-white px-8 py-3 rounded-xl hover:bg-emerald-700 transition"
        >
          Get Started
        </button>

        <button
          onClick={() => navigate("/login")}
          className="border border-gray-300 px-8 py-3 rounded-xl hover:bg-gray-100 transition"
        >
          Login
        </button>
      </div>
    </div>

    {/* Right Section */}
    <div className="bg-white rounded-3xl shadow-xl p-8">
      <h3 className="text-xl font-semibold mb-6">
        Monthly Overview
      </h3>

      <div className="space-y-4">
        <div className="flex justify-between bg-gray-100 p-4 rounded-xl">
          <span>Total Income</span>
          <span className="font-bold text-green-600">
            ₹75,000
          </span>
        </div>

        <div className="flex justify-between bg-gray-100 p-4 rounded-xl">
          <span>Total Expenses</span>
          <span className="font-bold text-red-600">
            ₹42,000
          </span>
        </div>

        <div className="flex justify-between bg-gray-100 p-4 rounded-xl">
          <span>Savings</span>
          <span className="font-bold text-emerald-600">
            ₹33,000
          </span>
        </div>
      </div>
    </div>
  </div>
</section>


);
};

export default Hero;
