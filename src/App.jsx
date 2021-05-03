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
import { Typography } from '@material-ui/core';
import LoaderCat from './components/LoaderCat';

const THEME_DEFAULT = localStorage.getItem('THEME_DEFAULT') || 'base';

export default function App() {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        get("lists")().then(setLists);
    }, []);

    const [theme, setTheme] = React.useState(THEME_DEFAULT);
    const changeDarkTheme = (val) => {
        const newTheme = val ? 'dark' : 'base';
        setTheme(newTheme);
        localStorage.setItem('THEME_DEFAULT', newTheme);
    }

    return (
        <ThemeProvider theme={themes[theme]}>
            <DBContext.Provider value={{ lists, get, add, erase, update }}>
                <div className="app">
                    <AppDrawer
                        handleDarkTheme={changeDarkTheme}
                        title={'React Todo Cat Manager'}
                        lists={lists} />

                    <AppContent>
                        <Switch>
                            <Route exact path={["/:listId"]} component={TodoList} />
                            <Route default render={() =>
                                <>
                                    <div className="main-page-container">
                                        <LoaderCat />
                                        <div>
                                            <Typography variant="h5">Добро пожаловать в</Typography>
                                            <Typography color="secondary" variant="h5">React Todo Cat Manager</Typography>
                                        </div>
                                    </div>
                                    <Typography style={{ position: 'absolute', bottom: 16, right: 16 }} variant="caption">
                                        Работает на технологии&nbsp;
                                        <a style={{color: "#ffa610", textDecoration: 'none'}} href="https://firebase.google.com/docs/firestore" target="_blank">Firebase</a>
                                    </Typography>
                                </>
                            } />
                        </Switch>
                    </AppContent>
                </div>
            </DBContext.Provider>
        </ThemeProvider>
    );
}