import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Radio, FileText, Database, MonitorCog, Moon, Sun, Menu, X, } from "lucide-react";

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
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo / Title */}
          <div className="flex items-center gap-2">
            <Radio className="text-blue-400 w-6 h-6" />
            <span className="font-semibold text-lg">SDR Payload Control</span>
          </div>

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
