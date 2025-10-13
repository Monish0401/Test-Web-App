// import React, { useEffect, useState } from "react";
// import "./App.css";
// // import header from "../components/ui/header";

// function App() {
//   const [sideNavOpen, setSideNavOpen] = useState(false);
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
//   const [theme, setTheme] = useState("light");

//   const openNav = () => setSideNavOpen(true);
//   const closeNav = () => {
//     setSideNavOpen(false);
//     setMobileDropdownOpen(false);
//   };
  

//   const toggleMobileDropdown = () =>
//     setMobileDropdownOpen((prev) => !prev);

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     document.documentElement.setAttribute("data-theme", newTheme);
//     localStorage.setItem("theme", newTheme);
//   };

//   useEffect(() =>{
//     const savedTheme = localStorage.getItem("theme") || "light";
//     setTheme(savedTheme);
//     document.documentElement.setAttribute("data-theme", savedTheme);
//   }, []);

//   return (
//     <>
      
//       {/* <header /> */}
//       <div className="header">
//         <img src="Space_Applications_Centre_logo.png" alt="SAC Logo" />
//         <h1>Software Defined Radio(SDR) Payload Commanding User Inteface</h1>
//         <img src="Indian_Space_Research_Organisation_Logo.svg.png" alt="ISRO Logo" />
//       </div>

//       <button className="menu-btn" onClick={openNav}>
//         ☰ Menu
//       </button>

//       <div className="topnav">
//         <a href="/">Payload Status</a>

//         <div className="dropdown">
//           <a href="/about/">Configurations ▾</a>
//           <div className="dropdown-content">
//             <a href="/about/team.html">Text Based Config</a>
//             <a href="/about/history.html">Data Based Config</a>
//             {/* <a href="/about/mission.html">Mission</a> */}
//           </div>
//         </div>

//         <a href="/services/">Services</a>
//         <a href="/contact/">Contact</a>

//          {/* Theme toggle button */}
//       <button className="theme-toggle" onClick={toggleTheme}>
//         {theme === "light" ? "🌙" : "☀️"}
//       </button>
//       </div>

     

//       {/* Side Navbar (Mobile) */}
//       <div
//         className="sidenav"
//         style={{ width: sideNavOpen ? "250px" : "0" }}
//       >
//         <span className="closebtn" onClick={closeNav}>
//           &times;
//         </span>
//         <a href="/">Payload Status</a>

//         <div className="mobile-dropdown" onClick={toggleMobileDropdown}>
//           Configurations ▾
//         </div>
//         {mobileDropdownOpen && (
//           <div className="mobile-dropdown-content">
//             <a href="/about/team.html">Text Based Config</a>
//             <a href="/about/history.html">Data Based Config</a>
//             {/* <a href="/about/mission.html">Mission</a> */}
//           </div>
//         )}

//         <a href="/services/">Services</a>
//         <a href="/contact/">Contact</a>

//         {/* Theme toggle for mobile */}
//         <div className="mobile-theme-toggle" onClick={toggleTheme}>
//           {theme === "light" ? "🌙" : "☀️"}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/ui/Header";
import Navigation from "./components/ui/Nav_Bar";
import Footer from "./components/ui/Footer";
import "./App.css";

// Pages
const Home = () => <h2 style={{ textAlign: "center" }}>Welcome to Home Page</h2>;
const ConfigText = () => <h2 style={{ textAlign: "center" }}>Text-Based Interactions</h2>;
const ConfigData = () => <h2 style={{ textAlign: "center" }}>Data-Based Interactions</h2>;
const Services = () => <h2 style={{ textAlign: "center" }}>Our Services</h2>;
const Contact = () => <h2 style={{ textAlign: "center" }}>Contact Us</h2>;

export default function App() {
  return (    
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/sdr_ui" element={<Home />} />
        <Route path="/config/text" element={<ConfigText />} />
        <Route path="/config/data" element={<ConfigData />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </Router>
    
  );
}

