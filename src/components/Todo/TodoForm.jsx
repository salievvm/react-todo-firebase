import React from 'react';

import {
    List, ListItem,
    TextField
} from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import { useStyles } from './style'

export default function TodoForm(props) {
    const { onAdd, listId } = props;

    const classes = useStyles();

    const [title, setTitle] = React.useState('Cat in the Hat');
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        onAdd({ title, listId })
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <List>
                <ListItem className={classes.form}>
                    <div className={classes.rootGrid}>
                        <Grid alignItems={'center'} container spacing={3}>
                            <Grid item sm={12} md={8} xs={12}>
                                <TextField
                                    className={classes.textField}
                                    label="Создать новую задачу"
                                    value={title}
                                    fullWidth
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item sm={12} md={4} xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    size="medium"
                                    fullWidth
                                    startIcon={<PlaylistAddIcon />}
                                >Добавить задачу</Button>
                            </Grid>
                        </Grid>
                    </div>
                </ListItem>
            </List>
        </form>
    );
}