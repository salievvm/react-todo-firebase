import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    rootGrid: {
        flexGrow: 1,
    },
    button: {
        marginLeft: theme.spacing(1),
    },
    textField: {
        minWidth: 230,
    },
    form: {
        backgroundColor: theme.palette.background.paper,
    }
}));