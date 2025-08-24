import React from "react";
import Navbar from "./components/Navbar";
import LandingCarousel from "./components/LandingCarousel";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <LandingCarousel />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      {/* <Clients /> */}
      <Testimonials />
      <Contact />
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsappButton />
    </div>
  );
}
