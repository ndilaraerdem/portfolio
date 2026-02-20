import { Container, Grid, Typography } from "@mui/material";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

function HomePage() {
    return (
        <>
        <Container>
            <Hero />

            <Typography variant="h5" sx={{ mt: 8, mb: 3 }} color="text.secondary" align="center">
                Projects
            </Typography>

            <Grid container
                  spacing={5}
                  direction="column"
                  alignItems="center"
                  justifyContent="center">
                <Grid>
                    <ProjectCard
                        title="Duty Pharmacy Demo"
                        description="Location-aware duty pharmacy finder built with React and TypeScript. Features mock API structure, geolocation integration, distance calculation and Google Maps directions."                    />

                </Grid>
                <Grid>
                    <ProjectCard
                        title="User Management Panel"
                        description="Enterprise-style user management application built with React and Material UI."
                    />
                </Grid>

                <Grid>
                    <ProjectCard
                        title="Form Validation Showcase"
                        description="Advanced form handling with React Hook Form and validation."
                    />
                </Grid>

                <Grid>
                    <ProjectCard
                        title="Mini Dashboard"
                        description="Dashboard with tables and charts."
                    />
                </Grid>
            </Grid>
        </Container>
        </>
    );
}

export default HomePage;
