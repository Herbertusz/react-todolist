import { useEffect, useState } from 'react';
import TodoListTemplate from './todo-list-template';

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
   <TodoListTemplate list={list} toggleDone={toggleDone} deleteItem={deleteItem} addItem={addItem}/>
  );

};

export default TodoList;
