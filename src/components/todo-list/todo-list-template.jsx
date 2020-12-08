import { Loop } from '../shared/utility';
import AddTodo from './add-todo/add-todo';
import TodoListItem from './todo-list-item/todo-list-item';
import styles from './todo-list.module.scss';

const TodoListTemplate = function({list, toggleDone, deleteItem, addItem}) {

  return (
    <div className={styles.listContainer}>
      <ul className={styles.list}>
        {!list.length &&
          <li>Nothing todo</li>
        }
        <Loop forEach={list}>
          {item => (
            <TodoListItem key={item.id} {...item} onToggle={toggleDone} deleteItem={deleteItem} />
          )}
        </Loop>
      </ul>
      <AddTodo addItem={addItem} />
    </div>
  );

};

export default TodoListTemplate;
