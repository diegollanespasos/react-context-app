import { useContext } from 'react';
import './App.css';
import ButtonTheme from './components/ButtonTheme/ButtonTheme.component';
import UserCardList from './components/UserCardList/UserCardList.component';
import { ThemeContext } from './context/ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
      <div className={`${theme} app-container`}>
        <ButtonTheme />
        <UserCardList />
      </div>
  );
}

export default App;