export default function MentorCard() {
   return (
      <div className="mentor-grid">
         {mentors.map((mt, i) => (
            <div className="mentor-card" key={i}>
               <div className="mentor-img">{mt.img}</div>
               <h3>{mt.name}</h3>
               <span className="tag">{mt.tag}</span>
               <p>{mt.text}</p>
               <p>
                  Head full profile <span>→</span>
               </p>
            </div>
         ))}
      </div>
   );
}
