import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
            title: <>Planetour: tu aliado mayorista en <span className="text-planetour-orange">viajes y consolidación aérea</span></>,
            subtitle: "Potenciamos agencias de viajes con tarifas preferenciales, tecnología avanzada y soporte experto.",
            ctaPrimary: "Quiero afiliar mi agencia",
            ctaSecondary: "Agencias registradas",
            features: [
                "Tarifas competitivas y preferenciales",
                "Tecnología Travelport ágil y segura",
                "Certificaciones internacionales"
            ]
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1582774160205-58d1d43343b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            title: <>San Andrés: <span className="text-planetour-orange">El Mar de los Siete Colores</span> te espera</>,
            subtitle: "Paquetes exclusivos para tus pasajeros con las mejores tarifas del mercado. ¡Aprovecha la temporada!",
            ctaPrimary: "Ver paquetes San Andrés",
            ctaSecondary: "Descargar tarifario",
            features: [
                "Hoteles seleccionados",
                "Tours incluidos (Johnny Cay, Acuario)",
                "Asistencia al viajero"
            ]
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1591088398332-c587a3401f8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            title: <>Vive la magia del <span className="text-planetour-orange">Amazonas</span> con Gecko Aventura</>,
            subtitle: "Conecta a tus clientes con la naturaleza. Experiencias únicas en Leticia y la selva amazónica.",
            ctaPrimary: "Ver planes Amazonas",
            ctaSecondary: "Conocer Gecko Aventura",
            features: [
                "Alojamiento en selva",
                "Avistamiento de delfines",
                "Cultura indígena"
            ]
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div id="home" className="relative bg-white pt-20 overflow-hidden h-[800px] md:h-[700px]">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        className="w-full h-full object-cover opacity-20"
                        src={slides[currentSlide].image}
                        alt="Slide background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
                </motion.div>
            </AnimatePresence>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="lg:w-2/3">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-planetour-blue leading-tight mb-6">
                                {slides[currentSlide].title}
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 font-medium max-w-2xl">
                                {slides[currentSlide].subtitle}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                                {slides[currentSlide].features.map((item, index) => (
                                    <div key={index} className="flex items-center text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-planetour-orange mr-2 flex-shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#contact"
                                    className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-planetour-orange hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
                                >
                                    {slides[currentSlide].ctaPrimary}
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex justify-center items-center px-8 py-4 border-2 border-planetour-blue text-lg font-medium rounded-full text-planetour-blue bg-transparent hover:bg-planetour-blue hover:text-white transition-all"
                                >
                                    {slides[currentSlide].ctaSecondary}
                                </a>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-10 right-10 z-20 flex space-x-4">
                <button
                    onClick={prevSlide}
                    className="p-3 rounded-full bg-white/80 hover:bg-white text-planetour-blue shadow-lg transition-all hover:scale-110"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-3 rounded-full bg-planetour-orange text-white shadow-lg transition-all hover:scale-110 hover:bg-orange-600"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-planetour-orange w-8' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;
