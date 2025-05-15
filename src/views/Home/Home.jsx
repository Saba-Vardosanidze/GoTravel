import CompanyOffers from "../../components/organisms/CompanyOffers/CompanyOffers";
import ExploreMore from "../../components/organisms/ExploreMore/ExploreMore";
import Footer from "../../components/organisms/Footer/Footer";
import OfferService from "../../components/organisms/OfferService/OfferService";
import HeroSection from "../../components/organisms/heroSection/HeroSection";
import Vacationers from "../../components/organisms/Vacationers/Vacationers";
const Home = () => {
  return (
    <div>
      {/*Start Your Memorable*/}
      {/*Start Your Memorable component import here*/}
      <HeroSection />
      {/*sweet memories*/}
      {/*sweet memories component import here*/}
      {/*Travel offer component import here*/}
      <CompanyOffers />
      {/*Latest news from us component import here*/}
      <ExploreMore />
      {/*Explore more component import here*/}
      {/*registration*/}
      {/*registration component import here*/}
      {/*Vacationers */}
      {/*Vacationers component import here*/}

      <Footer />
      <Vacationers />
      {/*Footer*/}
      {/*How it Works component import here*/}
    </div>
  );
};

export default Home;
