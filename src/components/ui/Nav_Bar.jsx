import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaServicestack, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";
import { Radio, FileText, Database, MonitorCog } from "lucide-react"
import "../../App.css";

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const location = useLocation();

  // Apply theme
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  // Theme toggle
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  // Helpers
  const openNav = () => setIsNavOpen(true);
  const closeNav = () => setIsNavOpen(false);
  const toggleDropdown = () => setIsDropdownOpen((p) => !p);

  return (
    <>
      {/* Header */}
      <div className="header">
        <img src="images/left-logo.png" alt="Left Logo" />
        <h1>My Website Title</h1>
        <img src="images/right-logo.png" alt="Right Logo" />
      </div>

      {/* Mobile Menu Button */}
      <button className="menu-btn" onClick={openNav}>☰ Menu</button>

      {/* Desktop Navbar */}
      <div className="topnav">
        <Link to="#" className={location.pathname === "#" ? "active" : ""}>
          <Radio /> Payload Status
        </Link>

        <div className="dropdown">
          <Link
            to=""
            className={location.pathname.startsWith("") ? "active" : ""}
          >
            <MonitorCog /> Configurations ▾
          </Link>
          <div className="dropdown-content">
            <Link to=""><FileText /> Text-Based Interactions</Link>
            <Link to=""> <Database /> Data-Based Interactions</Link>
            {/* <Link to="/about/mission">Mission</Link> */}
          </div>
        </div>

        <Link to="" className={location.pathname === "" ? "active" : ""}>
          <FaServicestack /> Services
        </Link>

        <Link to="" className={location.pathname === "" ? "active" : ""}>
          <FaEnvelope /> Contact
        </Link>

        {/* Theme Toggle */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? <FaMoon /> : <FaSun />}{" "}
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>

      {/* Sidebar (Mobile) */}
      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: isNavOpen ? "250px" : "0" }}
      >
        <span className="closebtn" onClick={closeNav}>
          &times;
        </span>

        <Link to="#" onClick={closeNav} className={location.pathname === "#" ? "active" : ""}>
          <Radio /> Payload Status
        </Link>

        <div className="dropdown">
          <a href="#" onClick={toggleDropdown}>
            <MonitorCog /> Configurations ▾
          </a>
          {isDropdownOpen && (
            <div className="dropdown-content" style={{ position: "relative" }}>
              <Link to="" onClick={closeNav}><FileText /> Text-Based Interactions</Link>
              <Link to="" onClick={closeNav}><Database /> Data-Based Interactions</Link>
              {/* <Link to="/about/mission" onClick={closeNav}>Mission</Link> */}
            </div>
          )}
        </div>

        <Link to="" onClick={closeNav} className={location.pathname === "" ? "active" : ""}>
          <FaServicestack /> Services
        </Link>

        <Link to="" onClick={closeNav} className={location.pathname === "" ? "active" : ""}>
          <FaEnvelope /> Contact
        </Link>

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? <FaMoon /> : <FaSun />}{" "}
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </>
  );
}
