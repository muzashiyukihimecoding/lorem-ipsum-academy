import Header from "../components/Header";
import Footer from "../components/Footer";
import EventBanner from "../components/EventBanner";
import EventsFilter from "../components/EventFilter";
import { useEffect, useState } from "react";

export default function Home() {
   const images = [
      "https://preview.redd.it/ez3jaclqvew41.jpg?auto=webp&s=13d2ff93d910a29796064e16a6996e4350698f6f",
      "https://preview.redd.it/fixed-point-wallpaper-i-v0-rfgrlf3ssqca1.jpg?width=1920&format=pjpg&auto=webp&s=df89861e32748f84369c355d8a726cbf4c7ec690",
      "https://a-static.besthdwallpaper.com/texas-exusiai-with-croissant-sora-arknights-anime-video-game-wallpaper-2560x2048-73770_33.jpg",
   ];

   const [current, setCurrent] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrent((prev) => (prev + 1) % images.length);
      }, 7000);

      return () => clearInterval(interval);
   }, [images.length]);

   // Fade-up Animation Delayer
   window.addEventListener("DOMContentLoaded", () => {
      const sections = document.querySelector(".fade-up");

      sections.forEach((section, index) => {
         section.style.animationDelay = `${index * 0.3}`;
      });
   });

   return (
      <>
         <Header />
         <div className="hero-container wrapper">
            <section className="hero-content fade-up">
               <div className="hero-text">
                  <h1>Lorem Ipsum Academy</h1>
                  <h2>Save Terra for the Future of All</h2>
                  <p className="lead">
                     Lorem Ipsum Academy is dedicated to training the finest
                     operators. Join us at our Rhodes Education Programs to
                     master PRTS strategies, Oripathy pharmatical, and field
                     operations.
                  </p>

                  <div className="stats">
                     <div>
                        <h2>96%</h2>
                        <p>Exploration Success</p>
                     </div>
                     <div>
                        <h2>10:2</h2>
                        <p>Operator-Trainer Rate</p>
                     </div>
                     <div>
                        <h2>22+</h2>
                        <p>Events</p>
                     </div>
                  </div>

                  <div className="hero-buttons">
                     <a href="">
                        <button className="btn-primary">Let's See →</button>
                     </a>
                     <a href="">
                        <button className="btn-secondary">Virtual Tour</button>
                     </a>
                  </div>
               </div>

               <div className="hero-image">
                  <img
                     src={images[current]}
                     alt="Hero Slide"
                     className="fade-up"
                     key={current}
                     loading="lazy"
                  />
                  <div className="badge">🏅 Accredited Excellent </div>
               </div>
            </section>

            <section className="features fade-up">
               <div className="card">
                  <img
                     src="https://cdn-icons-png.flaticon.com/128/17884/17884538.png"
                     alt=""
                     className="icon"
                  />
                  <div>
                     <h3>Specialized Curriculum</h3>
                     <p>
                        Comprehensive tactical, medical, and research programs
                        designed to prepare operators for real-world challenges.
                     </p>
                  </div>
               </div>
               <div className="card highlight">
                  <img
                     src="https://cdn-icons-png.flaticon.com/128/7576/7576803.png"
                     alt=""
                     className="icon"
                  />
                  <div>
                     <h3>Advanced Facility</h3>
                     <p>
                        Equipped with cutting-edge laboratories, combat
                        simulators, and medical bays for immersive field
                        learning.
                     </p>
                  </div>
               </div>
               <div className="card">
                  <img
                     src="https://cdn-icons-png.flaticon.com/128/10433/10433136.png"
                     alt=""
                     className="icon"
                  />
                  <div>
                     <h3>Veteran Instructors</h3>
                     <p>
                        Learn directly from experienced operators and
                        researchers who lead missions and breakthrough across
                        Terra.
                     </p>
                  </div>
               </div>
               <div className="card">
                  <img
                     src="https://cdn-icons-png.flaticon.com/128/3498/3498589.png"
                     alt=""
                     className="icon"
                  />
                  <div>
                     <h3>Research Integration</h3>
                     <p>
                        Students collaborate in Originium reserve and field
                        trials for developing new cures throughout technologies.
                     </p>
                  </div>
               </div>
               <div className="card">
                  <img
                     src="https://cdn-icons-png.flaticon.com/128/5208/5208077.png"
                     alt=""
                     className="icon"
                  />
                  <div>
                     <h3>Global Outreach</h3>
                     <p>
                        Operative from every region and any races under Rhodes
                        Island's mission to protect and recover the world.
                     </p>
                  </div>
               </div>
            </section>
         </div>
         <EventBanner />

         <section className="program-section">
            <div className="core-values">
               <h2 className="section-title">Core Values</h2>
               <div className="values-grid">
                  <div className="value-card">
                     <div className="icon">📕</div>
                     <h4>Knowledge & Precision</h4>
                     <p>
                        We value discipline, clarity, and continous learning.
                     </p>
                  </div>
                  <div className="value-card">
                     <div className="icon">🤝</div>
                     <h4>Collaboration</h4>
                     <p>
                        Students, Medics, and Scientists work hand-in-hand for
                        progress.
                     </p>
                  </div>
                  <div className="value-card">
                     <div className="icon">⚙️</div>
                     <h4>Innovation</h4>
                     <p>
                        Advancing Originium research through practical
                        breakthrough
                     </p>
                  </div>
                  <div className="value-card">
                     <div className="icon">🌏</div>
                     <h4>Humanitarian Vision</h4>
                     <p>
                        Healing Terra, protecting the world from within and
                        beyond.
                     </p>
                  </div>
               </div>
            </div>

            <div className="featured-programs">
               <h2 className="section-title">Featured Programs</h2>
               <p className="subtitle">
                  Discover the leading division of Lorem Ipsum Academy
               </p>

               <div className="featured-content">
                  <div className="main-card">
                     <img
                        src="https://arknights.wiki.gg/images/RI_Landship_2.png?bf8bb6"
                        alt="Rhodes Island Landship"
                     />
                     <div className="main-card-body">
                        <span className="tag">Popular</span>
                        <h3>Engineering & Originium Tech</h3>
                        <p>250+ Students · 89% Field Success Rate</p>
                        <p className="desc">
                           Study advanced Originium device design and combat
                           engineering used in operations across Terra.
                        </p>
                        <button>Discover Program</button>
                     </div>
                  </div>

                  <div className="side-list">
                     {[
                        {
                           title: "Combat Tactics",
                           sub: "3 Years · Operation Training",
                        },
                        {
                           title: "Medical Research",
                           sub: "4 Years · Field Medicine",
                        },
                        {
                           title: "Pharmaceutical Sciences",
                           sub: "3 Years · Oripathy Studies",
                        },
                        {
                           title: "Psychological Support",
                           sub: "2 Years · Certification",
                        },
                        {
                           title: "Logistics & Support",
                           sub: "2 Years · Command Track",
                        },
                     ].map((item, i) => (
                        <div className="side-card" key={i}>
                           <div className="side-card-content">
                              <h4>{item.title}</h4>
                              <p>{item.sub}</p>
                           </div>
                           <span className="arrow">→</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>
         <EventsFilter />
         <Footer />
      </>
   );
}
