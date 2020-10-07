import React from 'react';
import {
    ListItem, ListItemGraphic, ListItemText,
    Checkbox
} from 'mdc-react';

import './index.scss';

export default function TodoListItem({ todo, onCompleteChange }){
    return (
        <ListItem className="todo-list__item">
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