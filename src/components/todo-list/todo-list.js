import { useEffect, useState } from 'react';

import { Loop } from '../../utility';
import AddTodo from '../add-todo/add-todo';
import TodoListItem from './todo-list-item/todo-list-item';
import styles from './todo-list.module.scss';

const TodoList = function() {

  const [list, setList] = useState([]);
  const [nextId, setNextId] = useState(1);

  useEffect(() => {
    const listFromStorage = [
      { id: 1, text: 'A legnagyobb dobossá válni', done: true },
      { id: 2, text: 'Tolni a JS-t mint állat', done: true },
      { id: 3, text: 'Megtanulni a JSX-et', done: false },
      { id: 4, text: 'Besegíteni a react-os projektbe', done: false }
    ];

    const maxId = listFromStorage.reduce(
      (acc, curr) => curr.id > acc ? curr.id : acc, 0
    );

    setList(listFromStorage);
    setNextId(maxId + 1);
  }, []);

  const toggleDone = (id) => {
    const index = list.findIndex(item => item.id === id);
    const changedList = [...list];
    changedList[index].done = !changedList[index].done;
    setList(changedList);
  };

  const deleteItem = (id) => {
    const changedList = list.filter(
      item => item.id !== id
    );
    setList(changedList);
  };

  const addItem = (text) => {
    setList([
      ...list,
      { id: nextId, text, done: false }
    ]);
    setNextId(nextId + 1);
  };

  return (
    <div>
      <h1 className={styles.test}>Lista</h1>
      <ul className={styles.list}>
        <Loop forEach={list}>
          {item => (
            <TodoListItem key={item.id} {...item} onToggle={(id) => toggleDone(id)} deleteItem={(id) => deleteItem(id)} />
          )}
        </Loop>
      </ul>
      <AddTodo addItem={text => addItem(text)} />
    </div>
  );

};

export default TodoList;
