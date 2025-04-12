
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { PlayCircle } from "lucide-react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop",
    caption: "Wedding celebration"
  },
  {
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
    caption: "Corporate event"
  },
  {
    url: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop",
    caption: "Birthday party"
  },
  {
    url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop",
    caption: "Club night"
  },
  {
    url: "https://images.unsplash.com/photo-1574434312233-4444219fcf6e?q=80&w=1000&auto=format&fit=crop",
    caption: "DJ setup"
  },
  {
    url: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1000&auto=format&fit=crop",
    caption: "Festival performance"
  },
];

const videos = [
  {
    thumbnail: "https://images.unsplash.com/photo-1571266028243-3583ed4e26ac?q=80&w=1000&auto=format&fit=crop",
    videoId: "iJQdj5ETj_k",
    title: "Corporate Event Highlights"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000&auto=format&fit=crop",
    videoId: "3K_Kag-Q56I",
    title: "Wedding DJ Performance"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1496389395181-e5fdd5c0315e?q=80&w=1000&auto=format&fit=crop",
    videoId: "43SZBrpvjMU",
    title: "Birthday Party Setup"
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background via-dj-dark to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestra <span className="text-dj-yellow">Galería</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Revive algunos de nuestros mejores momentos en diversos eventos y celebraciones.
          </p>
        </div>

        <Tabs defaultValue="photos" className="max-w-5xl mx-auto">
          <TabsList className="w-full max-w-md mx-auto mb-8 bg-secondary/50 backdrop-blur-sm">
            <TabsTrigger value="photos" className="flex-1">Fotos</TabsTrigger>
            <TabsTrigger value="videos" className="flex-1">Videos</TabsTrigger>
          </TabsList>
          
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
          
          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <div 
                  key={index}
                  className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => setPlayingVideo(video.videoId)}
                >
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle className="h-16 w-16 text-dj-yellow mb-2" />
                    <p className="text-white font-medium text-center px-4">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-0">
          <img 
            src={selectedImage || ""} 
            alt="Gallery image" 
            className="w-full h-auto object-contain max-h-[80vh]"
          />
        </DialogContent>
      </Dialog>

      <Dialog open={!!playingVideo} onOpenChange={() => setPlayingVideo(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-0">
          {playingVideo && (
            <iframe
              src={`https://www.youtube.com/embed/${playingVideo}?autoplay=1&mute=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video"
            ></iframe>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
