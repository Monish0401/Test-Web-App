import { useState } from "react";
import { header } from "scripts/header.js";

function App() {
  const [sideOpen, setSideOpen] = React.useState(false);
  const [aboutOpen, setAboutOpen] = React.useState(false);

  const openNav = () => setSideOpen(true);
  const closeNav = () => { setSideOpen(false); setAboutOpen(false); };
  const toggleAbout = () => setAboutOpen(!aboutOpen);

  return (
    <>
      <header />

      <button className="menu-btn" onClick={openNav}>☰ Menu</button>

      <div className="topnav">
        <a href="index.html">Home</a>
        <div className="dropdown">
          <a href="about/">About ▾</a>
          <div className="dropdown-content">
            <a href="about/team.html">Our Team</a>
            <a href="about/history.html">History</a>
            <a href="about/mission.html">Mission</a>
          </div>
        </div>
        <a href="services/">Services</a>
        <a href="contact/">Contact</a>
      </div>

      <div className="sidenav" style={{ width: sideOpen ? "250px" : "0" }}>
        <span className="closebtn" onClick={closeNav}>&times;</span>
        <a href="index.html">Home</a>

        <div className="mobile-dropdown" onClick={toggleAbout}>
          About ▾
        </div>
        <div
          className="mobile-dropdown-content"
          style={{ display: aboutOpen ? "block" : "none" }}
        >
          <a href="about/team.html">Our Team</a>
          <a href="about/history.html">History</a>
          <a href="about/mission.html">Mission</a>
        </div>

        <a href="services/">Services</a>
        <a href="contact/">Contact</a>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
