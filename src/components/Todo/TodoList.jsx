import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import TodoListItem from './TodoListItem';

import BackdropCustom from '../BackdropCustom'
import { useStyles } from './style';

export default function CheckboxList({ todos, onErase, onUpdate }) {
    const classes = useStyles();

    const [loading, setLoading] = React.useState(false);
    const handleToggle = (id, completed) => {
        setLoading(true);
        onUpdate("todos", id, { completed }, setLoading(false))
    };

    return (
        <>
            <List className={classes.root}>
                {todos.map((todo, i) => {
                    const labelId = `checkbox-list-label-${todo.id}`;

                    return <TodoListItem
                        key={todo.id}
                        todo={todo}
                        labelId={labelId}
                        onErase={onErase}
                        onCompleteChange={handleToggle} />
                })}
            </List>
            {loading ? <BackdropCustom /> : null}
        </>
    );
}
