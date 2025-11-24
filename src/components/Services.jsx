import React from 'react';
import { motion } from 'framer-motion';
import { Plane, FileText, Map, Settings, Megaphone } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Plane className="w-10 h-10 text-planetour-blue" />,
            title: "Consolidación aérea",
            features: [
                "Acceso a múltiples aerolíneas",
                "Tarifas negociadas",
                "Asesoría en rutas y condiciones",
                "Manejo de cupos y disponibilidad"
            ]
        },
        {
            icon: <FileText className="w-10 h-10 text-planetour-blue" />,
            title: "Emisión y reservas",
            features: [
                "Cotización en tiempo real",
                "Manejo profesional de PNR",
                "Soporte en errores y voids",
                "Interpretación de reglas tarifarias"
            ]
        },
        {
            icon: <Map className="w-10 h-10 text-planetour-blue" />,
            title: "Paquetes y experiencias",
            features: [
                "Destinos nacionales e internacionales",
                "Programas todo incluido",
                "Información clara para la venta",
                "Productos estructurados"
            ]
        },
        {
            icon: <Settings className="w-10 h-10 text-planetour-blue" />,
            title: "Backoffice y soporte",
            features: [
                "Gestión de cambios y penalidades",
                "Manejo de casos especiales",
                "Seguimiento a solicitudes",
                "Tranquilidad operativa"
            ]
        },
        {
            icon: <Megaphone className="w-10 h-10 text-planetour-blue" />,
            title: "Acompañamiento comercial",
            features: [
                "Sugerencia de productos",
                "Apoyo en campañas",
                "Material gráfico y descriptivo",
                "Acciones conjuntas"
            ]
        }
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-planetour-blue mb-4">
                        Servicios para Agencias de Viaje
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Planetour ofrece un portafolio amplio diseñado exclusivamente para agencias. El foco está en la consolidación aérea, el apoyo operativo y el suministro de productos competitivos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-planetour-orange"
                        >
                            <div className="mb-6 bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                {service.title}
                            </h3>
                            <ul className="space-y-3">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-600">
                                        <span className="w-1.5 h-1.5 bg-planetour-orange rounded-full mr-2"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
