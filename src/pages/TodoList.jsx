import React, { useState, useContext, useEffect } from 'react';
import Loader from '../components/Loader';

import './index.scss';

import DBContext from '../contexts/db';

import TodoList from '../components/Todo/TodoList';
import TodoForm from '../components/Todo/TodoForm';

export default function TodoListPage({ match }){
    const [ todos, setTodos ] = useState([]);
    const db = useContext(DBContext);
    const matchCondition = ['listId', '==', match.params.listId];

    useEffect(() => {
        db.get("todos")(collection => {
            return collection.where(...matchCondition)
        })
            .then(res => setTodos(res));
    }, [db, match.params.listId]);

    let list;

    if (db.lists && db.lists.length) {
        list = db.lists.find(list => list.id === match.params.listId);
    } 

    if (!list) return <Loader />;

    return (
        <div id="todo-list-page" className="page">
            <TodoForm 
                add={db.add}
                listId={list.id} />
            <TodoList
                onErase={db.erase}
                list={list}
                todos={todos}
            />
        </div>
    );
}