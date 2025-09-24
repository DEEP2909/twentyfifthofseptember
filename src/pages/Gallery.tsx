import { useState } from "react";
import { Heart, X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/lovable-uploads/4c178a8f-7393-402b-bd74-3bdfdb956414.png",
      alt: "Sweet moments together",
      caption: "Every smile with you is a treasure"
    },
    {
      src: "/lovable-uploads/5d44ffce-f9b4-4e27-882e-6781e1aa7e8e.png", 
      alt: "Traditional beautiful moment",
      caption: "In traditional elegance, our love shines brightest"
    },
    {
      src: "/lovable-uploads/61090ae3-253b-4025-9a85-67b7e35ffcb9.png",
      alt: "Romantic portrait",
      caption: "Lost in each other's eyes"
    },
    {
      src: "/lovable-uploads/761d5923-3cbc-4838-aae5-40a8a881e17e.png",
      alt: "Beautiful traditional look",
      caption: "Beauty that takes my breath away"
    },
    {
      src: "/lovable-uploads/34843ce8-01ca-40cb-9101-da848a1865ae.png",
      alt: "Elegant portrait",
      caption: "Grace and beauty personified"
    },
    {
      src: "/lovable-uploads/066d98b8-8fa2-4b61-9bfb-78d4699c1c93.png",
      alt: "Temple visit together",
      caption: "Blessed moments together"
    },
    {
      src: "/lovable-uploads/6f460eb7-7d4a-49ce-998b-a5afdce0f20f.png",
      alt: "By the water",
      caption: "The nature's Beauty resides in You"
    },
    {
      src: "/lovable-uploads/5b79de7f-544c-4e7e-b491-95b164be34d3.png",
      alt: "Happy moments",
      caption: "Laughter and joy with you"
    },
    {
      src: "/lovable-uploads/66d8a4db-85f1-4380-b9d7-5f6172c6989d.png",
      alt: "Beautiful in blue",
      caption: "You make every color more beautiful"
    },
    {
      src: "/lovable-uploads/b5127e76-8204-4d46-b8c9-236c0eab89b7.png",
      alt: "Sweet selfie",
      caption: "Simple moments, endless love"
    }
  ];

  return (
    <div className="min-h-screen romantic-bg floating-hearts">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Heart className="w-8 h-8 text-primary animate-pulse-slow" fill="currentColor" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Our Beautiful Journey
            </h1>
            <Heart className="w-8 h-8 text-primary animate-pulse-slow" fill="currentColor" />
          </div>
          
          {/* Congratulatory Messages */}
          <div className="romantic-card max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              🎉 Congratulations for Completing 2 Years of talking Milestone! 🎉
            </h2>
            <p className="text-lg text-muted-foreground">
              Thanks for Tolerating me for two years, but still a whole life is remaining! 💕😊🥰
            </p>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every picture tells a story, every moment is a memory, every memory is a treasure 💕
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="romantic-card p-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-xl"
                  loading="lazy"
                />
                <div className="p-4">
                  <p className="text-sm text-muted-foreground text-center italic">
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <div className="text-center animate-fade-in">
          <div className="romantic-card max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Thank You for Being You ✨
            </h2>
            <p className="text-lg text-muted-foreground">
              These moments captured in time remind me why every day with you is a gift. 
              Here's to many more beautiful memories together! 💖
            </p>
          </div>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;