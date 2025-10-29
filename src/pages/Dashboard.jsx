import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Building_Mode from "./BuildingMode";

export default function Dashboard() {
   return (
      <>
         <Header />
         <PageTitle title="Dashboard" />
         <Building_Mode />
         <Footer />
      </>
   );
}
