import { Box, Container, styled, Typography, useMediaQuery } from "@mui/material"
import Grid from '@mui/material/Grid2'
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
//import Avatar from '../../../../assets/images/result_avatar.jpg';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
//import Portrait from '../../../../assets/images/person-icon.png'
//import NavBar from "../../../../components/NavBar/NavBar";
import Avatar2 from '../../../../assets/images/Avatar2.png'
import { ReactTyped } from "react-typed";
import theme from "../../../../theme";





const Hero = () => {


    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
            paddingTop: '0'
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: '0',

        }
    }))

    const StyledImg = styled("img")(({ theme }) => ({
        width: "85%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))


    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // até 600px


    return (
        <>
            {isMobile && <Box sx={{ ...theme.mixins.toolbar }} />}
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 5 }} display="flex" justifyContent="center">
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyledImg src={Avatar2} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography color="secondary.main" variant="h1" textAlign="center" pb={2}>Luna Souza</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">
                                <ReactTyped
                                    strings={["I'm a Fullstack Web Developer"]}
                                    typeSpeed={60} // Velocidade da digitação
                                    backSpeed={60} // Velocidade de apagar (se necessário)
                                    loop={false}   // Se quer que a animação fique em loop
                                />

                            </Typography>
                            <Grid container display="flex" justifyContent="center" pt={3}>
                                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <StyledButton onClick={() => console.log('Download')
                                                                         
                                    }
                                    >
                                        <DownloadIcon />
                                        <Typography
                                            sx={{
                                                fontSize: {

                                                    md: '1rem',

                                                }
                                            }}>

                                            Download CV

                                        </Typography>
                                    </StyledButton>

                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <StyledButton onClick={() => console.log('Download')
                                    }>
                                        <EmailIcon />
                                        <Typography>

                                            Contact me

                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero