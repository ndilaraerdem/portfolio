import { Card, CardContent, Typography, Button, Stack, Box } from "@mui/material";

type Props = {
    title: string;
    description: string;
};

function ProjectCard({ title, description }: Props) {
    return (
        <Card
            sx={{
                width: 420,
                transition: "all 0.3s ease",
                "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
                },
            }}
        >

        <CardContent>
                <Typography variant="h6">{title}</Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                    {description}
                </Typography>

                <Stack direction="row" spacing={1}>
                    <Box display="flex" gap={1} mt={2}>
                        <Button
                            variant="contained"
                            size="small"
                            href="https://duty-pharmacy-demo.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live Demo
                        </Button>

                        <Button
                            variant="outlined"
                            size="small"
                            href="https://github.com/ndilaraerdem/duty-pharmacy-demo"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </Button>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default ProjectCard;
