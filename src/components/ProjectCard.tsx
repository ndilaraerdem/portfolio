import { Card, CardContent, Typography, Button, Stack } from "@mui/material";

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
                    <Button variant="contained" size="small">
                        Live Demo
                    </Button>
                    <Button variant="outlined" size="small">
                        GitHub
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default ProjectCard;
