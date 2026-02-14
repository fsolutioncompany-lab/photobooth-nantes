import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie & Julien",
      event: "Mariage - Ch\u00E2teau des Ducs de Bretagne",
      rating: 5,
      text: "Le photobooth a \u00E9t\u00E9 un \u00E9norme succ\u00E8s \u00E0 notre mariage ! L'\u00E9quipe \u00E9tait professionnelle et l'animation parfaite. Nos invit\u00E9s en parlent encore !",
      avatar: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Entreprise TechNantes",
      event: "S\u00E9minaire d'entreprise",
      rating: 5,
      text: "Service impeccable pour notre \u00E9v\u00E9nement corporate. Les photos \u00E9taient de qualit\u00E9 professionnelle et nos collaborateurs ont ador\u00E9 !",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Sophie",
      event: "Anniversaire des 30 ans",
      rating: 5,
      text: "Une exp\u00E9rience fantastique ! Le mat\u00E9riel \u00E9tait top, l'animateur g\u00E9nial, et les souvenirs cr\u00E9\u00E9s sont magiques. Je recommande vivement !",
      avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary-500 font-semibold text-sm tracking-wider uppercase mb-4">
            T\u00E9moignages
          </span>
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Ils nous font <span className="text-gradient">confiance</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            D\u00E9couvrez pourquoi nos clients \u00E0 Nantes nous recommandent pour leurs \u00E9v\u00E9nements les plus importants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center space-x-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-accent-400 fill-current" />
                ))}
              </div>

              <div className="mb-5">
                <Quote className="h-8 w-8 text-primary-200" />
              </div>

              <blockquote className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              <div className="flex items-center pt-5 border-t border-gray-100">
                <img
                  src={testimonial.avatar}
                  alt={`Avis client photobooth Nantes - ${testimonial.name}`}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-primary-100"
                  loading="lazy"
                />
                <div className="ml-3">
                  <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-primary-500 font-medium">{testimonial.event}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
