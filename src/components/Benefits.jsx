import React from 'react';
import { TrendingUp, Monitor, Headphones, Users, Package, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Benefits = () => {
    const benefits = [
        {
            icon: <TrendingUp className="w-8 h-8 text-white" />,
            title: "Acceso a mejores tarifas aéreas",
            description: "Gracias a nuestras negociaciones como mayorista y al respaldo de certificaciones, accedemos a inventario y tarifas competitivas con distintas aerolíneas."
        },
        {
            icon: <Monitor className="w-8 h-8 text-white" />,
            title: "Tecnología Travelport",
            description: "Trabajamos sobre una base tecnológica robusta, usando Travelport como GDS para cotizar, reservar y emitir con agilidad y confianza."
        },
        {
            icon: <Headphones className="w-8 h-8 text-white" />,
            title: "Soporte real y especializado",
            description: "Nuestro equipo acompaña a las agencias en interpretación de reglas, cambios, reemisiones y manejo de casos especiales."
        },
        {
            icon: <Users className="w-8 h-8 text-white" />,
            title: "Enfoque 100 % en agencias",
            description: "Trabajamos exclusivamente bajo un modelo B2B. No comerciamos directamente con pasajeros finales, protegiendo tu relación comercial."
        },
        {
            icon: <Package className="w-8 h-8 text-white" />,
            title: "Portafolio listo para vender",
            description: "Productos estructurados en destinos como San Andrés, Amazonas, Caribe, USA y Europa, listos para facilitar tu venta."
        },
        {
            icon: <Award className="w-8 h-8 text-white" />,
            title: "Respaldo de certificaciones",
            description: "Categorías con aerolíneas, certificaciones internacionales y afiliaciones que generan confianza en agencias y viajeros."
        }
    ];

    return (
        <section id="benefits" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-planetour-blue mb-4"
                    >
                        ¿Por qué las agencias eligen Planetour?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600"
                    >
                        Planetour se especializa en respaldar a agencias de viajes que quieren crecer de forma profesional. Combinamos experiencia, tecnología y un enfoque 100% B2B.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                        >
                            <div className="w-14 h-14 bg-planetour-orange rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-orange-100">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
