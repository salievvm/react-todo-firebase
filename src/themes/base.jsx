import { createMuiTheme } from '@material-ui/core/styles';
// import "npm-font-open-sans";

// const fontFamily = [
//   'Open Sans',
//   'sans-serif',
//   'Roboto',
//   '"Helvetica Neue"',
//   'Arial',
//   'sans-serif',
//   '"Apple Color Emoji"',
//   '"Segoe UI Emoji"',
//   '"Segoe UI Symbol"',
// ].join(',');

let theme = createMuiTheme({
    //   typography: {
    //     fontFamily
    //   },
});

theme.background = {
    paper: theme.palette.background.paper,
    default: theme.palette.background.default
};

theme.overrides = {
    MuiCssBaseline: {
        '@global': {
            html: {
                backgroundColor: theme.palette.background.default,
            },
            body: {
                backgroundColor: theme.palette.background.default,
            },
            a: {
                textDecoration: 'none',
                color: theme.palette.text.primary,
            },
        },
    },
    MuiListItem: {
        gutters: {
            paddingLeft: theme.spacing(3),
            [theme.breakpoints.down('xs')]: {
                paddingLeft: theme.spacing(2),
            },
        },
    },
    MuiAppBar: {
        root: {
            zIndex: 1500,
            boxShadow: '0px 8px 10px 0px rgba(69, 91, 99, 0.08)',
        },
        colorDefault: {
            // boxShadow: 'none',     
            paddingTop: `env(safe-area-inset-top)`,
            paddingLeft: `env(safe-area-inset-left)`,
            paddingRight: `env(safe-area-inset-right)`,
            backgroundColor: '#ffffff', /*theme.palette.primary.main,*/
            borderBottom: '1px solid #f4f4f6',
        },
        colorSecondary: {
            // top: 48,
            zIndex: 1501,
            backgroundColor: '#ffffff',
            borderTop: '1px solid #f4f4f6',
            top: `calc(env(safe-area-inset-top) + 48px)`,
            paddingLeft: `env(safe-area-inset-left)`,
            paddingRight: `env(safe-area-inset-right)`,
        }
    },
};

export default theme;