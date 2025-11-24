import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

const DestinationCarousel = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group">
            <AnimatePresence mode='wait'>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`${title} - Image ${currentIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    );
};

const DestinationsPage = () => {
    const destinations = [
        {
            title: "San Andrés",
            subtitle: "Mar de siete colores",
            description: "El destino caribeño por excelencia. Ofrecemos paquetes completos que incluyen tiquetes aéreos, alojamiento en hoteles seleccionados y tours imperdibles como Johnny Cay y el Acuario.",
            features: ["Tiquetes ida y regreso", "Alojamiento seleccionado", "Tours Johnny Cay y Acuario", "Traslados y asistencia"],
            images: [
                "https://images.unsplash.com/photo-1544015759-227629557b78?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1445964047600-cdbdb873673d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            ]
        },
        {
            title: "Amazonas",
            subtitle: "Gecko Aventura Extrema",
            description: "Conecta con la naturaleza en su estado más puro. Nuestros planes con Gecko Aventura incluyen actividades emocionantes como canopy, tubing en el río y caminatas por la selva.",
            features: ["Alojamiento en selva", "Circuitos de canopy", "Avistamiento de fauna", "Experiencias culturales"],
            images: [
                "https://images.unsplash.com/photo-1591088398332-c587a3401f8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1628625180986-99403d36691c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1544985336-3921869d2739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            ]
        },
        {
            title: "Waldor's Hotel",
            subtitle: "Leticia, Amazonas",
            description: "Un oasis de comodidad en el corazón del Amazonas. Hotel boutique con recepción 24 horas, ideal para viajeros que buscan descanso y conectividad en Leticia.",
            features: ["Recepción 24h", "Wifi y zonas de trabajo", "Ubicación estratégica", "Ambiente boutique"],
            images: [
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            ]
        },
        {
            title: "Internacional",
            subtitle: "USA, Europa y Caribe",
            description: "Lleva a tus pasajeros más lejos. Contamos con circuitos y paquetes a las principales ciudades de Estados Unidos, capitales europeas y playas del Caribe.",
            features: ["Circuitos por Europa", "Paquetes a Disney/Miami", "Playas de Cancún y Punta Cana", "Cruceros"],
            images: [
                "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1499856871940-b3dedf651995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-planetour-blue mb-6">
                        Nuestros Destinos y Productos
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explora nuestro portafolio de productos propios y aliados estratégicos. Cada experiencia está diseñada para facilitar tu venta y encantar a tus pasajeros.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {destinations.map((dest, index) => (
                        <div key={index} className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                            <DestinationCarousel images={dest.images} title={dest.title} />

                            <div className="p-8">
                                <div className="flex items-center text-planetour-orange mb-3">
                                    <MapPin className="w-5 h-5 mr-2" />
                                    <span className="font-bold uppercase tracking-wide">{dest.subtitle}</span>
                                </div>

                                <h2 className="text-3xl font-bold text-gray-900 mb-4">{dest.title}</h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {dest.description}
                                </p>

                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="font-semibold text-gray-900 mb-4">¿Qué incluye?</h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {dest.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-gray-700 text-sm">
                                                <CheckCircle className="w-4 h-4 text-planetour-orange mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DestinationsPage;
