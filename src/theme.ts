import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#0f1115",
            paper: "#161a22",
        },
        primary: {
            main: "#4f8cff",
        },
        text: {
            primary: "#ffffff",
            secondary: "#b0b3c2",
        },
    },
    typography: {
        fontFamily: "'Inter', 'Roboto', sans-serif",
        h3: {
            fontWeight: 600,
            letterSpacing: "-0.02em",
        },
        h5: {
            fontWeight: 500,
        },
        body1: {
            lineHeight: 1.7,
        },
    },
    shape: {
        borderRadius: 12,
    },
});

export default theme;
