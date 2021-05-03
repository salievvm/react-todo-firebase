import { Container } from '@material-ui/core';
import React from 'react';

export default function AppContent({ ...props }) {
    return (
        <Container id="app-content" { ...props } />
    );
}