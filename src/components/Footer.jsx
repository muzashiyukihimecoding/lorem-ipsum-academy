export default function Footer() {
   return (
      <footer className="footer">
         <div className="footer-container">
            <div>
               <div className="footer-col">
                  <h3>Lorem Ipsum Academy</h3>
                  <p>Rhodes Island, Terra</p>
                  <div className="footer-socials">
                     <a href="#">
                        <i className="fab fa-x-twitter"></i>
                     </a>
                     <a href="#">
                        <i className="fab fa-instagram"></i>
                     </a>
                     <a href="#">
                        <i className="fab fa-linkedin"></i>
                     </a>
                     <a href="#">
                        <i className="fab fa-github"></i>
                     </a>
                  </div>
               </div>
            </div>

            <div className="footer-col-right">
               <div className="footer-col">
                  <h4>Useful Links</h4>
                  <ul>
                     <li>
                        <a href="/home">Home</a>
                     </li>
                     <li>
                        <a href="/about">About us</a>
                     </li>
                     <li>
                        <a href="/students">Creator</a>
                     </li>
                     <li>
                        <a href="/riic">Terms of Services</a>
                     </li>
                     <li>
                        <a href="/contact">Privacy Policy</a>
                     </li>
                  </ul>
               </div>

               <div className="footer-col">
                  <h4>Our Services</h4>
                  <ul>
                     <li>
                        <a href="#">Terra Exploration</a>
                     </li>
                     <li>
                        <a href="#">Oripathy Medical</a>
                     </li>
                     <li>
                        <a href="#">Support and Training</a>
                     </li>
                     <li>
                        <a href="">Product and Marketing</a>
                     </li>
                  </ul>
               </div>

               <div className="footer-col">
                  <h4>Extras</h4>
                  <ul>
                     <li>
                        <a href="#">Documentation</a>
                     </li>
                     <li>
                        <a href="#">Community</a>
                     </li>
                     <li>
                        <a href="#">Official Website</a>
                     </li>
                     <li>
                        <a href="#">Contact</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>

         <div className="footer-bottom">
            <p>
               © 2025 <strong>Lorem Ipsum Academy</strong>. All Rights Reserved
            </p>
            <p>
               Build by{" "}
               <a href="https://github.com/muzashiyukihimecoding">
                  MuzashiYukihime Code
               </a>
            </p>
         </div>
      </footer>
   );
}
