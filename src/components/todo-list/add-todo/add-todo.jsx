import { useState, useContext } from 'react';

import { ThemeContext } from '../../app';
import { cx } from '../../../utility';
import styles from './add-todo.module.scss';


const AddTodo = function(props) {

  const theme = useContext(ThemeContext);

  const [text, setText] = useState('');

  const addText = () => {
    props.addItem(text);
    setText('');
  };

  const changeText = (event) => {
    setText(event.target.value);
  };

  const keyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addText();
    }
  }

  return (
    <form className={cx(styles.form, styles[theme])}>
      <input type="text" placeholder="Add todo" value={text} onChange={changeText} onKeyDown={keyDown} />
      <button type="button" onClick={addText}>OK</button>
    </form>
  );

};

export default AddTodo;
