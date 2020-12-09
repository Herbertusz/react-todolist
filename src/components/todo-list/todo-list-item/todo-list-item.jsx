import TodoListItemTemplate from './todo-list-item-template';

const TodoListItem = function(props) {

  const toggleDone = () => {
    props.onToggle(props.id);
  };

  const deleteItem = () => {
    props.deleteItem(props.id);
  };

  return (
    <TodoListItemTemplate todoItem={{ done: props.done, text: props.text }} toggleDone={toggleDone} deleteItem={deleteItem}/>
  );

};

export default TodoListItem;
