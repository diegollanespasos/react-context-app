import React, { createContext, useState } from 'react';
import { LOGIN_INFO } from '../data/loginInfo';

const LoginContext = createContext();
const { Provider, Consumer } = LoginContext

const LoginContextProvider = (props) => {
    const [loginInfo, setLoginInfo] = useState(LOGIN_INFO);

    const toggleLogInById = (userId) => {
        setLoginInfo((loginInfo) => {
            return loginInfo.map(user => user.id === userId ? {...user, isLoggedIn: !user.isLoggedIn }  : user);
        })   
    }
    
    return (
        <Provider value={{ loginInfo, toggleLogInById }}>
            {props.children}
        </Provider>
    )
}

export { LoginContext, LoginContextProvider, Consumer as LoginContextConsumer };