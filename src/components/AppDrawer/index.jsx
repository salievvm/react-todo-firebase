import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
    Drawer, DrawerHeader, DrawerContent,
    Icon,
    List, ListItem, ListItemGraphic, ListItemText, ListDivider,
    ListGroup
} from 'mdc-react';

import './index.scss';

export default function AppDrawer({ lists }) {
    const menu = [
        {to: "/", title: "Задачи", icon: "home"},
        {to: "/important", title: "Важное", icon: "star"},
        {to: "/planned", title: "Запланированные", icon: "event"},
    ]
    return (
        <Drawer 
            id='app-drawer' >
            <DrawerHeader
                title="React Todo" >

            </DrawerHeader>
            <DrawerContent>
                <ListGroup>

                    <List>
                        {menu.map(item => (
                            <ListItem
                                key={item.title}
                                component={NavLink}
                                to={item.to}
                                >
                                <ListItemGraphic>
                                    <Icon>{item.icon}</Icon>
                                </ListItemGraphic>
                                <ListItemText>
                                    {item.title}
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>

                    <ListDivider element='hr' />

                    <List>
                        {lists ? lists.map(item => (
                            <ListItem 
                                key={item.id}
                                component={NavLink}
                                to={item.id}
                                className="menu-list__item"
                                >
                                <ListItemGraphic>
                                    <Icon>list</Icon>
                                </ListItemGraphic>
                                <ListItemText>
                                    {item.title}
                                </ListItemText>
                            </ListItem>
                        )) : null}
                    </List>
                </ListGroup>
            </DrawerContent>
        </Drawer>
    );
}