import { useState, useContext } from 'react';

import { ThemeContext } from '../../app';
import styles from './add-todo.module.scss';
import { cx } from '../../../utility';


const AddTodo = function(props) {

  const theme = useContext(ThemeContext);

  const [text, setText] = useState('');

  const changeText = (event) => {
    setText(event.target.value);
  };

  const addText = () => {
    props.addItem(text);
    setText('');
  };

  return (
    <form className={cx(styles.form, styles[theme])}>
      <input type="text" placeholder="Add todo" value={text} onChange={changeText} />
      <button type="button" onClick={addText}>OK</button>
    </form>
  );

};

export default AddTodo;
