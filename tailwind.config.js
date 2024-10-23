/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            futura: ["Futura-PT", "sans-serif"],
            sans: ["IBM Plex Sans", "sans-serif"],
        },
        extend: {
            colors: {
                black: "#28292C",
                gray: {
                    100: "#FAFBFC",
                    200: "#F6F8FA",
                    300: "#E1E4E8",
                    400: "#D1D5DA",
                    500: "#959DA5",
                    600: "#6A737D",
                    700: "#586069",
                    800: "#444D56",
                    900: "#2F363D",
                },
                primary: {
                    100: "#CCEBF4",
                    200: "#99D7E9",
                    300: "#66C2DE",
                    400: "#33AED3",
                    500: "#009AC8",
                    600: "#008BB4",
                    700: "#006C8C",
                    800: "#004D64",
                    900: "#002E3C",
                },
            },
        },
    },
    plugins: [],
};
