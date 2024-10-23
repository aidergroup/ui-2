import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#009AC8",
            dark: "#006C8C",
            light: "#66C2DE",
            "100": "#CCEBF4",
            "200": "#99D7E9",
            "300": "#66C2DE",
            "400": "#33AED3",
            "500": "#009AC8",
            "600": "#008BB4",
            "700": "#006C8C",
            "800": "#004D64",
            "900": "#002E3C",
        },
        grey: {
            "100": "#FAFBFC",
            "200": "#F6F8FA",
            "300": "#E1E4E8",
            "400": "#D1D5DA",
            "500": "#959DA5",
            "600": "#6A737D",
            "700": "#586069",
            "800": "#444D56",
            "900": "#2F363D",
        },
    },
    typography: {
        allVariants: {
            fontWeight: 400,
        },
        h1: {
            fontSize: "36px",
            lineHeight: "46.15px",
        },
        h2: {
            fontSize: "30px",
            lineHeight: "38.46px",
        },
        h3: {
            fontSize: "24px",
            lineHeight: "30.77px",
        },
        h4: {
            fontSize: "20px",
            lineHeight: "25.64px",
        },
        h5: {
            fontSize: "18px",
            lineHeight: "23.08px",
        },
        h6: {
            fontSize: "16px",
            lineHeight: "20.51px",
        },
        body1: {
            fontSize: "18px",
            lineHeight: "23.4px",
        },
        body2: {
            fontSize: "16px",
            lineHeight: "20.8px",
        },
        caption: {
            fontSize: "12px",
            lineHeight: "15.6px",
        },
        subtitle1: {
            fontSize: "14px",
            lineHeight: "17.95px",
        },
        subtitle2: {
            fontSize: "12px",
            lineHeight: "15.38px",
        },
    },

    components: {},
});

export default theme;