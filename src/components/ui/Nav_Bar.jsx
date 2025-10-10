import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaServicestack, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";
import { Radio, FileText, Database, MonitorCog } from "lucide-react";
import "../../App.css";

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const location = useLocation();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  const openNav = () => setIsNavOpen(true);
  const closeNav = () => setIsNavOpen(false);
  const toggleDropdown = () => setIsDropdownOpen((p) => !p);

  return (
    <>
      {/* Header */}
      <div className="header">
        <img src="Space_Applications_Centre_logo.png" alt="SAC Logo" />
        <h1>Software Defined Radio(SDR) Payload Commanding User Inteface</h1>
        <img src="Indian_Space_Research_Organisation_Logo.svg.png" alt="ISRO Logo" />
      </div>

      {/* Mobile Menu Button */}
      <button className="menu-btn" onClick={openNav}>
        ☰ Menu
      </button>

      {/* Desktop Navbar */}
      <div className="topnav">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <Radio /> Payload Status
        </Link>

        {/* Dropdown as button, not <a> */}
        <div className="dropdown">
          <button
            className={`nav-link ${location.pathname.startsWith("/config") ? "active" : ""}`}
            onClick={toggleDropdown}
          >
            <MonitorCog /> Configurations ▾
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/config/text"> <FileText /> Text-Based Interactions</Link>
              <Link to="/config/data"> <Database /> Data-Based Interactions</Link>
            </div>
          )}
        </div>

        <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>
          <FaServicestack /> Services
        </Link>

        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
          <FaEnvelope /> Contact
        </Link>

        {/* Theme Toggle */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? <FaMoon /> : <FaSun />}{" "}
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>

      {/* Sidebar (Mobile) */}
      <div className="sidenav" style={{ width: isNavOpen ? "250px" : "0" }}>
        <span className="closebtn" onClick={closeNav}>
          &times;
        </span>

        <Link to="/" onClick={closeNav} className={location.pathname === "/" ? "active" : ""}>
          <Radio /> Payload Status
        </Link>

        <div className="dropdown">
          <button className="nav-link" onClick={toggleDropdown}>
            <MonitorCog /> Configurations ▾
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/config/text" onClick={closeNav}> <FileText /> Text-Based Interactions</Link>
              <Link to="/config/data" onClick={closeNav}> <Database /> Data-Based Interactions</Link>
            </div>
          )}
        </div>

        <Link to="/services" onClick={closeNav} className={location.pathname === "/services" ? "active" : ""}>
          <FaServicestack /> Services
        </Link>

        <Link to="/contact" onClick={closeNav} className={location.pathname === "/contact" ? "active" : ""}>
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
