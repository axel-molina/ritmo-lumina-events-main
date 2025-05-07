import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";
import Marquee from "../components/Marquee";
import { useLocation } from "react-router-dom";

const Index = () => {
  // Set dark mode as default
  console.log("g");

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Index;
