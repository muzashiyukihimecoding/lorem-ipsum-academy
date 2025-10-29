import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
   const navItems = [
      { path: "/home", label: "Home" },
      { path: "/about", label: "About" },
      { path: "/student", label: "Student" },
      { path: "/riic", label: "RIIC" },
      { path: "/events", label: "Events" },
      { path: "/contact", label: "Contact" },
      { path: "/dashboard", label: "Dashboard" },
   ];

   return (
      <div className="navbar">
         <a href="/" className="navbar-logo">
            <div className="logo">Lorem Ipsum</div>
         </a>

         <div className="nav-links">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/students">Student</Link>
            <Link to="/riic">R.I.I.C.</Link>
            <Link to="/events">Events</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/dashboard" id="dashboard">
               Dashboard
            </Link>
         </div>
      </div>
   );
}
