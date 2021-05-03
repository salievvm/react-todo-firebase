import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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