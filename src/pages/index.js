// import Image from 'next/image'
'use client';

import AboutUs from "@/components/_pages/_homepage/AboutUs";
import Blogs from "@/components/_pages/_homepage/Blogs";
import BrandLogos from "@/components/_pages/_homepage/BrandLogos";
import DualCards from "@/components/_pages/_homepage/DualCards";
import GeneralQuestions from "@/components/_pages/_homepage/GeneralQuestions";
import HeroSection from "@/components/_pages/_homepage/HeroSection";
import JoinWithUs from "@/components/_pages/_homepage/JoinWithUs";
import TeamMembers from "@/components/_pages/_homepage/TeamMembers";
// import Testimonials from "@/components/_pages/_homepage/Testimonials";
import SchemesNavigator from "@/components/sections/SchemesNavigator";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <HeroSection />

      {/* dark brands section */}
      <BrandLogos />

      {/* about us */}
      <AboutUs />

      {/* Schemes */}
      <SchemesNavigator />

      {/* Team Member */}
      <TeamMembers />

      {/* Testimonial */}
      {/* <Testimonials /> */}

      {/* Join With Us */}
      <JoinWithUs />

      {/* dual cards */}
      <DualCards />

      {/* Frequently Asked Question */}
      <GeneralQuestions />

      {/* Blog & Airticle */}
      <Blogs />
    </>
  )
}
