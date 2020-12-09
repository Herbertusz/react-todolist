import { useContext } from 'react';
import { ThemeContext } from '../../app';
import { cx } from '../../shared/utility';
import styles from './todo-list-item.module.scss';

const TodoListItemTemplate = function({todoItem, toggleDone, deleteItem}) {

  const theme = useContext(ThemeContext);

  return (
    <li className={cx(styles.item, styles[theme])}>
      <label className={styles.checkbox}>
        <input type="checkbox" checked={todoItem.done} onChange={toggleDone} />
        <span className={styles.text}>{todoItem.text}</span>
      </label>
      <span className={styles.delete} onClick={deleteItem}>X</span>
    </li>
  );

};

export default TodoListItemTemplate;
