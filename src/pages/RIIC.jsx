import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Building_Mode from "./BuildingMode";

import MentorCard from "../components/MentorCard";

export default function RIIC() {
   const mentors = [
      {
         img: (
            <img
               src="https://i.pinimg.com/736x/32/cc/b1/32ccb1ff550078a79f0353a628a4d719.jpg"
               alt="Warfarin"
               className="mentor-thumbnail"
            ></img>
         ),
         name: "Warfarin",
         tag: "Senior Medical Advisor",
         text: "Expert in hematology and Originium infected control, known for unorthodox but effective methods.",
      },
      {
         img: (
            <img
               src="https://i.pinimg.com/736x/5b/4c/4a/5b4c4a221475cad2178e81be67fc1e8c.jpg"
               alt="Kal'tsit"
               className="mentor-thumbnail"
            ></img>
         ),
         name: "Dr. Kal'tsit",
         tag: "Chief Medical Officer",
         text: "Oversees all medical operations in Lorem Ipsum Academy. Vast konwledge in Originium studies and student physiology.",
      },
      {
         img: (
            <img
               src="https://cdnb.artstation.com/p/assets/images/images/027/119/347/large/-111111111111111111.jpg?1590650158"
               alt="Saria"
               className="mentor-thumbnail"
            ></img>
         ),
         name: "Saria",
         tag: "Field Commander & Logistics Head",
         text: "Balance discipline and compassion in tactical training. Specialist in logistic and field medicine.",
      },
   ];

   return (
      <>
         <Header />
         <PageTitle title="R.I.I.C." />
         <section className="section">
            <div className="container instructor-content fade-up">
               <div className="container instructor-text">
                  <div>
                     <h2>Our Instructors & Field Mentors</h2>
                     <p>
                        Meet the tactical advisor, field doctors, and
                        researchers who guide new students through the
                        complexities of Originium research, battlefield
                        strategy, and humanitarian operations.
                     </p>

                     <div className="stats">
                        <div>
                           <h3>40+</h3>
                           <p>Experienced Mentors</p>
                        </div>
                        <div>
                           <h3>11+</h3>
                           <p>Specialized Divisions</p>
                        </div>
                        <div>
                           <h3>12+</h3>
                           <p>Years of Active Services</p>
                        </div>
                     </div>
                  </div>

                  <img
                     src="https://arknights.wiki.gg/images/thumb/RIIC_Control_Center.png/1280px-RIIC_Control_Center.png?991c2e"
                     alt="R.I.I.C."
                     className="fade-up"
                  />
               </div>
            </div>

            <div className="mentor-section fade-up">
               <h3 className="mentor-title">Distinguished Mentors</h3>
               <p className="subtitle">
                  Recognized specialists contributing to Terra's medical and
                  tactical.
               </p>
               <div className="mentor-grid">
                  {mentors.map((mt, i) => (
                     <div className="mentor-card fade-up" key={i}>
                        <div className="mentor-image">{mt.img}</div>
                        <h4>{mt.name}</h4>
                        <span className="tag">{mt.tag}</span>
                        <p>{mt.text}</p>

                        <a href="#">Read full profile →</a>
                     </div>
                  ))}
               </div>
               <button className="btn-primary btn-mentor">
                  View More Mentors
               </button>
            </div>
         </section>
         {/* <Building_Mode /> */}
         <Footer />
      </>
   );
}
