import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

import aldemarImg from '../assets/team/aldemar.jpg';
import orleyImg from '../assets/team/orley_.png';
import norbeyImg from '../assets/team/norbey_.png';
import eileenImg from '../assets/team/eileen.jpg';
import hectorImg from '../assets/team/hector_.png';

const About = () => {
    const team = [
        {
            name: "Aldemar Acuña",
            role: "CEO / Director",
            img: aldemarImg,
            desc: "Liderazgo estratégico y visión global para el crecimiento de Planetour."
        },
        {
            name: "Orley Acuña",
            role: "Gerente Operativo",
            img: orleyImg,
            desc: "Optimización de procesos y garantía de excelencia en cada operación."
        },
        {
            name: "Norbey Bolaños",
            role: "Contador",
            img: norbeyImg,
            desc: "Gestión financiera precisa y cumplimiento normativo riguroso."
        },
        {
            name: "Eileen Herrera",
            role: "Financiera",
            img: eileenImg,
            desc: "Planificación y control de recursos para la sostenibilidad financiera."
        },
        {
            name: "Hector Acuña",
            role: "Director de Tecnología",
            img: hectorImg,
            desc: "Innovación digital y soporte técnico para agencias conectadas."
        },
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-planetour-blue mb-6">
                            Quiénes Somos
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Planetour es una agencia mayorista y consolidadora aérea con presencia en diferentes regiones de Colombia, incluyendo operación en destinos clave como el Amazonas y San Andrés.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Nuestro enfoque es trabajar de la mano con las agencias de viajes para fortalecer su propuesta comercial, simplificar su operación diaria y mejorar su rentabilidad. Somos un aliado estratégico que se encarga de la parte compleja de la operación aérea.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <Target className="w-6 h-6 text-planetour-orange" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-semibold text-gray-900">Misión</h3>
                                    <p className="text-gray-600 mt-1">
                                        Impulsar el crecimiento de las agencias de viajes mediante soluciones tecnológicas, comerciales y operativas confiables.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <Eye className="w-6 h-6 text-planetour-orange" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-semibold text-gray-900">Visión</h3>
                                    <p className="text-gray-600 mt-1">
                                        Ser el consolidador mayorista de referencia en Colombia y la región, reconocido por su excelencia operativa e innovación.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <Heart className="w-6 h-6 text-planetour-orange" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-semibold text-gray-900">Valores</h3>
                                    <p className="text-gray-600 mt-1">
                                        Transparencia, Innovación, Servicio humano, Excelencia operativa y Compromiso con la agencia aliada.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                                alt="Team working together"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-planetour-blue/10 mix-blend-multiply"></div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-planetour-orange rounded-full opacity-20 blur-2xl"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-planetour-blue rounded-full opacity-20 blur-2xl"></div>
                    </motion.div>
                </div>

                {/* Team Section */}
                <div className="mt-24 border-t border-gray-100 pt-20">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-planetour-blue mb-4">Nuestro Equipo Directivo</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Conoce a los líderes que hacen posible nuestra misión de conectar y potenciar agencias.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center group w-full"
                            >
                                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:border-planetour-orange transition-all duration-300 transform group-hover:scale-105">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                                <p className="text-planetour-orange font-medium text-sm mb-3 uppercase tracking-wide">{member.role}</p>
                                <p className="text-gray-500 text-sm leading-relaxed px-2">{member.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
