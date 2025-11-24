import React from 'react';
import { Video, Download, MessageCircle } from 'lucide-react';

const Training = () => {
    return (
        <section id="training" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-planetour-blue mb-4">
                        Capacitación y Soporte
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        No solo vendemos productos, acompañamos el desarrollo profesional de tu equipo con herramientas y conocimiento.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-blue-50 rounded-2xl p-8 text-center hover:bg-blue-100 transition-colors">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-planetour-blue shadow-sm">
                            <Video className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Webinars y Entrenamientos</h3>
                        <p className="text-gray-600">
                            Sesiones virtuales sobre destinos, uso de sistemas de emisión y actualizaciones de políticas.
                        </p>
                    </div>

                    <div className="bg-orange-50 rounded-2xl p-8 text-center hover:bg-orange-100 transition-colors">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-planetour-orange shadow-sm">
                            <Download className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Material Descargable</h3>
                        <p className="text-gray-600">
                            Fichas técnicas, guías rápidas, argumentos de venta y material gráfico para tus redes.
                        </p>
                    </div>

                    <div className="bg-blue-50 rounded-2xl p-8 text-center hover:bg-blue-100 transition-colors">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-planetour-blue shadow-sm">
                            <MessageCircle className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Soporte Personalizado</h3>
                        <p className="text-gray-600">
                            Canales directos vía WhatsApp y correo para acompañarte en cotizaciones y postventa.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Training;
