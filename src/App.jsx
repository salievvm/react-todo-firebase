import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'

import { get, add, erase, update } from './api'

import DBContext from './contexts/db';

import AppDrawer from './components/AppDrawer'
import AppContent from './components/AppContent'
import TodoList from './pages/TodoList'

/*** MATERIAL-UI */
import { ThemeProvider } from '@material-ui/core/styles';
import themes from './themes'

import './App.scss';

export default function App() {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        get("lists")().then(setLists);
    }, []);

    return (
        <ThemeProvider theme={themes['base']}>
            <DBContext.Provider value={{ lists, get, add, erase, update }}>
                <div className="app">
                    <AppDrawer
                        title={'React Todo 2.0 - Firebase'}
                        lists={lists} />

                    <AppContent>
                        <Switch>
                            <Route exact path="/:listId" component={TodoList} />
                        </Switch>
                    </AppContent>
                </div>
            </DBContext.Provider>
        </ThemeProvider>
    );
}