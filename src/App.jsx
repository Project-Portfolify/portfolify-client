import Navbar from "./components/Navbar";
import BoldTheme from "./templates/BoldTheme";
import DarkTheme from "./templates/DarkTheme";
import GreyTheme from "./templates/GreyTheme";
import LightThemeTemplate from "./templates/LightTheme";
import Theme from "./templates/Theme";

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
      <h1>APP component</h1>
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolios" element={<PortfolioPage />} />
        <Route path="*" element={ <ErrorPage /> } /> 
      </Routes>
    </>
  );
}

export default App;
