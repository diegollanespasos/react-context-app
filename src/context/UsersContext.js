import React, { useState } from 'react';
import { USERS } from '../data/users';

const { Provider, Consumer } = React.createContext();

const UsersContextProvider = (props) => {
    const [users, setUsers] = useState(USERS);

    const deleteUser = (userID) =>{
        setUsers((users) => users.filter(user => user.id !== userID));
    }

    return (
        <Provider value={{ users, deleteUser }}>
            {props.children}
        </Provider>
    )
}

export { UsersContextProvider, Consumer as UsersContextConsumer };