import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import BookingSimulator from './components/BookingSimulator';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SaintHerblain from './components/SaintHerblain';
import CityPage from './components/CityPage';
import LegalMentions from './components/LegalMentions';
import PrivacyPolicy from './components/PrivacyPolicy';
import { getCityBySlug, allCitySlugs } from './data/cities';
import { useState, useEffect } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [citySlug, setCitySlug] = useState('');

  useEffect(() => {
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    if (path === '/saint-herblain') {
      setCurrentPage('saint-herblain');
    } else if (path === '/mentions-legales') {
      setCurrentPage('legal');
    } else if (path === '/politique-confidentialite') {
      setCurrentPage('privacy');
    } else if (path !== '/') {
      const slug = path.slice(1);
      if (allCitySlugs.includes(slug)) {
        setCurrentPage('city');
        setCitySlug(slug);
      } else {
        setCurrentPage('home');
      }
    } else {
      setCurrentPage('home');
    }
  }, []);

  if (currentPage === 'saint-herblain') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20">
          <SaintHerblain />
        </div>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'city') {
    const city = getCityBySlug(citySlug);
    if (city) {
      return (
        <div className="min-h-screen bg-white">
          <Header />
          <div className="pt-20">
            <CityPage city={city} />
          </div>
          <Footer />
        </div>
      );
    }
  }

  if (currentPage === 'legal') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20">
          <LegalMentions />
        </div>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20">
          <PrivacyPolicy />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BookingSimulator />
      <Services />
      <Gallery />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
