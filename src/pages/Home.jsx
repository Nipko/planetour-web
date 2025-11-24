import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Locations from '../components/Locations';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <Benefits />

            {/* Teaser Sections */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-planetour-blue mb-6">Explora más sobre Planetour</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                            <h3 className="text-xl font-bold mb-3">Nuestros Servicios</h3>
                            <p className="text-gray-600 mb-6">Descubre todo lo que podemos hacer por tu agencia.</p>
                            <Link to="/services" className="text-planetour-orange font-medium flex items-center justify-center hover:underline">
                                Ver servicios <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                        <div className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                            <h3 className="text-xl font-bold mb-3">Destinos</h3>
                            <p className="text-gray-600 mb-6">Conoce nuestros productos estrella y paquetes.</p>
                            <Link to="/destinations" className="text-planetour-orange font-medium flex items-center justify-center hover:underline">
                                Ver destinos <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                        <div className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                            <h3 className="text-xl font-bold mb-3">Capacitación</h3>
                            <p className="text-gray-600 mb-6">Recursos y herramientas para tu equipo.</p>
                            <Link to="/training" className="text-planetour-orange font-medium flex items-center justify-center hover:underline">
                                Ver recursos <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Locations />

            <Footer />
        </div>
    );
};

export default Home;
