import { Box, Typography } from "@mui/material";

function Hero() {
    return (
        <Box
            sx={{
                minHeight: "20vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: 2,
            }}
        >
            <Typography variant="h2">
                Dilara Erdem
            </Typography>

            <Typography color="primary">
                Frontend Developer · React · Angular
            </Typography>

            <Typography sx={{ maxWidth: 520 }} color="text.secondary">
                I build enterprise-ready and modern web applications using React,
                TypeScript and Material UI.
            </Typography>
        </Box>

    );
}

export default Hero;
