import React from 'react';
import {
    ListItem, ListItemGraphic, ListItemText, ListDivider,
    Checkbox
} from 'mdc-react';

export default function TodoListItem({ todo, onCompleteChange }){
    return (
        <ListItem>
            <ListItemGraphic>
                <Checkbox
                    checked={todo.completed}
                    onChange={onCompleteChange}
                ></Checkbox>
            </ListItemGraphic>
            <ListItemText>
                {todo.title}
            </ListItemText>
        </ListItem>
    )
}