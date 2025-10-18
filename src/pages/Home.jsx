import Header from "../components/Header";

export default function Home() {
   return (
      <>
         <Header />
         <div className="hero-container fade-up">
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
                     src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc"
                     alt="Campuss"
                  />
                  <div className="badge">🏅 Accredited </div>
               </div>
            </section>

            <section className="features">
               <div className="card">
                  <div className="icon">📘</div>
                  <div>
                     <h3>Innovative Curriculum</h3>
                     <p>Lorem</p>
                  </div>
               </div>
               <div className="card highlight">
                  <div className="icon">📘</div>
                  <div>
                     <h3>Modern Facility</h3>
                     <p>Lorem</p>
                  </div>
               </div>
               <div className="card">
                  <div className="icon">📘</div>
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
                     <span>Recruitment Due in 3 weeks</span>
                  </div>
               </section>
            </div>
         </div>
      </>
   );
}
