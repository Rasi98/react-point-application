import React, {useState} from 'react';
import './App.css';
import './styles/main.css'
import Layout from "./components/Layout";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
    const [dark, setDark] = useState(false)

    const darkTheme = createTheme({
        palette: {
            mode: dark ? 'dark' : 'light',
        },
    });
    const handleDark = () => {
        setDark(!dark)
    }


    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Layout dark={dark} handleDark={handleDark}/>
        </ThemeProvider>
    );
}

export default App;
