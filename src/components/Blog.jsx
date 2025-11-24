import React from 'react';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
    const articles = [
        {
            title: "Estrategias para vender más como agencia de viajes",
            category: "Negocios",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            excerpt: "Descubre las claves para aumentar tu rentabilidad y fidelizar a tus clientes en un mercado competitivo."
        },
        {
            title: "Guía completa: San Andrés Mar de siete colores",
            category: "Destinos",
            image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            excerpt: "Todo lo que necesitas saber para ofrecer la mejor experiencia a tus pasajeros en el Caribe colombiano."
        },
        {
            title: "Cómo explicar una tarifa aérea y sus restricciones",
            category: "Operaciones",
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            excerpt: "Tips prácticos para que tus clientes entiendan las condiciones de su tiquete y evites reclamos futuros."
        }
    ];

    return (
        <section id="blog" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-planetour-blue mb-4">
                            Blog y Actualidad
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            Contenido educativo y noticias del sector para mantenerte al día.
                        </p>
                    </div>
                    <a href="#" className="hidden md:flex items-center text-planetour-orange font-medium hover:text-orange-600">
                        Ver todos los artículos <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-2xl mb-4 h-64">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-planetour-blue uppercase tracking-wide">
                                    {article.category}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-planetour-orange transition-colors">
                                {article.title}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-2">
                                {article.excerpt}
                            </p>
                            <div className="flex items-center text-planetour-blue font-medium text-sm group-hover:underline">
                                Leer artículo <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a href="#" className="inline-flex items-center text-planetour-orange font-medium hover:text-orange-600">
                        Ver todos los artículos <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Blog;
