import CompanyOffers from "../../components/organisms/CompanyOffers/CompanyOffers";
import ExploreMore from "../../components/organisms/ExploreMore/ExploreMore";
import Footer from "../../components/organisms/Footer/Footer";
import OfferService from "../../components/organisms/OfferService/OfferService";
import SweetMemories from "../../components/organisms/SweetMemories/SweetMemories";
import HeroSection from "../../components/organisms/heroSection/HeroSection";
import Vacationers from "../../components/organisms/Vacationers/Vacationers";
const Home = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/*Start Your Memorable component import here*/}
        <HeroSection />
        {/*sweet memories component import here*/}
        <SweetMemories />
        {/*Travel offer component import here*/}
        <OfferService />
        {/*Latest news from us component import here*/}
        <CompanyOffers />
        <ExploreMore />
        {/*Explore more component import here*/}
        {/*registration component import here*/}
        {/*Vacationers component import here*/}
        <Vacationers />
      </main>
      {/*Footer*/}
      <Footer />
    </div>
  );
};

export default Home;
