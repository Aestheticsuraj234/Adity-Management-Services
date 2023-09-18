"use client"
import React, { useState, useEffect } from 'react';
import HomeComponent from "@/components/Home/HomeComponent";
import WhoWeAre from "@/components/Home/WhoWeAre";
import OurDiverseServices from "@/components/Home/OurDiverseServices";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import JoinUs from "@/components/Home/JoinUs";
import ContactUs from "@/components/Home/Contact-Us";

const Home: React.FC = () => {
 

    return (
        <div className="mx-4 mt-4">
            <HomeComponent />
            <WhoWeAre />
            <OurDiverseServices />
            <WhyChooseUs />
            <JoinUs />
            <ContactUs />
        </div>
    );
}

export default Home;
