import { useState } from 'react';

import styles from './add-todo.module.scss';

const AddTodo = function(props) {

  const [text, setText] = useState('');

  const changeText = (event) => {
    setText(event.target.value);
  };

  const addText = () => {
    props.addItem(text);
    setText('');
  };

  return (
    <form className={styles.form}>
      <input type="text" value={text} onChange={changeText} />
      <button type="button" onClick={addText}>OK</button>
    </form>
  );

};

export default AddTodo;
