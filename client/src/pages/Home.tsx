import React, { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { QuickNav } from "@/components/sections/QuickNav";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Awards } from "@/components/sections/Awards";
import { Contact } from "@/components/sections/Contact";
import { DoctorBanner } from "@/components/sections/DoctorBanner";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";

export default function Home() {
  // Set page title and description for SEO
  useEffect(() => {
    // Set the document title
    document.title = "MyDoctor - Healthcare Services";
  }, []);

  return (
    <>
      <Helmet>
        <title>MyDoctor - Healthcare Services</title>
        <meta name="description" content="MyDoctor provides quality healthcare services with a team of experienced medical professionals. Our goal is to ensure you receive the best medical attention and care for your health needs." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        <main className="space-y-4 md:space-y-6 lg:space-y-8">
          <Hero />
          <Awards />
          <QuickNav />
          <About />
          <Services />
          <Testimonials />
          <Contact />
          <DoctorBanner />
        </main>
        <Footer />
      </div>
    </>
  );
}
