import React, { useEffect, useState } from "react";
import "./App.css";
// import header from "../components/ui/header";

function App() {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const openNav = () => setSideNavOpen(true);
  const closeNav = () => {
    setSideNavOpen(false);
    setMobileDropdownOpen(false);
  };
  

  const toggleMobileDropdown = () =>
    setMobileDropdownOpen((prev) => !prev);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() =>{
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, [savedTheme]);

  return (
    <>
      
      {/* <header /> */}
      <div className="header">
        <img src="Space_Applications_Centre_logo.png" alt="SAC Logo" />
        <h1>Software Defined Radio(SDR) Payload Commanding User Inteface</h1>
        <img src="Indian_Space_Research_Organisation_Logo.svg.png" alt="ISRO Logo" />
      </div>

      <button className="menu-btn" onClick={openNav}>
        ☰ Menu
      </button>

      <div className="topnav">
        <a href="/">Payload Status</a>

        <div className="dropdown">
          <a href="/about/">Configurations ▾</a>
          <div className="dropdown-content">
            <a href="/about/team.html">Text Based Config</a>
            <a href="/about/history.html">Data Based Config</a>
            {/* <a href="/about/mission.html">Mission</a> */}
          </div>
        </div>

        <a href="/services/">Services</a>
        <a href="/contact/">Contact</a>

         {/* Theme toggle button */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
      </div>

     

      {/* Side Navbar (Mobile) */}
      <div
        className="sidenav"
        style={{ width: sideNavOpen ? "250px" : "0" }}
      >
        <span className="closebtn" onClick={closeNav}>
          &times;
        </span>
        <a href="/">Payload Status</a>

        <div className="mobile-dropdown" onClick={toggleMobileDropdown}>
          Configurations ▾
        </div>
        {mobileDropdownOpen && (
          <div className="mobile-dropdown-content">
            <a href="/about/team.html">Text Based Config</a>
            <a href="/about/history.html">Data Based Config</a>
            {/* <a href="/about/mission.html">Mission</a> */}
          </div>
        )}

        <a href="/services/">Services</a>
        <a href="/contact/">Contact</a>

        {/* Theme toggle for mobile */}
        <div className="mobile-theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </div>
      </div>
    </>
  );
}

export default App;
