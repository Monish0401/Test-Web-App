import React, { useState } from "react";
import "./App.css";
import header from "../components/ui/header";

function App() {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const openNav = () => setSideNavOpen(true);
  const closeNav = () => {
    setSideNavOpen(false);
    setMobileDropdownOpen(false);
  };

  const toggleMobileDropdown = () =>
    setMobileDropdownOpen((prev) => !prev);

  return (
    <>
      
      <header />

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
      </div>
    </>
  );
}

export default App;
