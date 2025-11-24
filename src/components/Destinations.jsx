import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const Destinations = () => {
    const destinations = [
        {
            title: "San Andrés",
            subtitle: "Mar de siete colores",
            image: "https://images.unsplash.com/photo-1544015759-227629557b78?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            description: "Paquetes completos con tiquetes, alojamiento y tours como Johnny Cay y Acuario."
        },
        {
            title: "Amazonas",
            subtitle: "Gecko Aventura Extrema",
            image: "https://images.unsplash.com/photo-1591088398332-c587a3401f8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            description: "Circuitos de canopy, tubing en el río, caminatas por la selva y experiencias culturales."
        },
        {
            title: "Waldor's Hotel",
            subtitle: "Leticia, Amazonas",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            description: "Hotel boutique aliado con recepción 24h, ideal para descanso y trabajo en el Amazonas."
        },
        {
            title: "Internacional",
            subtitle: "USA, Europa y Caribe",
            image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            description: "Circuitos y paquetes a grandes ciudades y destinos de playa alrededor del mundo."
        }
    ];

    return (
        <section id="destinations" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-planetour-blue mb-4">
                        Destinos y Productos Destacados
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Planetour reúne productos propios y de aliados estratégicos, listos para que tu agencia los comercialice con facilidad.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {destinations.map((dest, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-96"
                        >
                            <img
                                src={dest.image}
                                alt={dest.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <div className="flex items-center text-planetour-orange mb-2">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    <span className="text-sm font-medium uppercase tracking-wider">{dest.subtitle}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{dest.title}</h3>
                                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                                    {dest.description}
                                </p>
                                <div className="flex items-center text-white font-medium group-hover:text-planetour-orange transition-colors">
                                    Ver detalles <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Destinations;
