import React, { useState } from 'react';

import TodoList from './todo-list/todo-list';
import logo from './logo.svg';
import styles from './app.module.scss';

const defaultTheme = 'light';
const ThemeContext = React.createContext(defaultTheme);

const App = function() {

  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = function() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <React.Fragment>
      <div className="container-fluid">
        <header className={styles.header + ' row'}>
          <img src={logo} className={styles.logo + ' col-1'} alt="logo" />
          <h1 className="col-10">React TODO-list app</h1>
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
