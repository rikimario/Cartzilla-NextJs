"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Theme() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleDarkMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <button
        onClick={handleDarkMode}
        className="hover:bg-[#333D4C] p-3 hover:rounded-full"
      >
        {!darkMode ? (
          <Moon className="h-5 w-5" strokeWidth={1} />
        ) : (
          <Sun className="h-5 w-5" strokeWidth={1} />
        )}
      </button>
    </div>
  );
}
