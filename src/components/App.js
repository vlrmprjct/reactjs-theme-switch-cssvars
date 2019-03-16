import React, { useState } from 'react';
import ThemeLoader from './ThemeLoader';
import logo from '../assets/images/logo.svg';
import './App.scss';

const App = () => {

    // 0: DARK
    // 1: LIGHT
    // DARK THEME AS DEFAULT
    // TODO: ADD USEFUL THEMES NAMES
    const [theme, setTheme] = useState(0);

    const trigger = () => {
        setTheme( 1 - theme );
    };

    return (
        <div className="app">
            <ThemeLoader theme={theme} />
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <p>
                    <code>Save to reload.</code>
                </p>
                <p>
                    <button onClick={() => trigger()}>Toggle Theme</button>
                </p>
            </header>
        </div>
    );

}

export default App;
