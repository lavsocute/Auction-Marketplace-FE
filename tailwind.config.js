/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                zinc: {
                    950: '#09090b',
                    900: '#18181b',
                    800: '#27272a',
                    400: '#a1a1aa',
                    50: '#fafafa',
                },
                orange: {
                    500: '#f97316',
                    400: '#fb923c',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Oswald', 'sans-serif'],
            },
            boxShadow: {
                'neon': '0 0 15px rgba(249,115,22,0.5)',
            }
        },
    },
    plugins: [],
}
