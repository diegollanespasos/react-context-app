import UserCard from '../UserCard/UserCard.component';
import './UserCardList.styles.css';
import { UsersContextConsumer } from '../../context/UsersContext';

const UserCardList = () => {

    return(
        <UsersContextConsumer>
        {
        ({ users, deleteUser }) => (
            <div className='usercard-list-container'>
                {
                users.map(user => <UserCard key={user.id} user={user} deleteUser={deleteUser}/>)
                }
            </div>
            )
        }
        </UsersContextConsumer> 
    )
}

export default UserCardList;