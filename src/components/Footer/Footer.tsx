import { Box, Typography, IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#121212',
        color: '#ccc',
        py: 4,
        mt: 0,
        textAlign: 'center',
      }}
    >
      <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
        <IconButton
          href="https://github.com/seuusuario"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <GitHub />
        </IconButton>
        <IconButton
          href="https://linkedin.com/in/seulinkedin"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <LinkedIn />
        </IconButton>
        <IconButton href="mailto:seuemail@email.com" color="inherit">
          <Email />
        </IconButton>
      </Stack>

      <Typography variant="body2">
        © {new Date().getFullYear()} Luna Souza.
      </Typography>
    </Box>
  );
};

export default Footer;