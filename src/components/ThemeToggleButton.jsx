import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-2 bg-[#0b132b] text-white rounded-full shadow-md transition-all duration-300 hover:bg-[#1a2131] focus:outline-none focus:ring-2 focus:ring-[#0b132b]"
        >
            {theme === "light" ? (
                <>
                    <Moon className="w-5 h-5" />
                    <span className="hidden sm:block">Dark Mode</span>
                </>
            ) : (
                <>
                    <Sun className="w-5 h-5" />
                    <span className="hidden sm:block">Light Mode</span>
                </>
            )}
        </button>
    );
};

export default ThemeToggleButton;
