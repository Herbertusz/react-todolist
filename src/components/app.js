import React, { useState } from 'react';

import TodoList from './todo-list/todo-list';
import logo from './logo.svg';
import styles from './app.module.scss';
import { cx } from '../utility';

const defaultTheme = 'light';
const ThemeContext = React.createContext(defaultTheme);

const App = function() {

  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = function() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
    setTheme(newTheme);
  }

  return (
    <React.Fragment>
      <div className="container-fluid">
        <header className={cx(styles.header, 'row')}>
          <img src={logo} className={cx(styles.logo,' col-1')} alt="logo" />
          <h1 className="col-10">React TODO-list app</h1>
          <label className={cx(styles.themeSelector,' col-1')}>
            <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} /> Dark
          </label>
        </header>
      </div>
      
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ThemeContext.Provider value={theme}>
              <TodoList />
            </ThemeContext.Provider>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

};

export { ThemeContext };
export default App;
