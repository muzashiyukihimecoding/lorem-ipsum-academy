import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Building_Mode from "./BuildingMode";

export default function About() {
   return (
      <>
         <Header />
         <PageTitle title="About Us" />
         <Building_Mode />
         <Footer />
      </>
   );
}
