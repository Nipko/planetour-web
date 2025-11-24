# Planetour - Sitio Web Corporativo

Sitio web oficial de **Planetour S.A.S.**, agencia mayorista y consolidadora aérea con presencia en Colombia.

## 🚀 Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **React Router DOM** - Navegación entre páginas
- **Tailwind CSS** - Framework de estilos
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos
- **React Leaflet** - Mapas interactivos
- **EmailJS** - Envío de correos desde el formulario de contacto

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior)
- **npm** (viene incluido con Node.js)
- Un editor de código (recomendado: VS Code)

## 🛠️ Instalación y Configuración

### 1. Clonar o Descargar el Proyecto

```bash
# Si tienes el proyecto en un repositorio
git clone https://github.com/Nipko/planetour-web.git

# O simplemente navega a la carpeta del proyecto
cd c:\Users\USER\Desktop\Pagina_planetour\planetour
```

### 2. Instalar Dependencias

```bash
npm install
```

Este comando instalará todas las dependencias necesarias listadas en `package.json`.

### 3. Configurar EmailJS (Formulario de Contacto)

El formulario de contacto utiliza EmailJS para enviar correos. Para configurarlo:

1. Crea una cuenta gratuita en [EmailJS](https://www.emailjs.com/)
2. Configura un servicio de email (Gmail, Outlook, etc.)
3. Crea una plantilla de email con las siguientes variables:
   - `{{agency_name}}` - Nombre de la agencia
   - `{{nit}}` - NIT
   - `{{location}}` - Ciudad/País
   - `{{contact_person}}` - Nombre de contacto
   - `{{position}}` - Cargo
   - `{{phone}}` - Teléfono
   - `{{email}}` - Email
   - `{{interests}}` - Intereses seleccionados
   - `{{message}}` - Mensaje adicional

4. Actualiza las credenciales en `src/components/Contact.jsx` (líneas 113-116):
```javascript
await emailjs.send(
    'TU_SERVICE_ID',      // Reemplaza con tu Service ID
    'TU_TEMPLATE_ID',     // Reemplaza con tu Template ID
    templateParams,
    'TU_PUBLIC_KEY'       // Reemplaza con tu Public Key
);
```

## 🏃‍♂️ Comandos Disponibles

### Modo Desarrollo

```bash
npm run dev
```

Inicia el servidor de desarrollo en `http://localhost:5173/`
- Hot reload automático
- Ideal para desarrollo y pruebas

### Vista Previa de Producción

```bash
npm run preview
```

Previsualiza la versión de producción localmente en `http://localhost:4173/`
- Útil para verificar el build antes de desplegar

### Build de Producción

```bash
npm run build
```

Genera los archivos optimizados para producción en la carpeta `dist/`
- Minificación de código
- Optimización de assets
- Listo para subir al servidor

### Linting

```bash
npm run lint
```

Ejecuta ESLint para verificar la calidad del código.

## 📁 Estructura del Proyecto

```
planetour/
├── public/              # Archivos públicos estáticos
├── src/
│   ├── assets/         # Imágenes y recursos
│   │   ├── team/       # Fotos del equipo
│   │   └── logo_v3.png # Logo de Planetour
│   ├── components/     # Componentes reutilizables
│   │   ├── About.jsx
│   │   ├── Benefits.jsx
│   │   ├── Blog.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Destinations.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Locations.jsx
│   │   ├── Navbar.jsx
│   │   ├── Services.jsx
│   │   ├── Technology.jsx
│   │   └── Training.jsx
│   ├── pages/          # Páginas de la aplicación
│   │   ├── Home.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── DestinationsPage.jsx
│   │   ├── BlogPage.jsx
│   │   └── ContactPage.jsx
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Punto de entrada
│   └── index.css       # Estilos globales
├── index.html          # HTML base
├── package.json        # Dependencias y scripts
├── tailwind.config.js  # Configuración de Tailwind
├── vite.config.js      # Configuración de Vite
└── README.md           # Este archivo
```

## 🎨 Personalización

### Colores de Marca

Los colores de Planetour están definidos en `tailwind.config.js`:

```javascript
colors: {
  'planetour-orange': '#F58220',
  'planetour-blue': '#003366',
  'planetour-lightBlue': '#0055A4',
}
```

### Fuente

El proyecto utiliza la fuente **Outfit** de Google Fonts, importada en `src/index.css`.

## 🌐 Despliegue a Hostinger

### Preparación

1. Ejecuta el build de producción:
```bash
npm run build
```

2. Los archivos listos para desplegar estarán en la carpeta `dist/`

### Método 1: Administrador de Archivos (Recomendado)

1. Accede a tu panel de Hostinger: [hpanel.hostinger.com](https://hpanel.hostinger.com)
2. Abre el "Administrador de archivos"
3. Navega a la carpeta `public_html`
4. Elimina cualquier contenido antiguo
5. Sube **TODO el contenido** de la carpeta `dist/` (NO la carpeta `dist` en sí)
6. Verifica que `index.html` esté directamente en `public_html`

### Método 2: FTP (FileZilla)

1. Descarga [FileZilla](https://filezilla-project.org/)
2. Obtén tus credenciales FTP desde el panel de Hostinger
3. Conéctate al servidor
4. Sube el contenido de `dist/` a `public_html`

### Verificación Post-Despliegue

- ✅ Verifica que el sitio cargue correctamente
- ✅ Prueba el formulario de contacto
- ✅ Verifica que el mapa interactivo funcione
- ✅ Comprueba la responsividad en móvil

## 📞 Información de Contacto

- **Email**: info@planetour.com.co
- **Teléfono**: +57 317 855 6909
- **Sitio Web**: https://www.planetour.com.co/
- **Linktree**: https://linktr.ee/planetour

## 📄 Información Legal

- **NIT**: 900 616 343
- **RNT**: 30633

## 🤝 Soporte

Para cualquier problema técnico o consulta sobre el código:

1. Revisa la documentación de las tecnologías utilizadas
2. Verifica que todas las dependencias estén instaladas correctamente
3. Asegúrate de tener la versión correcta de Node.js

## 📝 Notas Importantes

- **Cache del Navegador**: Si no ves cambios después de actualizar, presiona `Ctrl + F5`
- **Variables de Entorno**: Las credenciales de EmailJS están hardcodeadas en `Contact.jsx`. Para producción, considera usar variables de entorno
- **Imágenes del Equipo**: Las fotos están en `src/assets/team/`. Mantén los nombres de archivo consistentes

## 🔄 Flujo de Trabajo para Actualizaciones

1. Realiza los cambios en el código
2. Prueba localmente con `npm run dev`
3. Genera el build con `npm run build`
4. Sube el contenido de `dist/` a Hostinger
5. Verifica los cambios en el sitio en vivo

---

**Desarrollado por**: [Parallext.com](https://parallext.com)

**© 2025 Planetour S.A.S. Todos los derechos reservados.**
