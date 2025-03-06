import { AuthProvider } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import React from "react";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import PortfolioPage from "./pages/PortfolioPage";
import CreatePortfolio from "./pages/CreatePortfolio";
import PreviewPage from "./pages/PreviewPage";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/templates/:templateId" element={<CreatePortfolio />} />
          <Route path="/preview/:templateId" element={<PreviewPage />} />

          <Route path="/portfolios" element={<PortfolioPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
