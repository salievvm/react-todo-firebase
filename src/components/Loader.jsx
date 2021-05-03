import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // '& > * + *': {
    //   marginLeft: theme.spacing(0),
    // },
    padding: theme.spacing(6),
    // width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="primary" />
    </div>
  );
}