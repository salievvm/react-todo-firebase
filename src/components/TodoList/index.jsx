import React from 'react';
import {
    List,
    Typography
} from 'mdc-react';

import './index.scss';

import TodoListItem from '../TodoListItem';

export default function TodoList({ list, todos }){
    return (
        <div className="todo-list">
            <Typography
                className="todo-list__title"
                variant="headline4">
                    {list ? list.title : ""}</Typography>
            <List>
                {todos.map(todo => (
                    <TodoListItem
                        key={todo.id}
                        todo={todo} />
                ))}
            </List>
        </div>
    );
}