import { Box, Container, styled, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2'
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';


const About = () => {

    const StyledAbout = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.contrastText,
  //overflowY: "auto",
        minHeight: "100vh",
        paddingBottom: theme.spacing(6)

    }))
    const StyledCard = styled("div")(({ theme }) => ({
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.primary.contrastText,
        height: "150px",
        width: "250px",
        border: "1px solid lightGray"
    }))

    return (
        <>
            <StyledAbout 
            sx={{
                minHeight: {
                    xs: "130vh",  // Tamanho pequeno para telas XS
                    md: "100vh"
//
                },
                textAlign: "center",
            }}
           >
                <Typography color="primary.main" variant="h1" textAlign="center" pt="30px">
                    About me
                </Typography>
                <Container>
                    <Grid container spacing={1} display="flex" justifyContent="center" pt="50px">
                        <Grid size={{ xs: 4, md: 4 }} display="flex" justifyContent="center">
                            <StyledCard>
                                <Box margin="10px 10px" display="flex" flexDirection="column" alignItems="center">
                                    <SchoolIcon />
                                    <Typography color="primary.main" variant="h6" sx={{
                                        fontSize: {
                                            xs: "14px",  // Tamanho pequeno para telas XS
                                            sm: "14px",  // Tamanho médio para telas SM
                                            md: "16px",    // Tamanho grande para telas MD
                                        },
                                        textAlign: "center",
                                    }}><strong>Education</strong></Typography>
                                    <Typography color="black" sx={{
                                        fontSize: {
                                            xs: "12px",  // Tamanho pequeno para telas XS
                                            sm: "14px",  // Tamanho médio para telas SM
                                            md: "16px",    // Tamanho grande para telas MD
                                        },
                                        textAlign: "center",
                                    }} >Bachelor's Degree - Partially Completed</Typography>
                                    <Typography color="black" sx={{
                                        fontSize: {
                                            xs: "12px",  // Tamanho pequeno para telas XS
                                            sm: "14px",  // Tamanho médio para telas SM
                                            md: "16px",    // Tamanho grande para telas MD
                                        },
                                        textAlign: "center",
                                    }} >Pedagogy</Typography>
                                </Box>
                            </StyledCard>

                        </Grid>
                        <Grid size={{ xs: 4, md: 4 }} display="flex" justifyContent="center">
                            <StyledCard>
                                <Box margin="10px 10px" display="flex" flexDirection="column" alignItems="center">
                                    <WorkspacePremiumIcon />
                                    <Typography color="primary.main" variant="h6" sx={{
                                        fontSize: {
                                            xs: "14px",  // Tamanho pequeno para telas XS
                                            sm: "14px",  // Tamanho médio para telas SM
                                            md: "16px",    // Tamanho grande para telas MD
                                        },
                                        textAlign: "center",
                                    }} ><strong>Experience</strong></Typography>
                                    <Typography color="black" textAlign="center" sx={{
                                        fontSize: {
                                            xs: "12px",  // Tamanho pequeno para telas XS
                                            sm: "14px",  // Tamanho médio para telas SM
                                            md: "16px",    // Tamanho grande para telas MD
                                        },
                                        textAlign: "center",
                                    }}>Fullstack Web Development Bootcamp</Typography>
                                    <Typography color="black" textAlign="center" sx={{
                                        fontSize: {
                                            xs: "12px",  // Tamanho pequeno para telas XS
                                            sm: "14px",  // Tamanho médio para telas SM
                                            md: "16px",    // Tamanho grande para telas MD
                                        },
                                        textAlign: "center",
                                    }} >1 year</Typography>
                                </Box>
                            </StyledCard>

                        </Grid>
                    </Grid>
                    <Grid container display='flex' alignItems="center" justifyContent="center" pt="75px" sx={{
                        pt: {
                            xs: "40px",  // Tamanho pequeno para telas XS
                            md: "50px"
                        },
                        textAlign: "center",
                    }}>
                        <Grid size={12}>
                            <Typography color="primary.main" variant="h6" textAlign="center" sx={{
                                borderBottom: "2px solid lightGray", display: "inline-block", paddingBottom: "10px", fontSize: {
                                    xs: "14px",  // Tamanho pequeno para telas XS
                                    sm: "14px",  // Tamanho médio para telas SM
                                    md: "16px",    // Tamanho grande para telas MD
                                }, pt: {
                                    xs: "0px",  // Tamanho pequeno para telas XS

                                }
                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac ultricies ex. Cras in tempus arcu. Nam non tempor nisi. Maecenas in suscipit enim, nec tempus nunc. Donec vehicula est tempor felis eleifend rutrum. Aenean vestibulum tincidunt nibh, eu imperdiet massa interdum sit amet. Aliquam ultrices iaculis dapibus. Proin eget nibh eu lorem accumsan pellentesque. In ullamcorper, turpis non ultrices porttitor, neque nunc faucibus neque, ultricies congue justo eros eu ligula. Suspendisse et finibus enim. Nulla et nunc id purus consectetur scelerisque. Morbi ac dolor vitae lectus scelerisque feugiat vitae et elit. Etiam convallis ultrices iaculis.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography color="primary.main" variant="h2" textAlign="center" padding="20px 0">
                        Skills
                    </Typography>
                    <Grid size={12} display='flex' flexWrap="wrap" justifyContent="center" alignItems="center">



                        <Box width="150px" border="1px solid gray" height='40px' display='flex' flexWrap="wrap" justifyContent="center" alignItems='center' margin='10px 10px'>
                            <Typography color="primary.main" variant="h6" textAlign="center">
                                HTML
                            </Typography>
                        </Box>
                        <Box width="150px" border="1px solid gray" height='40px' display='flex' flexWrap="wrap" justifyContent="center" alignItems='center' margin='10px 10px'>
                            <Typography color="primary.main" variant="h6" textAlign="center">
                                CSS
                            </Typography>
                        </Box>
                        <Box width="150px" border="1px solid gray" height='40px' display='flex' flexWrap="wrap" justifyContent="center" alignItems='center' margin='10px 10px'>
                            <Typography color="primary.main" variant="h6" textAlign="center">
                                Javascript

                            </Typography>
                        </Box>
                        <Box width="150px" border="1px solid gray" height='40px' display='flex' flexWrap="wrap" justifyContent="center" alignItems='center' margin='10px 10px'>
                            <Typography color="primary.main" variant="h6" textAlign="center">
                                React
                            </Typography>
                        </Box>
                        <Box width="150px" border="1px solid gray" height='40px' display='flex' flexWrap="wrap" justifyContent="center" alignItems='center' margin='10px 10px'>
                            <Typography color="primary.main" variant="h6" textAlign="center">
                                React Hooks
                            </Typography>
                        </Box>
                        <Box width="150px" border="1px solid gray" height='40px' display='flex' flexWrap="wrap" justifyContent="center" alignItems='center' margin='10px 10px'>
                            <Typography color="primary.main" variant="h6" textAlign="center">
                                Node.JS
                            </Typography>
                        </Box>
                        <Box width="150px" border="1px solid gray" height='40px' display='flex' flexWrap="wrap" justifyContent="center" alignItems='center' margin='10px 10px'>
                            <Typography color="primary.main" variant="h6" textAlign="center">
                                Typescript
                            </Typography>
                        </Box>
                        <Box width="150px" border="1px solid gray" height='40px' display='flex' flexWrap="wrap" justifyContent="center" alignItems='center' margin='10px 10px'>
                            <Typography color="primary.main" variant="h6" textAlign="center">
                                MySQL
                            </Typography>
                        </Box>
                        <Box width="150px" border="1px solid gray" height='40px' display='flex' flexWrap="wrap" justifyContent="center" alignItems='center' margin='10px 10px'>
                            <Typography color="primary.main" variant="h6" textAlign="center">
                                Github
                            </Typography>
                        </Box>
                        <Box width="150px" border="1px solid gray" height='40px' display='flex' flexWrap="wrap" justifyContent="center" alignItems='center' margin='10px 10px'>
                            <Typography color="primary.main" variant="h6" textAlign="center">
                                Git
                            </Typography>
                        </Box>

                        <Box width="150px" border="1px solid gray" height='40px' display='flex' flexWrap="wrap" justifyContent="center" alignItems='center' margin='10px 10px'>
                            <Typography color="primary.main" variant="h6" textAlign="center">
                                MUI
                            </Typography>
                        </Box>



                    </Grid>

                </Container>
            </StyledAbout>
        </>
    )
}

export default About