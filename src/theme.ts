import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
    palette: {
        primary: {
            main: '#232323',
        },
        secondary: {
        main: '#4f8e3e',
      },
    },
    typography:{
        fontFamily: 
        // '-apple-system',
        // 'BlinkMacSystemFont',
        // '"Segoe UI"',
        // 'Roboto',
        // '"Helvetica Neue"',
        // 'Arial',
        // 'sans-serif',
        //'"Apple Color Emoji"',
         '"Segoe UI Emoji"',
        //'"Segoe UI Symbol"',
    }
});


theme = responsiveFontSizes(theme)


  export default theme
