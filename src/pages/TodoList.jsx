import React, { useState, useContext, useEffect } from 'react';
import {
    Spinner
} from 'mdc-react';

import './index.scss';

import DBContext from '../contexts/db';

import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

export default function TodoListPage({ match }){
    const [ todos, setTodos ] = useState([]);
    const db = useContext(DBContext);
    console.log({db});
    const matchCondition = ['listId', '==', match.params.listId];

    useEffect(() => {
        db.get("todos")(collection => {
            return collection.where(...matchCondition)
        })
            .then(setTodos);
    }, [db, match.params.listId]);

    let list;

    if (db.lists && db.lists.length > 0) {
        list = db.lists.find(list => list.id === match.params.listId);
    } 

    if (!list) return <Spinner />;

    return (
        <div id="todo-list-page" className="page">
            <TodoList
                list={list}
                todos={todos}
            />
            <TodoForm />
        </div>
    );
}