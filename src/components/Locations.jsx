import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Phone, MapPin } from 'lucide-react';

// Fix for default marker icon in React Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom Planetour Icon (SVG Data URI)
const planetourIconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F58220" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10" fill="#F58220" />
  <path d="M2 12h20" stroke="white" stroke-width="2" />
  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="white" stroke-width="2"/>
</svg>
`;

const planetourIcon = new L.Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(planetourIconSvg)}`,
    iconSize: [35, 35],
    iconAnchor: [17, 17],
    popupAnchor: [0, -17]
});

const Locations = () => {
    const mainOffices = [
        {
            city: "Leticia - Amazonas",
            address: "Calle 7 #10-36",
            phone: "314 217 5133",
            desc: "Puerta de entrada a la Amazonía colombiana, esencial para el ecoturismo y la conexión con la naturaleza.",
            coords: [-4.2153, -69.9406],
            type: "main"
        },
        {
            city: "Yopal - Casanare",
            address: "Kra 22 # 8-19, Local 2",
            phone: "312 552 8869",
            desc: "Corazón de los Llanos Orientales, centro de desarrollo y turismo de aventura y naturaleza.",
            coords: [5.3378, -72.3959],
            type: "main"
        },
        {
            city: "San Andrés Islas",
            address: "Edificio los cedros, Av los libertadores",
            phone: "312 635 9743",
            desc: "Joya del Caribe colombiano, destino de sol y playa por excelencia con su mar de siete colores.",
            coords: [12.5847, -81.7006],
            type: "main"
        }
    ];

    const allies = [
        { city: "Bogotá", coords: [4.7110, -74.0721] },
        { city: "Cali", coords: [3.4516, -76.5320] },
        { city: "Florencia", coords: [1.6175, -75.6063] },
        { city: "Cartagena", coords: [10.3910, -75.4794] },
        { city: "Santa Marta", coords: [11.2408, -74.1990] },
        { city: "Pasto", coords: [1.2136, -77.2811] }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-planetour-blue mb-4">
                        Nuestras Sedes y Cobertura
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Estamos presentes en regiones estratégicas de Colombia para brindarte el mejor soporte local.
                    </p>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {mainOffices.map((office, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-planetour-orange">
                            <h3 className="text-xl font-bold text-planetour-blue mb-4">{office.city}</h3>
                            <div className="space-y-3 text-gray-600 mb-6">
                                <div className="flex items-start">
                                    <MapPin className="w-5 h-5 text-planetour-orange mr-2 flex-shrink-0 mt-1" />
                                    <span className="text-sm">{office.address}</span>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 text-planetour-orange mr-2 flex-shrink-0" />
                                    <span className="text-sm font-medium">{office.phone}</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 italic border-l-2 border-gray-200 pl-4">
                                "{office.desc}"
                            </p>
                        </div>
                    ))}
                </div>

                {/* Map Section */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-[600px] relative z-0">
                    <MapContainer
                        center={[4.5709, -74.2973]}
                        zoom={5}
                        scrollWheelZoom={false}
                        style={{ height: "100%", width: "100%" }}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {/* Main Offices Markers */}
                        {mainOffices.map((office, index) => (
                            <Marker
                                key={`main-${index}`}
                                position={office.coords}
                                icon={planetourIcon}
                            >
                                <Popup>
                                    <div className="text-center">
                                        <strong className="text-planetour-orange block mb-1">{office.city}</strong>
                                        <span className="text-xs text-gray-600">Sede Principal Planetour</span>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}

                        {/* Allies Markers */}
                        {allies.map((ally, index) => (
                            <Marker
                                key={`ally-${index}`}
                                position={ally.coords}
                            >
                                <Popup>
                                    <div className="text-center">
                                        <strong className="text-planetour-blue block mb-1">{ally.city}</strong>
                                        <span className="text-xs text-gray-600">Agencias Aliadas</span>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>
        </section>
    );
};

export default Locations;
