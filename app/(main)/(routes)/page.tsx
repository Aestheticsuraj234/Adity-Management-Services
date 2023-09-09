import ContactUs from "@/components/Home/Contact-Us";
import HomeComponent from "@/components/Home/HomeComponent";
import JoinUs from "@/components/Home/JoinUs";
import OurDiverseServices from "@/components/Home/OurDiverseServices";
import WhoWeAre from "@/components/Home/WhoWeAre";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default async function  Home() {
  
    return (
        <div className="mx-4 mt-4 ">
          <HomeComponent/>
          <WhoWeAre/>
          <OurDiverseServices/>
          <WhyChooseUs/>
          <JoinUs/>
          <ContactUs/>
      
        </div>
    )
}

