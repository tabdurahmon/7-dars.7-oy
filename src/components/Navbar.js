import Link from "next/link";
import { IoHome } from "react-icons/io5";

function Navbar() {
  return (
    <div className="w-full mx-auto px-5 flex justify-between items-center py-4 bg-white shadow-md">
      <h1 className="text-3xl font-bold text-gray-800">Market</h1>
      <nav className="flex gap-6">
        <Link
          href="/"
          className="text-lg flex gap-2 justify-between text-gray-700 hover:text-gray-900"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-lg text-gray-700 hover:text-gray-900"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-lg text-gray-700 hover:text-gray-900"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
