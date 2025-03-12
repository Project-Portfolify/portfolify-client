import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
const env = import.meta.env.VITE_BASE_API_URL;

const SignUp = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const { email, name, password } = e.target.elements;
    const newUser = {
      email: email.value,
      name: name.value,
      password: password.value,
    };

    console.log({ email: newUser.email, name: newUser.name });

    try {
      // Primero se hace el signUp
      const signUpResponse = await fetch(`${env}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      const signUpData = await signUpResponse.json();

      if (!signUpResponse.ok) {
        throw new Error(signUpData.message || "Sign up failed");
      }

      console.log("Sign up successful:", signUpData);

      // Después de signUp, automáticamente hace el login para obtener el token
      const loginResponse = await fetch(`${env}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: newUser.email,
          password: newUser.password,
        }),
      });

      const loginData = await loginResponse.json();

      if (loginResponse.ok) {
        console.log("Login successful:", loginData.authToken);

        // Guarda el token en el contexto para mantener la sesión activa
        login(loginData.authToken);

        // Redirige al dashboard o homepage después del login
        navigate("/");
      } else {
        setError(loginData.message || "Login failed, please try again.");
      }
    } catch (error) {
      setError("Error en el servidor, por favor intenta más tarde.");
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 m-8 md:ml-auto md:mr-auto lg:ml-auto lg:mr-auto">
          <div className="absolute w-70 md:w-150 lg:w-auto rounded-xl inset-0 bg-gradient-to-r from-blue-400 to-blue-950 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative w-80 md:w-150 lg:w-150 px-10 py-10 bg-white shadow-lg rounded-xl">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Sign Up</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none "
                      placeholder="Email address"
                      required
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none "
                      placeholder="Email address"
                      required
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      User Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none "
                      placeholder="Password"
                      required
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      className="bg-blue-950 mt-3 w-full text-white rounded-md px-2 py-1  hover:bg-blue-800 transition"
                      type="submit"
                    >
                      Submit
                    </button>
                    <button
                      className=" mt-2 text-sm w-full text-black rounded-md px-2 py-1 hover:cursor-pointer hover:scale-105 transition"
                      onClick={() => navigate("/")}
                    >
                      Back to home
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
