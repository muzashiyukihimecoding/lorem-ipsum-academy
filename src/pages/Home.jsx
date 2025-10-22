import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
   const images = [
      "https://preview.redd.it/fixed-point-wallpaper-i-v0-rfgrlf3ssqca1.jpg?width=1920&format=pjpg&auto=webp&s=df89861e32748f84369c355d8a726cbf4c7ec690",
      "https://preview.redd.it/ez3jaclqvew41.jpg?auto=webp&s=13d2ff93d910a29796064e16a6996e4350698f6f",
      "https://a-static.besthdwallpaper.com/texas-exusiai-with-croissant-sora-arknights-anime-video-game-wallpaper-2560x2048-73770_33.jpg",
   ];

   const [current, setCurrent] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrent((prev) => (prev + 1) % images.length);
      }, 7000);

      return () => clearInterval(interval);
   }, [images.length]);

   return (
      <>
         <Header />
         <div className="hero-container fade-up wrapper">
            <section className="hero-content">
               <div className="hero-text">
                  <h1>Work Excelent, Growth Incredible</h1>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Accusantium beatae, inventore maxime ut, molestias ducimus
                     exercitationem minus odio hic voluptatum porro id, rerum
                     perferendis libero tempore animi veniam iusto quod.
                  </p>

                  <div className="stats">
                     <div>
                        <h2>66%</h2>
                        <p>EXPLORATION RATE</p>
                     </div>
                     <div>
                        <h2>10:2</h2>
                        <p>OPERATOR-TRAINER RATE</p>
                     </div>
                     <div>
                        <h2>22+</h2>
                        <p>EVENTS</p>
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
                  />
                  <div className="badge">🏅 Accredited Excellent </div>
               </div>
            </section>

            <section className="features">
               <div className="card">
                  <img
                     src="https://cdn-icons-png.flaticon.com/128/17884/17884538.png"
                     alt=""
                     className="icon"
                  />
                  <div>
                     <h3>Innovative Curriculum</h3>
                     <p>Lorem</p>
                  </div>
               </div>
               <div className="card highlight">
                  <img
                     src="https://cdn-icons-png.flaticon.com/128/7576/7576803.png"
                     alt=""
                     className="icon"
                  />
                  <div>
                     <h3>Modern Facility</h3>
                     <p>Lorem</p>
                  </div>
               </div>
               <div className="card">
                  <img
                     src="https://cdn-icons-png.flaticon.com/128/10433/10433136.png"
                     alt=""
                     className="icon"
                  />
                  <div>
                     <h3>Expert Faculty</h3>
                     <p>Lorem</p>
                  </div>
               </div>
            </section>

            <div className="banner">
               <section className="open-rhodes">
                  <div className="date-box">
                     <h2>15</h2>
                     <p>NOV</p>
                  </div>
                  <div className="info">
                     <h3>Winter Rhodes Operator Recruitment</h3>
                     <p>
                        Join us to explore Terra, utilizy Originium resource,
                        and learn about friendship opportunities
                     </p>
                  </div>
                  <div className="cta">
                     <button className="btn-light">RSVP NOW</button>
                     <span>Recruitment Due in 5 weeks</span>
                  </div>
               </section>
            </div>
         </div>
         {/* <Footer /> */}
      </>
   );
}
