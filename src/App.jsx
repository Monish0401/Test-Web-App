import React, { useState, useEffect } from "react";
import Navigation from "./components/ui/Nav_Bar";
import Header from "./components/ui/Header";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [theme, setTheme] = useState("light");

  // Apply theme to document body
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-slate-950 text-slate-200" : "bg-white text-gray-900"
      }`}
    >
      <Header />

      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        theme={theme}
        setTheme={setTheme}
      />

      <main className="p-6 text-center">
        {currentPage === "home" && <h2>🚀 Payload Status Page</h2>}
        {currentPage === "config" && <h2>⚙️ Configurations Page</h2>}
      </main>
    </div>
  );
}
