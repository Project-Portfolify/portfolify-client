import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const env = import.meta.env.VITE_BASE_API_URL;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch(`${env}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Success:", data.authToken);
        login(data.authToken);
        navigate("/");
      } else {
        setError(data.message || "Login failed, please try again.");
      }
    } catch (error) {
      setError("Server error, please try later.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center">
      <div className="relative py-3 m-8 lg:ml-auto lg:mr-auto">
        <div className="absolute w-70 lg:w-auto rounded-xl inset-0 bg-gradient-to-r from-blue-400 to-blue-950 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative w-80 lg:w-150 px-10 py-10 bg-white shadow-lg rounded-xl">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold mb-10">Login</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  id="email"
                  type="text"
                  value={email}
                  className="peer mb-5 placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <input
                  id="password"
                  type="password"
                  value={password}
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Password
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-950 text-white rounded-md px-4 py-2 hover:bg-blue-800 transition"
              >
                Log In
              </button>
              <button
                className=" mt-2 text-sm w-full text-black rounded-md px-2 py-1  hover:cursor-pointer hover:scale-105 transition"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>

              {error && <p className="text-red-500 text-sm">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
