import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Building_Mode from "./BuildingMode";

import { useState, useEffect, useRef } from "react";

// Imgs
import ArtsIcon from "../assets/images/staff.png";
import Support from "../assets/images/support.png";
import Pharma from "../assets/images/writing.png";
import Code from "../assets/images/code.png";
import Heal from "../assets/images/recovery.png";
import Counseling from "../assets/images/counseling.png";

export default function Students() {
   const extras = [
      {
         icon: <img src={ArtsIcon} alt="Arts Magilica" />,
         title: "Arts Magilica",
         text: "Performs Ability of Arts for High-Defense Enemy",
         tag: "+7 Races",
      },
      {
         icon: <img src={Support} alt="Support Specialist" />,
         title: "Support Specialist",
         text: "Burst team compability with special buffs",
         tag: "+11 Supporters",
      },
      {
         icon: <img src={Pharma} alt="Pharmatic Knowledgers" />,
         title: "Pharmatic Knowledgers",
         text: "Originium extraction for usefull future resources",
         tag: "+3 Relate Civilization",
      },
   ];

   const students = [
      {
         name: "Anastasia Kuznetsova",
         role: "Student Council President",
         img: "https://static.zerochan.net/Arknights.1024.4397985.webp",
      },
      {
         name: "Kal'tsit the Mon3tr",
         role: "Head of Arts Magilica Trace",
         img: "https://static.zerochan.net/Mon3tr.1024.4457170.webp",
      },
      {
         name: "Amiya Therres",
         role: "Captain of Tactical Training Team",
         img: "https://i.pinimg.com/1200x/d0/f7/14/d0f71490e03d22d2c97412614d49d312.jpg",
      },
      {
         name: "Dr. Aria Silence",
         role: "Lead Researcher at Pharmatic Knowledgers",
         img: "https://static.zerochan.net/Silence.the.Paradigmatic.1024.3938591.webp",
      },
      {
         name: "Istina Morozova",
         role: "Support Specialist Coordinator",
         img: "https://i.pinimg.com/1200x/e3/40/9c/e3409cefe0da6b91c7623dc18c0ea032.jpg",
      },
      {
         name: "Sussurro Ventilare Sylvestris",
         role: "Environtmental Resources Organizer",
         img: "https://static.zerochan.net/Arknights.1024.4328998.webp",
      },
   ];

   const [index, setIndex] = useState(0);

   useEffect(() => {
      const slide = setInterval(() => {
         setIndex((prev) => (prev + 1) % students.length);
      }, 6000);
      return () => clearInterval(slide);
   }, []);

   const services = [
      {
         icon: <img src={Counseling} alt="Counseling" />,
         title: "Academic Counseling",
         text: "Personalized guidance for student trainees to navigate learn path and specialization roles.",
         tag: "Available Year-Round",
      },
      {
         icon: <img src={Heal} alt="Medical Support" />,
         title: "Health & Recovery Support Units",
         text: "Comprehensive care facilities to mainain peak condition during tactical simulations, researches, and on-field exercises.",
         tag: "24/7 Emergency",
      },
      {
         icon: <img src={Code} alt="Tech Support" />,
         title: "Tech & Equipment Support",
         text: "State-of-the-art gear maintenance and upgrades to ensure optimal performance in all academy activities.",
         tag: "Cutting-Edge Tech",
      },
   ];

   return (
      <>
         <Header />
         <PageTitle title="Student Life" />

         {/* Student Organizations & Extras */}
         <section id="academy-life" className="section academy">
            <div className="container academy-grid fade-up">
               <div className="hero-image">
                  <img
                     src="https://static.zerochan.net/Arknights.1024.4397985.webp"
                     alt="Yan Operators"
                  />
               </div>
               <div className="academy-text">
                  <h2>Vibrant Academy Experience</h2>
                  <p>
                     Lorem Ipsum Academy offers a unique school life where
                     tactical excellence meets creativity. Whether in the lab,
                     the dorm, or the training field, every students learns the
                     value of team-work and adaptability.
                  </p>
                  <p>
                     Our school facilities include specialized combat
                     simulators, medical research wings, and cultural centers
                     designed to encourage balance and coriosity.
                  </p>
                  <button className="btn btn-outline">Explore Academy</button>
               </div>
            </div>

            <div className="container extras-section fade-up">
               <h3 className="extras-title">Student Organizations & Extras</h3>
               <div className="extras-grid">
                  {extras.map((ex, i) => (
                     <div className="extras-card" key={i}>
                        <div className="extras-icon">{ex.icon}</div>
                        <h4>{ex.title}</h4>
                        <p>{ex.text}</p>
                        <span className="tag">{ex.tag}</span>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Students and Operators */}
         <section className="student-section">
            <h2 className="extras-title">Students Division</h2>
            <p className="subtitle">
               Meet our elite students in training and battlefield.
            </p>

            <div className="student-carousel">
               <div
                  className="student-track"
                  style={{ transform: `translateX(-${index * 100}%)` }}
               >
                  {students.map((std, i) => (
                     <div className="student-card" key={i}>
                        <img src={std.img} alt={std.name} loading="lazy" />
                        <h3>{std.name}</h3>
                        <p>{std.role}</p>
                     </div>
                  ))}
               </div>
            </div>

            <div className="dots">
               {students.map((_, i) => (
                  <span
                     key={i}
                     className={`dot ${i === index ? "active" : ""}`}
                     onClick={() => setIndex(i)}
                  ></span>
               ))}
            </div>
         </section>

         {/* Student Supports */}
         <section className="section">
            <div className="container extras-section fade-up">
               <h3 className="extras-title">Student Supports & Services</h3>
               <div className="extras-grid">
                  {services.map((sv, i) => (
                     <div className="extras-card" key={i}>
                        <div className="extras-icon">{sv.icon}</div>
                        <h4>{sv.title}</h4>
                        <p>{sv.text}</p>
                        <span className="tag">{sv.tag}</span>
                        <a href="#" className="service-link">
                           Learn more <span>→</span>
                        </a>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* CTA End Block */}
         <section className="cta-section">
            <div className="cta-container fade-up">
               <div className="cta-text">
                  <h3>Ready to Experience Student Life?</h3>
                  <p>
                     Discover the vibrant community of Lorem Ipsum Academy by
                     Rhodes Island. Explore advanced research labs, training
                     simulators, and shared living halls where future Students
                     grow together.
                  </p>
               </div>
               <div className="cta-buttons">
                  <button className="cta-btn-primary">Schedule a Visit</button>
                  <button className="cta-btn-secondary">Contact us</button>
               </div>
            </div>
         </section>

         {/* <Building_Mode /> */}
         <Footer />
      </>
   );
}
