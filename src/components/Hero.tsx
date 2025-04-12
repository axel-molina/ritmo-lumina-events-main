
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section 
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
      style={{
        background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1574434312233-4444219fcf6e?q=80&w=1800&auto=format&fit=crop') center/cover no-repeat"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10"></div>
      
      {/* Light beams animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-dj-yellow/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-dj-yellow/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20 text-center">
        <motion.div 
          className="overflow-hidden mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-dj-yellow text-xl md:text-2xl font-medium">
            VIVE LA EXPERIENCIA
          </h2>
        </motion.div>
        
        <motion.div 
          className="overflow-hidden mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white">
            MOLI <motion.span 
                   className="text-dj-yellow"
                   animate={{ 
                     scale: [1, 1.1, 1],
                     textShadow: ["0px 0px 0px rgba(250, 204, 21, 0)", "0px 0px 10px rgba(250, 204, 21, 0.5)", "0px 0px 0px rgba(250, 204, 21, 0)"]
                   }}
                   transition={{ 
                     duration: 3, 
                     repeat: Infinity,
                     repeatDelay: 2
                   }}
                 >
                   DJ
                 </motion.span>
          </h1>
        </motion.div>
        
        <motion.div 
          className="overflow-hidden mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Servicios profesionales de DJ para todo tipo de eventos. Hacemos de tu celebración una experiencia inolvidable.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Button size="lg" asChild className="bg-dj-yellow text-black hover:bg-dj-yellow/80 text-lg px-8 py-6">
            <a href="#contact">Solicita tu presupuesto</a>
          </Button>
        </motion.div>
      </div>
      
      <motion.a 
        href="#services" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white hover:text-dj-yellow transition-colors"
        aria-label="Scroll to services"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-10 w-10" />
        </motion.div>
      </motion.a>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </motion.section>
  );
}
