import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { ThemeContext } from '../../context/ThemeContext';

const ButtonLogin = ({ userId, isLoggedIn }) => {
    const { toggleLogInById } = useContext(LoginContext);
    const { theme } = useContext(ThemeContext);

    const handlerToggleLogInById = () => {
        toggleLogInById(userId);
    }

    return (    
        <button className={`${theme} button`} onClick={handlerToggleLogInById} >{`${isLoggedIn ? 'Log Out': 'Log In'}`}</button>
    )
}

export default ButtonLogin;