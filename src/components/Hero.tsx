
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
      style={{
        background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1574434312233-4444219fcf6e?q=80&w=1800&auto=format&fit=crop') center/cover no-repeat"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10"></div>
      
      {/* Light beams animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-dj-yellow/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-dj-yellow/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20 text-center">
        <div className="overflow-hidden mb-2">
          <h2 className="text-dj-yellow text-xl md:text-2xl font-medium animate-text-reveal" style={{ animationDelay: '0.3s' }}>
            VIVE LA EXPERIENCIA
          </h2>
        </div>
        
        <div className="overflow-hidden mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white animate-text-reveal" style={{ animationDelay: '0.6s' }}>
            RITMO <span className="text-dj-yellow">LUMINA</span>
          </h1>
        </div>
        
        <div className="overflow-hidden mb-8">
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-text-reveal" style={{ animationDelay: '0.9s' }}>
            Servicios profesionales de DJ para todo tipo de eventos. Hacemos de tu celebración una experiencia inolvidable.
          </p>
        </div>
        
        <div className="animate-text-reveal" style={{ animationDelay: '1.2s' }}>
          <Button size="lg" asChild className="bg-dj-yellow text-black hover:bg-dj-yellow/80 text-lg px-8 py-6">
            <a href="#contact">Solicita tu presupuesto</a>
          </Button>
        </div>
      </div>
      
      <a 
        href="#services" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white hover:text-dj-yellow transition-colors"
        aria-label="Scroll to services"
      >
        <ArrowDown className="h-10 w-10 animate-bounce" />
      </a>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
}
