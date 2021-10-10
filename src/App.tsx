import React from 'react';
import './App.css';
import { AppBar, createTheme, Toolbar, Typography } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { GridPage } from './pages/grid/GridPage';

const App = () => {
    const defaultTheme = createTheme();

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <div className="App">
                    <AppBar
                        position="static"
                        color="default"
                        elevation={0}
                        sx={{borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}
                    >
                        <Toolbar sx={{flexWrap: 'wrap'}}>
                            <Typography variant="h6" color="inherit" noWrap sx={{flexGrow: 1}}>
                                Grid Interview Problem
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <GridPage/>
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;

