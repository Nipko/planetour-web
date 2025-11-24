import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Globe, Users } from 'lucide-react';

const Certifications = () => {
    const certs = [
        { name: "Agencia Categoría Diamante Avianca", icon: <Award className="w-8 h-8" /> },
        { name: "Agencia Máster LATAM", icon: <Award className="w-8 h-8" /> },
        { name: "Asociado ANATO", icon: <Users className="w-8 h-8" /> },
        { name: "Asociado Travel Group", icon: <Users className="w-8 h-8" /> },
        { name: "Certificación IATA Internacional", icon: <Globe className="w-8 h-8" /> },
        { name: "Certificación PCI/PSI", icon: <ShieldCheck className="w-8 h-8" /> },
        { name: "Tecnología Travelport", icon: <Globe className="w-8 h-8" /> },
        { name: "Afiliación Fonturama", icon: <Users className="w-8 h-8" /> },
    ];

    return (
        <section id="certifications" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-planetour-blue mb-4">
                        Certificaciones y Alianzas
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Nuestro respaldo y solidez están garantizados por las principales entidades del sector turístico y aéreo.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
                        >
                            <div className="text-planetour-orange mb-3">
                                {cert.icon}
                            </div>
                            <h3 className="font-semibold text-gray-800 text-sm">
                                {cert.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
