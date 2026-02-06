import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: "https://mon-photobooth-nantes.fr/photobooth-nantes2.png",
      title: "Mariage Élégant",
      category: "Mariages"
    },
    {
      url: "https://mon-photobooth-nantes.fr/photobooth-nantes3.png",
      title: "Fête d'Anniversaire",
      category: "Anniversaires"
    },
    {
      url: "https://mon-photobooth-nantes.fr/photobooth.png",
      title: "Événement Corporate",
      category: "Entreprise"
    },
    {
      url: "https://mon-photobooth-nantes.fr/photobooth-nantes.png",
      title: "Soirée Privée",
      category: "Privé"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre photobooth premium en action à Nantes
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-4 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-[3/4] w-full min-w-0">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium text-[#f49c8a] mb-1">{image.category}</p>
                  <h3 className="text-lg font-bold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full-size view */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-[#f49c8a] transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="max-w-2xl max-h-full">
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {images[selectedImage].title}
                </h3>
                <p className="text-lg text-[#f49c8a]">
                  {images[selectedImage].category}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;