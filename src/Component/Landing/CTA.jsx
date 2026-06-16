import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-emerald-600 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Take Control of Your Finances?
        </h2>

        <p className="text-lg text-emerald-100 mb-8">
          Join ExpenseIQ today and start tracking your income,
          expenses, budgets, and savings effortlessly.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/register")}
            className="bg-white text-emerald-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Get Started Free
          </button>

          <button
            onClick={() => navigate("/login")}
            className="border border-white px-8 py-3 rounded-xl hover:bg-emerald-700 transition"
          >
            Sign In
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;