import React from 'react';

import logo from './logo.svg';
import TodoList from './todo-list/todo-list';
import styles from './app.module.scss';

const App = function() {

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
            <TodoList />
          </div>
        </div>
      </div>
    </React.Fragment>
  );

};

export default App;
