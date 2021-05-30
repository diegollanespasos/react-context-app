import './ButtonTheme.styles.css';
import { ThemeContextConsumer } from '../../context/ThemeContext';

const ButtonTheme = () => {
    return(
        <ThemeContextConsumer>
        {
        ({ theme, toggleTheme }) => (
                <button className={`${theme} button-theme`} onClick={toggleTheme}>Toggle Theme</button>
            )
        }
        </ThemeContextConsumer>  
    )
}

export default ButtonTheme;