import React from 'react';
import Navbar from '../../LandingPage/Navbar';
import HeroSection from '../../LandingPage/HeroSection';

import PlatformSection from '../../LandingPage/PlatformSection';
import EcosystemSection from '../../LandingPage/EcosystemSection';
import OurProducts from '../../LandingPage/OurProducts';
import RecentEvents from '../../LandingPage/RecentEvents';
import FaqSection from '../../LandingPage/FaqSection';
import Footer from '../../LandingPage/Footer';
import Slider from '../../LandingPage/Slider';
import Featured from '../../LandingPage/LogoSlider';
import Choose from '../../LandingPage/Choose';
import ProjectPlan from '../../LandingPage/ProjectPlan';
import ICOTokenSale from '../../LandingPage/ICOTokenSale';
import ListedOnSection from '../../LandingPage/ListedOnSection';
import Overview from '../../LandingPage/Overview';
import EventsSection from '../../LandingPage/EventsSection';
import TokenomicsTabs from '../../LandingPage/TokenomicsSection'
import TechLogosSlider from '../../LandingPage/LogoSlider';
import LogoSlider from '../../LandingPage/LogoSlider';


const UsersHome = () => {
  return (
    <div className="bg-bg_color text-text_color scroll-smooth">
      <div className="p-4">
        <Navbar />
      </div>

      <div id="home">
        <HeroSection />
      </div>

   <Slider />
         <Overview />

             <ListedOnSection />

             
      <div id="ecosystem">
        <EcosystemSection />
      </div>
  <div id="project-plan">
        <ProjectPlan />
      </div>



      <div id="tokenomics">
        <TokenomicsTabs />
      </div>


        <div id="events">
        <EventsSection />
      </div>

         <Choose /> 

             <ICOTokenSale />

             {/* <TokenProgress/> */}
       <LogoSlider/>

         <div id="products">
        <OurProducts />
      </div>



       <div id="platform">
        <PlatformSection />
      </div>

   



  


   

     


    


   

    





   

    

       {/* <div id="recent-events">
        <RecentEvents />
      </div>  */}

       <div id="faq">
        <FaqSection />
      </div>

      {/* <div id="blogs">
        <div className="text-center py-10">Blogs Section Placeholder</div>
      </div> */}
{/* 
      <div id="mr-mint-backchain">
        <div className="text-center py-10">Mr Mint Backchain Section Placeholder</div>
      </div>  */}

       <Footer /> 
    </div>
  );
};

export default UsersHome;