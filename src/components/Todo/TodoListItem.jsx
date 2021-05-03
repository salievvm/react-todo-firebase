import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

export default function CheckboxList({ todo, labelId, onCompleteChange, checked }) {
    // const checked = todo.completed;

    return (
        <ListItem key={todo.id} role={undefined} dense button onClick={() => onCompleteChange(todo.id)}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={checked.indexOf(todo.id) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                />
            </ListItemIcon>
            <ListItemText id={labelId} primary={todo.title} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                    <CommentIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}
