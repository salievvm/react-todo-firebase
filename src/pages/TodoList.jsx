import React, { useState, useContext, useEffect } from 'react';
import Loader from '../components/Loader';

import './index.scss';

import DBContext from '../contexts/db';
import TodoList from '../components/Todo/TodoList';
import TodoForm from '../components/Todo/TodoForm';
import BackdropCustom from '../components/BackdropCustom'
import { Typography } from '@material-ui/core';
import LoaderCat from './../components/LoaderCat';

export default function TodoListPage({ match }) {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = React.useState(false);

    const db = useContext(DBContext);
    const matchCondition = ['listId', '==', match.params.listId];

    const getList = () => {
        setLoading(true);
        db.get("todos")(collection => {
            return collection.where(...matchCondition)
        })
            .then(res => {
                setTodos(res)
                setLoading(false)
            });
    }

    useEffect(() => {
        getList(db, matchCondition, setTodos);
    }, [db, match.params.listId]);

    const handleDelete = id => {
        setLoading(true);
        db.erase("todos", id, getList)
    }

    const handleUpdate = (id, data) => {
        setLoading(true);
        db.update("todos", id, data, getList)
    };

    const handleAdd = data => {
        setLoading(true);
        db.add("todos", data, getList);
    }

    let list;
    if (match.params.listId && db.lists && db.lists.length) {
        list = db.lists.find(list => list.id === match.params.listId);
    } 
    if (!list) return <LoaderCat />;

    return (
        <div id="todo-list-page" className="page">
            <br /><Typography gutterBottom variant="subtitle1">Раздел: {list.title}</Typography>
            <TodoForm
                onAdd={handleAdd}
                listId={list.id} />
            <TodoList
                onUpdate={handleUpdate}
                onErase={handleDelete}
                list={list}
                todos={todos}
            />
            {loading ? <BackdropCustom /> : null}
        </div>
    );
}