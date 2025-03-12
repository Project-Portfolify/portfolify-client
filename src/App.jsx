import { AuthProvider } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import React, { Children } from "react";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PortfolioPage from "./pages/PortfolioPage";
import CreatePortfolio from "./pages/CreatePortfolio";
import PreviewPage from "./pages/PreviewPage";
import PublishedPortfolioPage from "./pages/PublishedPortfolioPage";
import EditPortfolioPage from "./pages/EditPortfolioPage";
import PortfolifyChat from "./components/PortfolifyChat";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthProvider>
              <SignUp />
            </AuthProvider>
          }
        />
        <Route
          path="/login"
          element={
            <AuthProvider>
              <Login />
            </AuthProvider>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <AboutPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/templates/:templateId"
          element={
            <PrivateRoute>
              <CreatePortfolio />
            </PrivateRoute>
          }
        />
        <Route
          path="/preview/:templateId"
          element={
            <PrivateRoute>
              <PreviewPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/portfolios"
          element={
            <PrivateRoute>
              <PortfolioPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/portfolio/:templateId/:slug/edit"
          element={
            <PrivateRoute>
              <EditPortfolioPage />
            </PrivateRoute>
          }
        />
        <Route path="/portfolio/:slug" element={<PublishedPortfolioPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;

function PrivateRoute({ children }) {
  return (
    <AuthProvider>
      <Navbar />
      {children}
      <PortfolifyChat/>
    </AuthProvider>
  );
}
