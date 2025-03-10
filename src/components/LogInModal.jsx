import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
const env = import.meta.env.VITE_BASE_API_URL;

const LogInModal = () => {
  const [open, setOpen] = useState(false);

  const { login, isAuthenticated } = useContext(AuthContext);

  const toggleModal = () => {
    setOpen(!open);
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const newUser = {
      email: email.value,
      password: password.value,
    };

    console.log(newUser);

    try {
      const response = await axios.post(`${env}/auth/login`, newUser);
      console.log("success", response);
      login(response.data.authToken);
      setOpen(!open);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Button to toggle modal */}

      {!isAuthenticated && (
        <button
          onClick={toggleModal}
          className="w-52 h-12 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7"
        >
          LogIn / SignUp
        </button>
      )}
      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center 
             bg-white/10 backdrop-blur-md border border-white/20"
          aria-hidden="true"
        >
          <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg dark:bg-black">
            {/* Close button */}
            <div className="flex justify-end p-2">
              <button
                onClick={toggleModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogIn} className="space-y-6 px-6 pb-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                  placeholder="••••••••"
                  required
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full text-black bg-white hover:bg-gray-200 focus:ring-4 focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Login to your account
              </button>

              {/* Register Link */}
              <div className="text-sm font-medium text-gray-400">
                Not registered?
                <Link
                  to="/signup"
                  target="blank"
                  className="text-white ml-4 hover:cursor-pointer"
                >
                  Create account
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogInModal;
