/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                planetour: {
                    orange: '#F58220',
                    blue: '#003366',
                    lightBlue: '#0055A4',
                    gray: '#F3F4F6',
                }
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
