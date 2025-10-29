export default function EventBanner() {
   return (
      <section className="event-banner fade-up">
         <div className="event-container">
            <div className="event-content">
               <div className="event-date">
                  <span className="day">15</span>
                  <span className="month">NOV</span>
               </div>
               <div className="event-info">
                  <h3>Winter Rhodes Operator Recruitment</h3>
                  <p>
                     Join us to explore Terra, utilizy Originium resource, and
                     learn about friendship opportunities.
                  </p>
               </div>
               <div className="event-action">
                  <a href="#" className="btn-event">
                     RSVP Now
                  </a>
                  <span className="countdown">End in 5 weeks</span>
               </div>
            </div>
         </div>
      </section>
   );
}
