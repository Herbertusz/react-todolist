import { cx } from '../../shared/utility';
import styles from './todo-list-item.module.scss';

const TodoListItemTemplate = function({props, theme, toggleDone, deleteItem}) {

  return (
    <li className={cx(styles.item, styles[theme])}>
      <label className={styles.checkbox}>
        <input type="checkbox" checked={props.done} onChange={toggleDone} />
        <span className={styles.text}>{props.text}</span>
      </label>
      <span className={styles.delete} onClick={deleteItem}>X</span>
    </li>
  );

};

export default TodoListItemTemplate;
