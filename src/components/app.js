import logo from './logo.svg';
import TodoList from './todo-list/todo-list';

import styles from './app.module.scss';

const App = function() {

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <h1 className={styles.test}>React TODO-list app</h1>
      </header>
      <div className={styles.content}>
        <TodoList />
      </div>
    </div>
  );

};

export default App;
