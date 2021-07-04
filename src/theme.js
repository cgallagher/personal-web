import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#884692',
    },
    secondary: {
      main: '#19857b',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'Paytone One',
    ].join(','),
    h1: {
      color: '#e49936',
      fontSize: '70px'
    },
    h2: {
      color: '#000',
      fontSize: '50px'
    },
    body1: {
      color: '#000',
      fontFamily: 'roboto',
      fontSize: '22px'
    },
  }
});

export default theme;