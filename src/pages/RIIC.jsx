import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Building_Mode from "./BuildingMode";

export default function RIIC() {
   return (
      <>
         <Header />
         <PageTitle title="R.I.I.C." />
         <Building_Mode />
         <Footer />
      </>
   );
}
