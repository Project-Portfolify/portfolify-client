import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ThemeToggleButton from "./ThemeToggleButton";
import { Menu, X } from "lucide-react";

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <header className="bg-white/80 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-gray-800">
            <Link to="/">Portfolify</Link>
          </h1>

          {/* mobile button*/}
          <div className="sm:hidden ml-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Navigation - desktop */}
          <nav className="hidden sm:block">
            <ul className="flex space-x-6 text-lg font-medium items-center">
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
              <li>
                <ThemeToggleButton />
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="sm:hidden bg-white/90 backdrop-blur-md shadow-md">
            <ul className="flex flex-col space-y-4 px-6 py-4 text-lg font-medium">
              <li>
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 transition duration-300"
                >
                  About
                </Link>
              </li>
              
              {isAuthenticated ? (
                <>
                  <li>
                    <Link
                      to="/portfolios"
                      onClick={() => setMenuOpen(false)}
                      className="text-gray-700 hover:text-blue-600 transition duration-300"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        logout();
                        setMenuOpen(false);
                      }}
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
                      onClick={() => setMenuOpen(false)}
                      className="text-gray-700 hover:text-blue-600 transition duration-300"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      onClick={() => setMenuOpen(false)}
                      className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      SignUp
                    </Link>
                  </li>
                </>
              )}
              <li>
                <ThemeToggleButton />
              </li>
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
}

export default Navbar;
