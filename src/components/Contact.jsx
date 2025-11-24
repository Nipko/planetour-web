import React, { useState } from 'react';
import { Send, Phone, Mail, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        agencyName: '',
        nit: '',
        location: '',
        contactPerson: '',
        position: '',
        phone: '',
        email: '',
        interests: {
            consolidation: false,
            packages: false,
            technology: false,
            others: false
        },
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }

        if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                interests: {
                    ...prev.interests,
                    [name]: checked
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9+\-\s()]*$/;

        if (!formData.agencyName.trim()) newErrors.agencyName = 'El nombre de la agencia es obligatorio';
        if (!formData.nit.trim()) newErrors.nit = 'El NIT es obligatorio';
        if (!formData.location.trim()) newErrors.location = 'La ciudad/país es obligatoria';
        if (!formData.contactPerson.trim()) newErrors.contactPerson = 'El nombre de contacto es obligatorio';
        if (!formData.position.trim()) newErrors.position = 'El cargo es obligatorio';

        if (!formData.phone.trim()) {
            newErrors.phone = 'El teléfono es obligatorio';
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Ingresa un número de teléfono válido';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'El correo electrónico es obligatorio';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Ingresa un correo electrónico válido';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus(null);

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Prepare template parameters
        const templateParams = {
            agency_name: formData.agencyName,
            nit: formData.nit,
            location: formData.location,
            contact_person: formData.contactPerson,
            position: formData.position,
            phone: formData.phone,
            email: formData.email,
            interests: Object.entries(formData.interests)
                .filter(([_, value]) => value)
                .map(([key]) => {
                    const labels = {
                        consolidation: 'Consolidación aérea',
                        packages: 'Paquetes y experiencias',
                        technology: 'Tecnología y automatización',
                        others: 'Otros'
                    };
                    return labels[key];
                })
                .join(', '),
            message: formData.message
        };

        try {
            await emailjs.send(
                'service_1fd5adm',
                'template_gwjgb8j',
                templateParams,
                '7LhVH-z5UsWfMS0k9'
            );
            setSubmitStatus('success');
            setFormData({
                agencyName: '',
                nit: '',
                location: '',
                contactPerson: '',
                position: '',
                phone: '',
                email: '',
                interests: {
                    consolidation: false,
                    packages: false,
                    technology: false,
                    others: false
                },
                message: ''
            });
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-planetour-blue mb-6">
                            ¿Eres una agencia de viajes y quieres trabajar con Planetour?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Completa el siguiente formulario y uno de nuestros asesores se pondrá en contacto contigo para contarte cómo podemos apoyar tu operación y tu crecimiento.
                        </p>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Canales de contacto</h3>
                            <div className="space-y-4">
                                <div className="flex items-center text-gray-600">
                                    <Mail className="w-5 h-5 text-planetour-orange mr-3" />
                                    <span>info@planetour.com.co</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <Phone className="w-5 h-5 text-planetour-orange mr-3" />
                                    <span>Línea de atención agencias: +57 317 855 6909</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg">
                        {submitStatus === 'success' ? (
                            <div className="text-center py-12">
                                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje enviado!</h3>
                                <p className="text-gray-600 mb-6">
                                    Gracias por tu interés. Hemos recibido tu solicitud y pronto nos pondremos en contacto contigo.
                                </p>
                                <button
                                    onClick={() => setSubmitStatus(null)}
                                    className="text-planetour-orange font-semibold hover:text-orange-600"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de la agencia *</label>
                                        <input
                                            type="text"
                                            name="agencyName"
                                            value={formData.agencyName}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-planetour-orange focus:border-transparent outline-none transition-all ${errors.agencyName ? 'border-red-500' : 'border-gray-300'}`}
                                            onChange={handleChange}
                                        />
                                        {errors.agencyName && <p className="text-red-500 text-xs mt-1">{errors.agencyName}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">NIT *</label>
                                        <input
                                            type="text"
                                            name="nit"
                                            value={formData.nit}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-planetour-orange focus:border-transparent outline-none transition-all ${errors.nit ? 'border-red-500' : 'border-gray-300'}`}
                                            onChange={handleChange}
                                        />
                                        {errors.nit && <p className="text-red-500 text-xs mt-1">{errors.nit}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad / País *</label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-planetour-orange focus:border-transparent outline-none transition-all ${errors.location ? 'border-red-500' : 'border-gray-300'}`}
                                            onChange={handleChange}
                                        />
                                        {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de contacto *</label>
                                        <input
                                            type="text"
                                            name="contactPerson"
                                            value={formData.contactPerson}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-planetour-orange focus:border-transparent outline-none transition-all ${errors.contactPerson ? 'border-red-500' : 'border-gray-300'}`}
                                            onChange={handleChange}
                                        />
                                        {errors.contactPerson && <p className="text-red-500 text-xs mt-1">{errors.contactPerson}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Cargo *</label>
                                        <input
                                            type="text"
                                            name="position"
                                            value={formData.position}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-planetour-orange focus:border-transparent outline-none transition-all ${errors.position ? 'border-red-500' : 'border-gray-300'}`}
                                            onChange={handleChange}
                                        />
                                        {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono / WhatsApp *</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-planetour-orange focus:border-transparent outline-none transition-all ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                            onChange={handleChange}
                                        />
                                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-planetour-orange focus:border-transparent outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">¿Qué te interesa?</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <label className="flex items-center space-x-3 cursor-pointer">
                                            <input type="checkbox" name="consolidation" checked={formData.interests.consolidation} className="w-5 h-5 text-planetour-orange rounded focus:ring-planetour-orange" onChange={handleChange} />
                                            <span className="text-gray-600">Consolidación aérea</span>
                                        </label>
                                        <label className="flex items-center space-x-3 cursor-pointer">
                                            <input type="checkbox" name="packages" checked={formData.interests.packages} className="w-5 h-5 text-planetour-orange rounded focus:ring-planetour-orange" onChange={handleChange} />
                                            <span className="text-gray-600">Paquetes y experiencias</span>
                                        </label>
                                        <label className="flex items-center space-x-3 cursor-pointer">
                                            <input type="checkbox" name="technology" checked={formData.interests.technology} className="w-5 h-5 text-planetour-orange rounded focus:ring-planetour-orange" onChange={handleChange} />
                                            <span className="text-gray-600">Tecnología y automatización</span>
                                        </label>
                                        <label className="flex items-center space-x-3 cursor-pointer">
                                            <input type="checkbox" name="others" checked={formData.interests.others} className="w-5 h-5 text-planetour-orange rounded focus:ring-planetour-orange" onChange={handleChange} />
                                            <span className="text-gray-600">Otros</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje adicional</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        rows="4"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-planetour-orange focus:border-transparent outline-none transition-all"
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                {submitStatus === 'error' && (
                                    <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center">
                                        <AlertCircle className="w-5 h-5 mr-2" />
                                        Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-planetour-orange text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            Enviar solicitud de afiliación
                                            <Send className="w-5 h-5 ml-2" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
