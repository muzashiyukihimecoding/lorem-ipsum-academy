import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Building_Mode from "./BuildingMode";
import LoadingScreen from "../components/LoadingScreen";

export default function Dashboard() {
   return (
      <>
         <Header />
         <PageTitle title="Dashboard" />
         {/* <Building_Mode /> */}
         <LoadingScreen />
         <Footer />
      </>
   );
}
