import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import LoaderCat from './LoaderCat';
import { logo, logo_dark } from '../index'

const useStyles = makeStyles((theme) => ({
    backdrop: {
        color: '#fff',
        backgroundColor: 'transparent'
    },
}));

export default function ModalDialog(props) {
    const classes = useStyles();

    const fullScreen = false; 

    return (
        <div>
            <Dialog
                PaperProps={{
                    elevation: 0,
                    style: { backgroundColor: 'transparent', overflow: 'hidden' }
                }}
                className={classes.backdrop}
                fullScreen={fullScreen}
                open={true}
                aria-labelledby="responsive-dialog-title" >
                <LoaderCat />
                {/* <CircularProgress color="inherit" /> */}
            </Dialog>
        </div >
    );
}
