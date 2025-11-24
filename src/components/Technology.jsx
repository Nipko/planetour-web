import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, MessageSquare, BarChart } from 'lucide-react';

const Technology = () => {
    const features = [
        {
            icon: <Server className="w-8 h-8 text-planetour-orange" />,
            title: "Plataforma Travelport",
            description: "Sistema central para acceso a inventario global, información en tiempo real y procesos de emisión confiables."
        },
        {
            icon: <Layout className="w-8 h-8 text-planetour-orange" />,
            title: "Portal para agencias",
            description: "Espacio privado con acceso a documentación, fichas técnicas, promociones y material de capacitación."
        },
        {
            icon: <MessageSquare className="w-8 h-8 text-planetour-orange" />,
            title: "Automatización",
            description: "Flujos automáticos de respuesta y canales integrados para una atención ágil sin perder el toque humano."
        },
        {
            icon: <BarChart className="w-8 h-8 text-planetour-orange" />,
            title: "Reportes y métricas",
            description: "Análisis de ventas y reportes detallados para identificar oportunidades y ajustar estrategias comerciales."
        }
    ];

    return (
        <section id="technology" className="py-20 bg-planetour-blue text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center mix-blend-overlay"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Tecnología y Automatización
                        </h2>
                        <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                            Planetour combina la experiencia humana con herramientas tecnológicas de vanguardia para que las agencias trabajen con mayor eficiencia, seguridad y rentabilidad.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
                                    <div className="mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-blue-100 text-sm">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="hidden lg:block relative"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="Technology dashboard"
                            className="rounded-2xl shadow-2xl border-4 border-white/10"
                        />
                        <div className="absolute -bottom-10 -left-10 bg-planetour-orange p-6 rounded-xl shadow-xl max-w-xs">
                            <p className="font-bold text-lg">"Tecnología que simplifica tu operación diaria"</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Technology;
