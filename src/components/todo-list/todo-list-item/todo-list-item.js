import styles from './todo-list-item.module.scss';

const TodoListItem = function(props) {

  const toggleDone = () => {
    props.onToggle(props.id);
  };

  const deleteItem = () => {
    props.deleteItem(props.id);
  };

  return (
    <li className={styles.item}>
      <input type="checkbox" checked={props.done} onChange={toggleDone} />
      <span>{props.text}</span>
      <span className={styles.delete} onClick={deleteItem}>X</span>
    </li>
  );

};

export default TodoListItem;
