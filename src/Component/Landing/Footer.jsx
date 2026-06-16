import { Link } from "react-router-dom";

const Footer = () => {
return (
     <footer className="bg-black text-white py-12 px-6"> 
<div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

<div> 
    <h2 className="text-3xl font-bold text-emerald-500">
Expense<span className="text-white">IQ</span> </h2>


      <p className="mt-4 text-gray-400">
        Simplifying personal finance management with
        smart expense tracking and budgeting tools.
      </p>
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-4">
        Quick Links
      </h3>

      <ul className="space-y-2 text-gray-400">
        <li>
          <Link to="/" className="hover:text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-white">
            Login
          </Link>
        </li>

        <li>
          <Link to="/register" className="hover:text-white">
            Register
          </Link>
        </li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-4">
        Contact
      </h3>

      <p className="text-gray-400">
        Email: support@expenseiq.com
      </p>
    </div>
  </div>

  <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
    © {new Date().getFullYear()} ExpenseIQ. All rights reserved.
  </div>
</footer>


);
};

export default Footer;
