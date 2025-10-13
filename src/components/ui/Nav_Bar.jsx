// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaServicestack, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";
// import { Radio, FileText, Database, MonitorCog } from "lucide-react";
// import "../../App.css";

// export default function Navigation() {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [theme, setTheme] = useState("light");
//   const location = useLocation();

//   useEffect(() => {
//     document.body.setAttribute("data-theme", theme);
//   }, [theme]);

//   const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));
//   const openNav = () => setIsNavOpen(true);
//   const closeNav = () => setIsNavOpen(false);
//   const toggleDropdown = () => setIsDropdownOpen((p) => !p);

//   return (
//     <>
//       {/* Header */}
//       <div className="header">
//         <img src="Space_Applications_Centre_logo.png" alt="SAC Logo" />
//         <h1>Software Defined Radio(SDR) Payload Commanding User Inteface</h1>
//         <img src="Indian_Space_Research_Organisation_Logo.svg.png" alt="ISRO Logo" />
//       </div>

//       {/* Mobile Menu Button */}
//       <button className="menu-btn" onClick={openNav}>
//         ☰ Menu
//       </button>

//       {/* Desktop Navbar */}
//       <div className="topnav">
//         <Link to="/sdr_ui" className={location.pathname === "/sdr_ui" ? "active" : ""}>
//           <Radio /> Payload Status
//         </Link>

//         {/* Dropdown as button, not <a> */}
//         <div className="dropdown">
//           <button
//             className={`nav-link ${location.pathname.startsWith("/config") ? "active" : ""}`}
//             onClick={toggleDropdown}
//           >
//             <MonitorCog /> Configurations ▾
//           </button>
//           {isDropdownOpen && (
//             <div className="dropdown-content">
//               <Link to="/config/text"> <FileText /> Text-Based Interactions</Link>
//               <Link to="/config/data"> <Database /> Data-Based Interactions</Link>
//             </div>
//           )}
//         </div>

//         <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>
//           <FaServicestack /> Services
//         </Link>

//         <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
//           <FaEnvelope /> Contact
//         </Link>

//         {/* Theme Toggle */}
//         <button className="theme-toggle" onClick={toggleTheme}>
//           {theme === "light" ? <FaMoon /> : <FaSun />}{" "}
//           {theme === "light" ? "Dark" : "Light"}
//         </button>
//       </div>

//       {/* Sidebar (Mobile) */}
//       <div className="sidenav" style={{ width: isNavOpen ? "250px" : "0" }}>
//         <span className="closebtn" onClick={closeNav}>
//           &times;
//         </span>

//         <Link to="/sdr_ui" onClick={closeNav} className={location.pathname === "/sdr_ui" ? "active" : ""}>
//           <Radio /> Payload Status
//         </Link>

//         <div className="dropdown">
//           <button className="nav-link" onClick={toggleDropdown}>
//             <MonitorCog /> Configurations ▾
//           </button>
//           {isDropdownOpen && (
//             <div className="dropdown-content">
//               <Link to="/config/text" onClick={closeNav}> <FileText /> Text-Based Interactions</Link>
//               <Link to="/config/data" onClick={closeNav}> <Database /> Data-Based Interactions</Link>
//             </div>
//           )}
//         </div>

//         <Link to="/services" onClick={closeNav} className={location.pathname === "/services" ? "active" : ""}>
//           <FaServicestack /> Services
//         </Link>

//         <Link to="/contact" onClick={closeNav} className={location.pathname === "/contact" ? "active" : ""}>
//           <FaEnvelope /> Contact
//         </Link>

//         <button className="theme-toggle" onClick={toggleTheme}>
//           {theme === "light" ? <FaMoon /> : <FaSun />}{" "}
//           {theme === "light" ? "Dark" : "Light"}
//         </button>
//       </div>
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Radio,
  FileText,
  Database,
  MonitorCog,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";
import "../styles/nav_bar_styles.css";

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Apply theme to body
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Navigation links
  const navItems = [
    { to: "/", label: "Payload Status", icon: Radio },
    {
      label: "Configurations",
      icon: MonitorCog,
      dropdown: [
        { to: "/config/text", label: "Text-Based", icon: FileText },
        { to: "/config/data", label: "Data-Based", icon: Database },
      ],
    },
    { to: "/services", label: "Services", icon: Database },
    { to: "/contact", label: "Contact", icon: FileText },
  ];

  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-slate-100">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo / Title */}
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item, idx) =>
              item.dropdown ? (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                      location.pathname.startsWith("/config")
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label} ▾
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute mt-2 bg-slate-800 rounded-lg shadow-lg w-48">
                      {item.dropdown.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          to={sub.to}
                          className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:bg-slate-700 hover:text-white"
                        >
                          <sub.icon className="w-4 h-4" />
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={idx}
                  to={item.to}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    location.pathname === item.to
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              )
            )}

            {/* Theme toggle */}
            <button
              onClick={() =>
                setTheme((prev) => (prev === "light" ? "dark" : "light"))
              }
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700"
            >
              {theme === "light" ? <Moon /> : <Sun />}
              {theme === "light" ? "Dark" : "Light"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          {navItems.map((item, idx) =>
            item.dropdown ? (
              <div key={idx} className="border-b border-slate-700">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full text-left flex items-center justify-between px-4 py-3 text-slate-300 hover:bg-slate-700"
                >
                  <span className="flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </span>
                  <span>{isDropdownOpen ? "▲" : "▼"}</span>
                </button>
                {isDropdownOpen && (
                  <div className="pl-6 pb-2">
                    {item.dropdown.map((sub, sIdx) => (
                      <Link
                        key={sIdx}
                        to={sub.to}
                        className="block px-4 py-2 text-slate-300 hover:bg-slate-700"
                      >
                        <sub.icon className="inline w-4 h-4 mr-2" />
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={idx}
                to={item.to}
                className={`block px-4 py-3 border-b border-slate-700 ${
                  location.pathname === item.to
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-700"
                }`}
              >
                <item.icon className="inline w-4 h-4 mr-2" />
                {item.label}
              </Link>
            )
          )}

          {/* Theme toggle mobile */}
          <button
            onClick={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 text-slate-200 hover:bg-slate-600"
          >
            {theme === "light" ? <Moon /> : <Sun />}
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      )}
    </nav>
  );
}
