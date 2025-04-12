import React, { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { PlayCircle } from "lucide-react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop",
    caption: "Wedding celebration",
  },
  {
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
    caption: "Corporate event",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm_axMrKb73tm5GYni5BecnhLjrsUqAK1RDg&s",
    caption: "Birthday party",
  },
  {
    url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop",
    caption: "Club night",
  },
  {
    url: "https://cdn0.casamientos.com.ar/vendor/6330/3_2/960/jpeg/5fafdf49-661b-4536-81ac-27fc84a8d645_7_176330-167915301060733.jpeg",
    caption: "DJ setup",
  },
  {
    url: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1000&auto=format&fit=crop",
    caption: "Festival performance",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-background via-dj-dark to-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestra <span className="text-dj-yellow">Galería</span>
          </h2>
        </div>

        <Tabs defaultValue="photos" className="max-w-5xl mx-auto">
          <TabsContent value="photos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white font-medium">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-0">
          <img
            src={selectedImage || ""}
            alt="Gallery image"
            className="w-full h-auto object-contain max-h-[80vh]"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
}
