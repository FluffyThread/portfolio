import { AppBar, MenuItem, styled, Toolbar, Typography } from "@mui/material"



const NavBar = () => {



    const StyledToobar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
    }))

    return (
        <>
            <AppBar position="fixed"
                sx={{
                    paddingY: {
                        xs: '0px',
                        sm: '10px',
                        md: '40px',
                        lg: '16px'
                    }
                }}>
                <StyledToobar>
                    <MenuItem>
                        <Typography
                            sx={{
                                color: 'white',
                                fontSize: {
                                    md: '2rem',
                                    lg: '1rem'
                                }
                            }}
                        >
                        About

                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography
                            sx={{
                                color: 'white',
                                fontSize: {
                                    md: '2rem',
                                    lg: '1rem'
                                }
                            }}
                        >
                        Skills

                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography
                            sx={{
                                color: 'white',
                                fontSize: {
                                    md: '2rem',
                                    lg: '1rem'
                                }
                            }}
                        >
                        Projects

                        </Typography>
                    </MenuItem>

                </StyledToobar>
            </AppBar>
        </>
    )
}

export default NavBar