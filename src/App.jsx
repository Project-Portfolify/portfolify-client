import Navbar from "./components/Navbar";

import React from "react";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolios" element={<PortfolioPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
