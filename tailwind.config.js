/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0A192F',
                secondary: '#112240',
                'section-alt': '#0D2137',
                accent: '#64FFDA',
                'accent-warm': '#F97316',
                'accent-warm-hover': '#EA580C',
                'text-main': '#CCD6F6',
                'text-muted': '#8892B0',
            },
            fontFamily: {
                main: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
