
import { Music, PartyPopper, Sparkles, Speaker, Users, ZapIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    title: "Fiestas de Cumpleaños",
    description: "Celebra tu día especial con música personalizada y efectos visuales que harán de tu cumpleaños una experiencia inolvidable.",
    icon: PartyPopper
  },
  {
    title: "Bodas & Ceremonias",
    description: "Desde la ceremonia hasta la recepción, creamos la atmósfera perfecta para cada momento de tu día especial.",
    icon: Sparkles
  },
  {
    title: "Eventos Corporativos",
    description: "Soluciones profesionales de audio e iluminación para presentaciones, conferencias y celebraciones empresariales.",
    icon: Users
  },
  {
    title: "Fiestas de XV años",
    description: "Hacemos que esta celebración única sea espectacular con efectos especiales, iluminación temática y la mejor música.",
    icon: Music
  },
  {
    title: "Despedidas de Soltero/a",
    description: "Creamos la atmósfera perfecta para una noche inolvidable con amigos antes del gran día.",
    icon: Speaker
  },
  {
    title: "Eventos Especiales",
    description: "Divorcios, graduaciones o cualquier celebración única merece un ambiente sonoro y visual a medida.",
    icon: ZapIcon
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background via-dj-dark to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestros <span className="text-dj-yellow">Servicios</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos soluciones completas de entretenimiento para cualquier tipo de evento, adaptándonos 
            a tus necesidades específicas y haciendo de tu celebración algo extraordinario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-border/50 bg-card/50 backdrop-blur-sm hover:border-dj-yellow/50 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="bg-dj-yellow/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-dj-yellow" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Equipamiento <span className="text-dj-yellow">Profesional</span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-dj-yellow/20 rounded-full p-1">
                    <Speaker className="h-5 w-5 text-dj-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sonido Profesional</h4>
                    <p className="text-muted-foreground">
                      Contamos con equipos de alta fidelidad para eventos grandes y pequeños, garantizando una experiencia sonora excepcional.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-dj-yellow/20 rounded-full p-1">
                    <Sparkles className="h-5 w-5 text-dj-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Iluminación Robótica</h4>
                    <p className="text-muted-foreground">
                      Luces robóticas y de última generación que transforman cualquier espacio en una pista de baile profesional.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-dj-yellow/20 rounded-full p-1">
                    <ZapIcon className="h-5 w-5 text-dj-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Efectos Especiales</h4>
                    <p className="text-muted-foreground">
                      Máquina de humo, burbujas, confeti y más para crear momentos espectaculares durante tu evento.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1000&auto=format&fit=crop" 
                alt="DJ Equipment" 
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
