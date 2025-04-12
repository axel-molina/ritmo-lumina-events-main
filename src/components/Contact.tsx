import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      eventType: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Preparar los datos del template para EmailJS
    const templateParams = {
      to_email: "ivanmolina052@gmail.com",
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      event_type: formData.eventType,
      event_date: formData.date,
      message: formData.message,
    };

    // Enviar el email usando EmailJS
    emailjs
      .send(
        "service_54152k1", // Reemplazar con tu Service ID de EmailJS
        "template_4wni5bj", // Reemplazar con tu Template ID de EmailJS
        templateParams,
        "_ZcR8YQIc4O7rs_QY" // Reemplazar con tu Public Key de EmailJS
      )
      .then(() => {
        toast.success("¡Mensaje enviado con éxito! Te contactaremos pronto.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventType: "",
          date: "",
          message: "",
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al enviar el email:", error);
        toast.error(
          "Hubo un problema al enviar el mensaje. Inténtalo nuevamente."
        );
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Listo para hacer de tu evento algo inolvidable? Solicita una
            cotización personalizada y nos pondremos en contacto contigo a la
            brevedad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-border/50">
            <h3 className="text-2xl font-bold mb-6 text-dj-yellow">
              Solicita tu presupuesto
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Tu teléfono"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventType">Tipo de Evento</Label>
                  <Select
                    value={formData.eventType}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="birthday">Cumpleaños</SelectItem>
                      <SelectItem value="wedding">Boda</SelectItem>
                      <SelectItem value="corporate">
                        Evento Corporativo
                      </SelectItem>
                      <SelectItem value="fifteen">Fiesta de XV</SelectItem>
                      <SelectItem value="bachelor">
                        Despedida de Soltero/a
                      </SelectItem>
                      <SelectItem value="other">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Fecha del Evento</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntanos más sobre tu evento y necesidades..."
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-dj-yellow text-black hover:bg-dj-yellow/80"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar Solicitud"}
              </Button>
            </form>
          </div>

          <div className="lg:pl-8">
            <h3 className="text-2xl font-bold mb-6 text-dj-yellow">
              Información de Contacto
            </h3>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-dj-yellow/20 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-dj-yellow" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Llámanos</h4>
                  <p className="text-muted-foreground">(+54) 9 11 37761843</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-dj-yellow/20 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-dj-yellow" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">
                    ivanmolina052@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-dj-yellow/20 p-3 rounded-full mr-4">
                  <Calendar className="h-5 w-5 text-dj-yellow" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Horario de Atención</h4>
                  <p className="text-muted-foreground">
                    Lunes - Viernes: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-dj-yellow/20 p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-dj-yellow" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ubicación</h4>
                  <p className="text-muted-foreground">
                    Buenos Aires, Argentina
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-dj-yellow/10 rounded-lg border border-dj-yellow/30">
              <h4 className="font-semibold mb-2">¿Necesitas ayuda urgente?</h4>
              <p className="mb-4 text-sm">
                Contáctanos directamente por WhatsApp para una respuesta
                inmediata sobre disponibilidad y precios.
              </p>
              <Button
                variant="outline"
                className="border-dj-yellow text-dj-yellow hover:bg-dj-yellow hover:text-black"
                asChild
              >
                <a
                  href="https://wa.me/5491137761843?text=Hola,%20estoy%20interesado%20en%20contratar%20sus%20servicios%20para%20un%20evento."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contactar por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
