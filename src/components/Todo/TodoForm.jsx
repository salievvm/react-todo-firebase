import React from 'react';

import {
    List, ListItem,
    TextField
} from '@material-ui/core';

import BackdropCustom from '../BackdropCustom'
import Button from '@material-ui/core/Button';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import { useStyles } from './style'

export default function TodoForm(props) {
    const { add, listId } = props;

    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);

    const [title, setTitle] = React.useState('Cat in the Hat');
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        add("todos", { title, listId }, () => {
            setLoading(false);
        });
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <List>
                <ListItem className={classes.form}>
                    <TextField
                        className={classes.textField}
                        label="Создать новую задачу"
                        value={title}
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        size="medium"
                        className={classes.button}
                        startIcon={<PlaylistAddIcon />}
                    >Добавить задачу</Button>
                </ListItem>
            </List>
            {loading ? <BackdropCustom /> : null}
        </form>
    );
}