import React, { useState } from 'react';

const ThemeContext  = React.createContext();
const { Provider, Consumer } = ThemeContext;

const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState('Day');

    const toggleTheme = () => {
        const toggledTheme = (theme === 'Day') ? 'Night' : 'Day';
        setTheme(toggledTheme);
    }

    return(
        <Provider value={{ theme, toggleTheme }}>
            {props.children}
        </Provider>
    )
}

export { ThemeContext, ThemeContextProvider, Consumer as ThemeContextConsumer };