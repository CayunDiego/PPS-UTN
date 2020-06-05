import { createMuiTheme } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00a665'
        },
        secondary: {
            main: deepOrange[500]
        }
    }
});

export default theme;