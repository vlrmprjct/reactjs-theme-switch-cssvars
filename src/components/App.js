import React, { useState } from 'react';
import ThemeLoader from './ThemeLoader';
import logo from '../assets/images/logo.svg';
import './App.scss';

const App = () => {

    const [theme, setTheme] = useState('light');
    const trigger = (theme) => setTheme(theme);

    return (
        <div className="app">
            <ThemeLoader theme={theme} />
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <p>
                    <code>Save to reload.</code>
                </p>
                <p>
                    <button onClick={() => trigger('dark')}>DARK</button>
                    <button onClick={() => trigger('light')}>LIGHT</button>
                    <button onClick={() => trigger('colorful')}>COLORFUL</button>
                </p>
            </header>
        </div>
    );

}

export default App;
