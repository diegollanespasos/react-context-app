import { useContext } from 'react';
import { ThemeContextConsumer } from '../../context/ThemeContext';
import { LoginContext } from '../../context/LoginContext';
import './UserCard.styles.css';
import deleteIcon from '../../assets/delete.png';

const UserCard = ( { user, deleteUser }) => {
    const { loginInfo, toggleLogInById} = useContext(LoginContext);
    const { id, avatar, name, biography } = user;

    const userInfo = loginInfo.filter(user => user.id === id)[0];
    const { username, password, isLoggedIn } = userInfo;

    const handlerDeleteUser = () => {
        deleteUser(id);
    }

    const handlerToggleLogInById = () => {
        toggleLogInById(id);
    }

    return (
        <ThemeContextConsumer>
            {
            ({ theme }) => (
                    <div className={`${theme} usercard-container`}>
                        <div className='usercard-header'>
                            <button className={`${theme} button`} onClick={handlerToggleLogInById} >Log In</button>
                        </div>
                        {
                            isLoggedIn ?
                            <div className='usercard-info'>
                                <img src={avatar} alt={avatar} />
                                <h2>{name}</h2>
                                <p>{biography}</p>
                                <div className='usercard-secondary-info'>
                                    <h4>{`Username: ${username}`}</h4>
                                    <h4>{`Password: ${password}`}</h4>
                                    <button className={`${theme} button`} onClick={handlerDeleteUser} ><img style={{ width: '40px' }} src={deleteIcon} alt='delete' /></button>
                                </div>
                            </div>
                            :
                            <div>
                                <h1>You need to log in</h1>
                            </div>
                        }
                    </div>
                )
            }
        </ThemeContextConsumer>
    )
}

export default UserCard;