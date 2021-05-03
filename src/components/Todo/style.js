import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    button: {
        marginLeft: theme.spacing(1),
    },
    textField: {
        minWidth: 230,
    },
    form: {
        backgroundColor: '#fff'
    }
}));