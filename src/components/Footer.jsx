import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/logo_v3.png';

const Footer = () => {
    return (
        <footer className="bg-planetour-blue text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <img src={logo} alt="Planetour" className="h-12 w-auto mb-6 bg-white rounded-lg p-2" />
                        <p className="text-blue-200 mb-6">
                            Tu aliado mayorista en viajes y consolidación aérea. Potenciamos el crecimiento de tu agencia.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/waldors_hotel" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-blue-200 hover:text-white transition-colors">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-blue-200 hover:text-white transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6">Enlaces Rápidos</h3>
                        <ul className="space-y-3">
                            <li><a href="#home" className="text-blue-200 hover:text-white transition-colors">Inicio</a></li>
                            <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">Quiénes Somos</a></li>
                            <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Servicios</a></li>
                            <li><a href="#destinations" className="text-blue-200 hover:text-white transition-colors">Destinos</a></li>
                            <li><a href="#blog" className="text-blue-200 hover:text-white transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6">Aliados</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://www.instagram.com/waldors_hotel" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                                    Waldor's Hotel Boutique
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/geckoextreme" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                                    Gecko Aventura Extrema
                                </a>
                            </li>
                            <li>
                                <a href="https://linktr.ee/planetour" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                                    Linktree Planetour
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6">Contacto</h3>
                        <ul className="space-y-3 text-blue-200">
                            <li>info@planetour.com.co</li>
                            <li>+57 317 855 6909</li>
                            <li>Colombia</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-blue-800 pt-8 text-center text-blue-300 text-sm">
                    <p>© 2025 Planetour S.A.S. Todos los derechos reservados.</p>
                    <p className="mt-2">NIT: 900 616 343 | RNT: 30633</p>
                    <p className="mt-4 text-xs text-blue-400">
                        Desarrollado por: <a href="https://parallext.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Parallext.com</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
