import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo_v3.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Inicio', href: '/' },
        { name: 'Nosotros', href: '/about' },
        { name: 'Servicios', href: '/services' },
        { name: 'Destinos', href: '/destinations' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contacto', href: '/contact' },
    ];

    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/">
                            <img src={logo} alt="Planetour" className="h-12 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`${isActive(link.href) ? 'text-planetour-orange font-bold' : 'text-gray-600 font-medium'
                                    } hover:text-planetour-orange transition-colors`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="bg-planetour-blue text-white px-6 py-2.5 rounded-full font-medium hover:bg-planetour-lightBlue transition-colors"
                        >
                            Afiliar Agencia
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-planetour-orange focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`block px-3 py-3 text-base font-medium rounded-md ${isActive(link.href)
                                    ? 'text-planetour-orange bg-orange-50'
                                    : 'text-gray-600 hover:text-planetour-orange hover:bg-gray-50'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Link
                                to="/contact"
                                className="block w-full text-center bg-planetour-blue text-white px-6 py-3 rounded-full font-medium hover:bg-planetour-lightBlue transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Afiliar Agencia
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
