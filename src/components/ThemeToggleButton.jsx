import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex font-light text-sm w-auto h-7 items-center gap-2 p-2 text-black border-1 rounded-xl shadow-md transition-all duration-300 hover:bg-[#dbdcde] focus:outline-none focus:ring-1 focus:ring-[#0b132b]"
    >
      {theme === "light" ? (
        <>
          <Moon className="w-3" />
          <span className="hidden sm:block">Dark Mode</span>
        </>
      ) : (
        <>
          <Sun className="w-3" />
          <span className="hidden sm:block">Light Mode</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggleButton;
