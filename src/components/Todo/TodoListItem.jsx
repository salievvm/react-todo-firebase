import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import { TextField } from '@material-ui/core';

export default function CheckboxList({ todo, labelId, onUpdate, onErase }) {
    const checked = todo.completed;

    const [state, setState] = React.useState({
        title: todo.title,
        editing: false
    });
    const handleEdit = e => {
        setState({
            ...state,
            title: e.currentTarget.value
        })
    }

    const handleSave = () => {
        setState({ ...state, editing: false })
        onUpdate(todo.id, { title: state.title })
    }

    return (
        <>
            <ListItem dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked}
                        onChange={() => onUpdate(todo.id, { completed: !checked })}
                        disableRipple
                        // inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                {state.editing ?
                    <TextField
                        label="Название задачи"
                        value={state.title}
                        fullWidth
                        onChange={handleEdit}
                    />
                    :
                    <ListItemText id={labelId} primary={state.title} />
                }
                <ListItemSecondaryAction>
                    {state.editing ?
                        <IconButton onClick={handleSave} edge="end" aria-label="edit">
                            <SaveIcon />
                        </IconButton>
                        : <IconButton onClick={() => setState({ ...state, editing: true })} edge="end" aria-label="edit">
                            <EditIcon />
                        </IconButton>
                    }
                    <IconButton onClick={() => onErase(todo.id)} edge="end" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </>
    );
}
