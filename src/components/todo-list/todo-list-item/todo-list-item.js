import { useContext } from 'react';

import { ThemeContext } from '../../app';
import styles from './todo-list-item.module.scss';

const TodoListItem = function(props) {

  const theme = useContext(ThemeContext);

  const toggleDone = () => {
    props.onToggle(props.id);
  };

  const deleteItem = () => {
    props.deleteItem(props.id);
  };

  return (
    <li className={styles.item + ' ' + styles[theme]}>
      <label className={styles.checkbox}>
        <input type="checkbox" checked={props.done} onChange={toggleDone} />
        <span className={styles.text}>{props.text}</span>
      </label>
      <span className={styles.delete} onClick={deleteItem}>X</span>
    </li>
  );

};

export default TodoListItem;
