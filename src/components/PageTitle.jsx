export default function PageTitle({ title }) {
   return (
      <div className="page-title light-background fade-up">
         <h1>{title}</h1>
         <nav className="breadcrumbs">
            <ol>
               <li>
                  <a href="/home">Home</a>
               </li>
               <li className="current">{title}</li>
            </ol>
         </nav>
      </div>
   );
}
