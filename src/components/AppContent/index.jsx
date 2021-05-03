import { Container } from '@material-ui/core';
import React from 'react';

export default function AppContent({ ...props }) {
    return (
        // <main  {...props} />
        <Container id="app-content" { ...props } />
    );
}