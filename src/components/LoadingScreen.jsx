export default function LoadingScreen() {
   return (
      <div className="loading-screen wrapper fade-up">
         <div className="spinner"></div>
         <h2>Selamat Datang di Dashboard</h2>
         <br />

         <a href="">
            <button className="btn-primary">Login</button>
         </a>
      </div>
   );
}
