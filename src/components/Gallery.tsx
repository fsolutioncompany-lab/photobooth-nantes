import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: "https://mon-photobooth-nantes.fr/photobooth-nantes2.png",
      title: "Photobooth Mariage Nantes",
      category: "Mariages",
      alt: "Location photobooth pour mariage élégant à Nantes - borne photo avec impressions"
    },
    {
      url: "https://mon-photobooth-nantes.fr/photobooth-nantes3.png",
      title: "Fête d'Anniversaire",
      category: "Anniversaires",
      alt: "Animation photobooth pour fête d'anniversaire à Nantes - accessoires et impressions"
    },
    {
      url: "https://mon-photobooth-nantes.fr/photobooth.png",
      title: "Événement Corporate",
      category: "Entreprise",
      alt: "Borne photo pour événement d'entreprise à Nantes - séminaire et team building"
    },
    {
      url: "https://mon-photobooth-nantes.fr/photobooth-nantes.png",
      title: "Soirée Privée",
      category: "Soirées",
      alt: "Location photobooth soirée privée Nantes Loire-Atlantique - photos et GIFs"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary-500 font-semibold text-sm tracking-wider uppercase mb-4">
            Galerie
          </span>
          <h2 id="gallery-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Nos <span className="text-gradient">réalisations</span> en images
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Découvrez notre photobooth premium en action lors d'événements à Nantes et sa région
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelectedImage(index)}
              role="button"
              tabIndex={0}
              aria-label={`Agrandir : ${image.title}`}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(index)}
            >
              <div className="aspect-[3/4] w-full">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ZoomIn className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-primary-400 text-xs font-semibold uppercase tracking-wider">{image.category}</span>
                  <h3 className="text-white text-lg font-bold mt-1">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-gray-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Photo : ${images[selectedImage].title}`}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-300"
              aria-label="Fermer la galerie"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="max-w-3xl max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].alt}
                className="w-full h-full object-contain rounded-2xl"
              />
              <div className="text-center mt-6">
                <span className="text-primary-400 text-sm font-semibold uppercase tracking-wider">
                  {images[selectedImage].category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {images[selectedImage].title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
