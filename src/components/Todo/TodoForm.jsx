import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
    List, ListItem,
    TextField
} from '@material-ui/core';

import Button from '@material-ui/core/Button';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

const useStyles = makeStyles((theme) => ({
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

export default function TodoForm() {
    const classes = useStyles();
    const [title, setTitle] = React.useState('Cat in the Hat');
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    return (
        <form className="todo-form">
            <List>
                <ListItem className={classes.form}>
                    <TextField
                        className={classes.textField}
                        label="Создать новую задачу"
                        value={title}
                        onChange={handleChange}
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        size="medium"
                        className={classes.button}
                        startIcon={<PlaylistAddIcon />}
                    >Добавить задачу</Button>
                </ListItem>
            </List>
        </form>
    );
}