import { MessageSquare } from "lucide-react";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5491122535533?text=Hola,%20estoy%20interesado%20en%20contratar%20sus%20servicios%20para%20un%20evento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
      <span className="sr-only">Contactar por WhatsApp</span>
    </a>
  );
}
