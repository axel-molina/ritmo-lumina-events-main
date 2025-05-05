import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";
import Marquee from "../components/Marquee";

const Index = () => {
  // Set dark mode as default
  console.log("test push");
  console.log("test push  2");

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
