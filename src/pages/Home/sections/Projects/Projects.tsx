import { styled, Grid2, Card, CardContent, CardMedia, Typography, Button, Stack, Grid } from "@mui/material"
import portfolio from "../../../../assets/images/portfolio.png"
import todo from "../../../../assets/images/mockup-to-do.png"
import demo from "../../../../assets/images/mockup-demo.png"

const Projects = () => {



    const projects = [
        {
            title: "Portfólio",
            image: portfolio,
            description: "Site pessoal com React + MUI.",
            techs: ["React", "MUI", "Vite"],
            github: "https://github.com/seuuser/portfolio",
            demo: "https://luna.dev",
        },
        {
            title: "Demo App 1",
            image: todo,
            description: "App Mockup com React, TypeScript e Firebase.",
            techs: ["React", "Firebase", "TS"],
            github: "https://github.com/seuuser/todo-app",
            demo: "https://todo.dev",
        },
        {
            title: "Another Demo App",
            image: demo,
            description: "Texto mockup para app demo",
            techs: ["Next.js", "Markdown", "Tailwind"],
            github: "https://github.com/seuuser/blog",
            demo: "https://blog.dev",
        },
    ];

    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        placeItems:"center",
        minHeight: "100vh",
        paddingTop: "0px",   // espaço no topo
        paddingBottom: "0px", // espaço no final
        marginBottom:"0px"
    }))




    return (

        <>
            <StyledProjects>

                <Typography color="primary.contrastText" variant="h1" textAlign="center" pt="30px" paddingBottom="40px">
                    Projects
                </Typography>
                <Grid
                    container
                    spacing={4}
                    padding={4}
                    justifyContent="center"
                    sx={{ maxWidth: "1200px" }}
                >
                    {projects.map((project) => (
                        <Grid item xs={12} sm={6} md={4} key={project.title}>
                            <Card sx={{ height: "100%" }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={project.image}
                                    alt={project.title}
                                />
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {project.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 1 }}
                                    >
                                        {project.description}
                                    </Typography>
                                    <Stack direction="row" spacing={1} mb={1}>
                                        {project.techs.map((tech) => (
                                            <Typography
                                                key={tech}
                                                variant="caption"
                                                color="text.secondary"
                                            >
                                                {tech}
                                            </Typography>
                                        ))}
                                    </Stack>
                                    <Stack direction="row" spacing={2}>
                                        <Button size="small" href={project.github} target="_blank"   sx={{ backgroundColor: '#00bcd4', color: '#fff', '&:hover': { backgroundColor: '#0097a7' } }}>
                                            GitHub
                                        </Button>
                                        {project.demo && (
                                            <Button size="small" href={project.demo} target="_blank" sx={{ backgroundColor: '#00bcd4', color: '#fff', '&:hover': { backgroundColor: '#0097a7' } }}>
                                                Live Demo
                                            </Button>
                                        )}
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </StyledProjects>

        </>

    )
}

export default Projects