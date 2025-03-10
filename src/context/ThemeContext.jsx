import React from 'react'
import { createContext, useState, useEffect } from "react";

const themes = {
    light: {
        background: "#F9FAFB",
        color: "#1F2937", 
    },
    dark: {
        background: "#1F2937",
        color: "#F9FAFB",
    },
    
};
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(() => {

        return localStorage.getItem("theme") || "light";
    });


    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, themes, toggleTheme }}>
            <div
                style={{
                    backgroundColor: themes[theme].background,
                    color: themes[theme].color,
                    minHeight: "100vh",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                }}
            >
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return React.useContext(ThemeContext);
};