import React, { useState } from 'react';

const ThemeContext  = React.createContext();
const { Provider, Consumer } = ThemeContext;

const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState('Day');

    const toggleTheme = () => {
        setTheme((theme) => (theme === 'Day') ? 'Night' : 'Day');
    }

    return(
        <Provider value={{ theme, toggleTheme }}>
            {props.children}
        </Provider>
    )
}

export { ThemeContext, ThemeContextProvider, Consumer as ThemeContextConsumer };