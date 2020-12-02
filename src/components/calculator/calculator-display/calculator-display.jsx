import styles from './calculator-display.module.scss';

const CalculatorDisplay = function({mathText, setMathText, result, calculate}) {

  const allowedCharacters = '0123456789+-/*()^.=';

  const changeText = function(event) {
    const val = event.target.value;
    if (allowedCharacters.includes(val[val.length - 1]) || val === '') {
      setMathText(event.target.value);
    }
  };

  const keyDown = function(event) {
    if (event.nativeEvent.key === 'Enter') {
      calculate();
    }
  };

  return (
    <div className={styles.display}>
      <input className={styles.expression} type="text" value={mathText} onChange={changeText} onKeyDown={keyDown} />
      <span className={styles.result}>{result}</span>
    </div>
  );

};

export default CalculatorDisplay;
