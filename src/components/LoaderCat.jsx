import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import logo_dark from '../catsby-dark.gif'
import logo from '../catsby-light.gif'
import '../App.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        padding: theme.spacing(2),
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export default function LoaderCat() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.root}>
            <img className="rotating logo" src={theme.palette.type === 'dark' ? logo_dark : logo} alt="Logo" />
        </div>
    );
}