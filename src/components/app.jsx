import React, { useState } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

import TodoList from './todo-list/todo-list';
import Training from './training/training';
import Fetch from './fetch/fetch';
import { cx } from '../utility';
import logo from './logo.svg';
import styles from './app.module.scss';
import RichTextEditor from './calculator/calculator';
import Calculator from './calculator/calculator';

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
          <nav className={cx(styles.nav, 'col-8 offset-2')}>
            <ul className="row">
              <li className="col-2">
                <NavLink to="/todolist" className={styles.link} activeClassName={styles.active}>TODO-list</NavLink>
              </li>
              <li className="col-2">
                <NavLink to="/training" className={styles.link} activeClassName={styles.active}>Training</NavLink>
              </li>
              <li className="col-2">
                <NavLink to="/fetch" className={styles.link} activeClassName={styles.active}>Fetch</NavLink>
              </li>
              <li className="col-2">
                <NavLink to="/editor" className={styles.link} activeClassName={styles.active}>Calculator</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <ThemeContext.Provider value={theme}>

              <Switch>

                <Route exact path="/">
                  <Redirect to="/todolist" />
                </Route>

                <Route path="/todolist">
                  <TodoList />
                </Route>

                <Route path="/training">
                  <Training />
                </Route>

                <Route path="/fetch">
                  <Fetch />
                </Route>

                <Route path="/editor">
                  <Calculator />
                </Route>

              </Switch>

            </ThemeContext.Provider>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

};

export { ThemeContext };
export default App;
