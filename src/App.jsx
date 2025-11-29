import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Students from "./pages/Students";
import RIIC from "./pages/RIIC";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";

export default function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/students" element={<Students />} />
         <Route path="/riic" element={<RIIC />} />
         <Route path="/events" element={<Events />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/dashboard" element={<Dashboard />} />

         {/* <button className="scroll-top">↑</button> */}
      </Routes>
   );
}
