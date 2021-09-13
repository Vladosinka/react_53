import { ThemeContext } from './theme-context';

function ThemeTogglerButton() {
  // ThemeTogglerButton получает из контекста
  // не только значение UI-темы, но и функцию toggleTheme.
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button
          type="button"
          onClick={toggleTheme}
          style={{ backgroundColor: theme.background }}
        >
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;
