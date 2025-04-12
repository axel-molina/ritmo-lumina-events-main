
import { Sparkles } from "lucide-react";

export default function Marquee() {
  const items = [
    "Bodas",
    "Cumpleaños",
    "XV Años",
    "Eventos Corporativos",
    "Despedidas",
    "Graduaciones",
    "Aniversarios",
    "Fiestas Temáticas"
  ];

  return (
    <div className="relative overflow-hidden py-6 bg-dj-yellow text-black">
      <div className="flex space-x-8 animate-marquee whitespace-nowrap">
        {items.concat(items).map((item, index) => (
          <div key={index} className="flex items-center text-lg font-medium">
            <Sparkles className="h-5 w-5 mr-2" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
