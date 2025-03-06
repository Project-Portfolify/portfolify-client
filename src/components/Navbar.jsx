import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <div className="sticky top-0 z-50">
      <header className="bg-white/80 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-gray-800">Portfolify</h1>

          {/* Navegación */}
          <nav>
            <ul className="flex space-x-6 text-lg font-medium">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-blue-600 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-blue-600 transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-blue-600 transition duration-300"
                >
                  Contact
                </Link>
              </li>

              {isAuthenticated ? (
                <>
                  <li>
                    <Link
                      to="/portfolios"
                      className="text-gray-700 hover:text-blue-600 transition duration-300"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={logout}
                      className="cursor-pointer text-gray-600 border border-gray-500 px-4 py-1 rounded-lg hover:bg-gray-600 hover:text-white transition duration-300"
                    >
                      LogOut
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="text-gray-700 hover:text-blue-600 transition duration-300"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      SignUp
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
