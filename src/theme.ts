import { createMuiTheme } from "@material-ui/core/styles";

const webSafeFonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
]

// const roundedFonts = [
//   'Quicksand',
//   'Nunito Sans',
//   ...webSafeFonts,
// ].join(',');

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Catamaran',
      'Montserrat',
      ...webSafeFonts,
    ].join(','),
    body1: { fontWeight: 500 },
    body2: { fontWeight: 500 },
    h3: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
  palette: {
    primary: {
      light: '#5f6064',
      main: '#35363a',
      dark: '#0f1014',
    },
    secondary: {
      light: '#ff6659',
      main: '#d32f2f',
      dark: '#9a0007',
    }
  },
});

export default theme;