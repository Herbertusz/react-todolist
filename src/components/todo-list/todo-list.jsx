import { useEffect, useState } from 'react';

import { Loop } from '../../utility';
import AddTodo from './add-todo/add-todo';
import TodoListItem from './todo-list-item/todo-list-item';
import styles from './todo-list.module.scss';

const TodoList = function() {

  const [list, setList] = useState([]);
  const [nextId, setNextId] = useState(1);

  useEffect(() => {
    const listFromStorage = JSON.parse(localStorage.getItem('todolist')) || [];

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
    localStorage.setItem('todolist', JSON.stringify(changedList));
  };

  const deleteItem = (id) => {
    const changedList = list.filter(
      item => item.id !== id
    );
    setList(changedList);
    localStorage.setItem('todolist', JSON.stringify(changedList));
  };

  const addItem = (text) => {
    const changedList = [
      ...list,
      { id: nextId, text, done: false }
    ];
    setNextId(nextId + 1);
    setList(changedList);
    localStorage.setItem('todolist', JSON.stringify(changedList));
  };

  return (
    <div className={styles.listContainer}>
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
