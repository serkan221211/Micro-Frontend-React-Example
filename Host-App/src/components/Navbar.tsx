import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">MyApp</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-300">
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="bg-blue-600 px-3 py-2 rounded-lg hover:bg-blue-700"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="bg-green-600 px-3 py-2 rounded-lg hover:bg-green-700"
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
