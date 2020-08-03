import React, { useState, useContext, useEffect } from 'react';
import {
    List,
    Spinner, Typography
} from 'mdc-react';

import './index.scss';

import DBContext from '../../context/db';

import TodoListItem from '../TodoListItem';

export default function TodoList({ match }){
    const [ todos, setTodos ] = useState([]);
    const db = useContext(DBContext);

    useEffect(() => {
        db.get("todos")(collection => 
            collection.where('listId', '==', match.params.listId))
                .then(setTodos);
    }, [db, match.params.listId]);

    let list;

    if (db.lists.length > 0) {
        list = db.lists.find(list => list.id === match.params.listId);
    } 

    if (!list) return <Spinner />;

    return (
        <div className="todo-list">
            <Typography
                className="todo-list__title"
                variant="headline4">
                    {list ? list.title : ""}</Typography>
            <List className="todo-list__items">
                {todos.map(todo => (
                    <TodoListItem
                        key={todo.id}
                        todo={todo} />
                ))}
            </List>
        </div>
    )
}