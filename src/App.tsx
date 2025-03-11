import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Youtube, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Bastelprojekt 1"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1558432117-c1e278e0509d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Bastelprojekt 2"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Bastelprojekt 3"
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImpressum, setShowImpressum] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Gallery.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Gallery.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Gallery.length) % Gallery.length);
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute top-20 left-10 transform -rotate-12">
          <img 
            src="https://binebastelt.de/images/logo.png" 
            alt="" 
            className="w-32 h-32"
          />
        </div>
        <div className="absolute top-40 right-20 transform rotate-45">
          <img 
            src="https://raw.githubusercontent.com/stackblitz/stackblitz-handbook/main/docs/assets/binebastelt-logo.png" 
            alt="" 
            className="w-24 h-24"
          />
        </div>
        <div className="absolute bottom-40 left-1/4 transform -rotate-90">
          <img 
            src="https://raw.githubusercontent.com/stackblitz/stackblitz-handbook/main/docs/assets/binebastelt-logo.png" 
            alt="" 
            className="w-40 h-40"
          />
        </div>
        <div className="absolute bottom-20 right-1/3 transform rotate-12">
          <img 
            src="https://raw.githubusercontent.com/stackblitz/stackblitz-handbook/main/docs/assets/binebastelt-logo.png" 
            alt="" 
            className="w-28 h-28"
          />
        </div>
      </div>

      {/* Header - Now with logo */}
      <header className="fixed top-0 left-0 right-0 bg-gray-800/95 backdrop-blur-sm py-4 shadow-lg border-b border-pink-500/10 z-50">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="flex items-center gap-4">
            <img 
              src="https://raw.githubusercontent.com/stackblitz/stackblitz-handbook/main/docs/assets/binebastelt-logo.png" 
              alt="binebastelt Logo" 
              className="h-12 w-auto"
            />
            <h1 className="text-4xl font-bold text-pink-500 tracking-tight">binebastelt</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 pt-24 relative z-10">
        {/* Welcome Section */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-pink-400 mb-4">Willkommen in meiner kreativen Welt!</h2>
          <p className="text-gray-300">Hier findest du Inspiration und tolle Bastelprojekte</p>
        </section>

        {/* Gallery */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-pink-400 mb-6 text-center">Meine Projekte</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={Gallery[currentIndex].url} 
                alt={Gallery[currentIndex].title}
                className="w-full h-[500px] object-cover transition-opacity duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-xl font-medium text-white">{Gallery[currentIndex].title}</h3>
              </div>
              
              {/* Navigation Buttons */}
              <button 
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-4">
              {Gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-pink-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Shop Button */}
        <section className="text-center mb-12">
          <a 
            href="#shop" 
            className="inline-flex items-center px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-lg"
          >
            <ShoppingBag className="mr-2" />
            Zum Shop
          </a>
        </section>

        {/* Social Media */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-pink-400 mb-6">Folge mir</h2>
          <div className="flex justify-center space-x-6">
            <a href="#instagram" className="text-pink-400 hover:text-pink-300 transition-colors duration-300">
              <Instagram size={32} />
            </a>
            <a href="#facebook" className="text-pink-400 hover:text-pink-300 transition-colors duration-300">
              <Facebook size={32} />
            </a>
            <a href="#youtube" className="text-pink-400 hover:text-pink-300 transition-colors duration-300">
              <Youtube size={32} />
            </a>
          </div>
        </section>

        {/* Impressum Modal */}
        {showImpressum && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <h2 className="text-2xl font-bold text-pink-400 mb-6">Impressum</h2>
              <div className="text-gray-300 space-y-4">
                <section>
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">Angaben gemäß § 5 TMG</h3>
                  <p>[Ihr Vorname Nachname]</p>
                  <p>[Straße Nr.]</p>
                  <p>[PLZ Ort]</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">Kontakt</h3>
                  <p>Telefon: [Ihre Telefonnummer]</p>
                  <p>E-Mail: [Ihre E-Mail-Adresse]</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">Umsatzsteuer-ID</h3>
                  <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                  <p>[Ihre USt-IdNr.]</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">Redaktionell Verantwortlicher</h3>
                  <p>[Ihr Vorname Nachname]</p>
                  <p>[Straße Nr.]</p>
                  <p>[PLZ Ort]</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
                  <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                </section>
              </div>
              <button 
                onClick={() => setShowImpressum(false)}
                className="mt-6 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors duration-300"
              >
                Schließen
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 mt-12 border-t border-pink-500/10 relative z-10">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 binebastelt. Alle Rechte vorbehalten.</p>
          <button 
            onClick={() => setShowImpressum(true)}
            className="text-pink-400 hover:text-pink-300 transition-colors duration-300 mt-2"
          >
            Impressum
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;