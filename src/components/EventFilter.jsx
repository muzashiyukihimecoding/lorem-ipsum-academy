import React, { useState } from "react";
import "../assets/index.css";

const EventsFilter = () => {
   const [active, setActive] = useState("All Events");
   const categories = ["All Events", "Academic", "Sports", "Arts", "Community"];

   return (
      <div className="events-filter">
         <div className="filter-left">
            {categories.map((cat) => (
               <button
                  key={cat}
                  className={
                     active === cat ? "filter-btn active" : "filter-btn"
                  }
                  onClick={() => setActive(cat)}
               >
                  {cat}
               </button>
            ))}
         </div>
         <div className="filter-right">
            <button className="calendar-btn">
               <span className="icon">📅</span> View Calendar
            </button>
         </div>
      </div>
   );
};

export default EventsFilter;
