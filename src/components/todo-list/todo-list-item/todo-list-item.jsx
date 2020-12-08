import { useContext } from 'react';
import { ThemeContext } from '../../app';
import TodoListItemTemplate from './todo-list-item-template';

const TodoListItem = function(props) {

  const theme = useContext(ThemeContext);

  const toggleDone = () => {
    props.onToggle(props.id);
  };

  const deleteItem = () => {
    props.deleteItem(props.id);
  };

  return (
    <TodoListItemTemplate props={props} theme={theme} toggleDone={toggleDone} deleteItem={deleteItem}/>
  );

};

export default TodoListItem;
