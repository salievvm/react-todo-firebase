import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import DeleteIcon from '@material-ui/icons/Delete';

import BackdropCustom from '../BackdropCustom'

export default function CheckboxList({ todo, labelId, onCompleteChange, onErase }) {
    const checked = todo.completed;

    const [loading, setLoading] = React.useState(false);
    const handleDelete = e => {
        setLoading(true);
        onErase("todos", todo.id, () => {
            setLoading(false);
        })
    }

    return (
        <>
            <ListItem key={todo.id} role={undefined} dense button onClick={() => onCompleteChange(todo.id, !checked)}>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={todo.title} />
                <ListItemSecondaryAction>
                    <IconButton onClick={handleDelete} edge="end" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            {loading ? <BackdropCustom /> : null}
        </>
    );
}
