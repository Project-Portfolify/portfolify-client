import React from "react";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div class="text-center animate-fadeIn">
        <img
          src="https://yemca-services.net/404.png"
          alt="404 Illustration"
          class="mx-auto w-80 animate-[float_3s_infinite] shadow-xl rounded-lg"
        />
        <h1 class="text-6xl font-extrabold text-blue-950 mt-6">
          Looks Like You're Lost!
        </h1>
        <p class="text-xl text-gray-700 mt-2">
          We can't seem to find the page you're looking for.
        </p>
        <a
          href="/"
          class="mt-6 inline-block bg-blue-950 text-white px-8 py-3 rounded-md text-lg font-semibold shadow-lg transform transition hover:scale-105 hover:bg-blue-900"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
