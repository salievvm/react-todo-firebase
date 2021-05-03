import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import TodoListItem from './TodoListItem';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function CheckboxList({ list, todos, onErase }) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List className={classes.root}>
            {todos.map((todo, i) => {
                const labelId = `checkbox-list-label-${todo.id}`;

                return <TodoListItem
                    key={todo.id}
                    todo={todo}
                    labelId={labelId}
                    checked={checked}
                    onErase={onErase}
                    onCompleteChange={handleToggle} />
            })}
        </List>
    );
}
