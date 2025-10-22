import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
   const footItems = [
      { path: "/home", label: "Home" },
      { path: "/about", label: "About" },
      { path: "/student", label: "Student" },
      { path: "/riic", label: "RIIC" },
      { path: "/events", label: "Events" },
      { path: "/contact", label: "Contact" },
      { path: "/dashboard", label: "Dashboard" },
   ];
   return (
      <footer id="footer" className="footer">
         <div className="footer-container">
            <div className="footer-section brand">
               <h3>Lorem Ipsum</h3>
               <p>
                  Rhodes Island<br>Terra, Arknights</br>
               </p>
               <div className="socials">
                  <Link to="/">
                     <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="/">
                     <i className="fab fa-facebook"></i>
                  </Link>
                  <Link to="/">
                     <i className="fab fa-instagram"></i>
                  </Link>
                  <Link to="/">
                     <i className="fab fa-linkedin"></i>
                  </Link>
               </div>
            </div>

            <div className="footer-section">
               <h4>Our Links</h4>
               <ul>
                  <li>
                     <Link to="/home">Home</Link>
                  </li>
                  <li>
                     <Link to="/about">About</Link>
                  </li>
                  <li>
                     <Link to="/students">Student</Link>
                  </li>
                  <li>
                     <Link to="/RIIC">R.I.I.C.</Link>
                  </li>
                  <li>
                     <Link to="/events">Events</Link>
                  </li>
               </ul>
            </div>

            <div className="footer-section">
               <h4>Our Services</h4>
               <ul>
                  <li>
                     <Link to="/">Oripathy Medical</Link>
                  </li>
                  <li>
                     <Link to="/">Battle Record Development</Link>
                  </li>
                  <li>
                     <Link to="/">Operator Training</Link>
                  </li>
                  <li>
                     <Link to="/">Precious Orundums</Link>
                  </li>
                  <li>
                     <Link to="/">More</Link>
                  </li>
               </ul>
            </div>
         </div>

         <div className="footer-bottom">
            <p>
               $copyright 2025 <strong>Lorem Ipsum Academy, Terra</strong>. All
               Rights Reserved
            </p>
            <p>
               Designed by <Link to="/">Muzashi Yukihime</Link>
            </p>
         </div>
      </footer>
   );
}
