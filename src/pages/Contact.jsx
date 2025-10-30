import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Building_Mode from "./BuildingMode";

export default function Contact() {
   return (
      <>
         <Header />
         <PageTitle title="Contact Us" />
         <section class=" contact">
            <div class="contact-wrapper ">
               <div class="map fade-up">
                  <iframe
                     src="https://www.google.com/maps?q=Federal+Reserve+Bank+of+New+York,+Liberty+Street,+New+York,+NY,+USA&z=16&output=embed"
                     allowfullscreen=""
                     loading="lazy"
                  ></iframe>
               </div>

               <div class="contact-info">
                  <div class="info-grid">
                     <div class="info-card fade-up">
                        <h5>📍 Location</h5>
                        <p>
                           Rhodes Island HQ
                           <br />
                           Terra Mainland Sector 03
                        </p>
                     </div>
                     <div class="info-card fade-up">
                        <h5>✉️ Email</h5>
                        <p>contact@rhodesacademy.ark</p>
                     </div>
                     <div class="info-card fade-up">
                        <h5>📞 Call</h5>
                        <p>-23 (555) 013-3948</p>
                     </div>
                     <div class="info-card fade-up">
                        <h5>⏳ Open Hours</h5>
                        <p>Mon – Sat: 08:00 – 18:00</p>
                     </div>
                  </div>

                  <div class="form-card fade-up">
                     <h4>Get in Touch</h4>
                     <p>
                        Reach out to Lorem Ipsum Academy’s communication office
                        below.
                     </p>

                     <form>
                        <div class="row">
                           <input type="text" placeholder="Your Name" />
                           <input type="email" placeholder="Your Email" />
                        </div>
                        <input
                           type="text"
                           placeholder="Subject"
                           className="field"
                        />
                        <textarea placeholder="Message" rows="4"></textarea>
                        <button type="submit">Send Message</button>
                     </form>

                     <div class="socials">
                        <a href="#">🌐</a>
                        <a href="#">🐦</a>
                        <a href="#">📸</a>
                        <a href="#">💼</a>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* <Building_Mode /> */}
         <Footer />
      </>
   );
}
