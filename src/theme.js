import { createMuiTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors'


// Create a theme instance.
const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#fefefe'
      },
      secondary: purple
    },
    typography: {
      fontFamily: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    }
  })

export default theme;
