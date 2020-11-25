import { evaluate } from 'mathjs';
import styles from './calculator-buttons.module.scss';

const CalculatorButtons = function({setMathText, setResult, calculate}) {

  const clear = function() {
    setMathText('');
    setResult('');
  };

  const addCharacter = function(buttonValue) {
    setMathText(currentMathText => currentMathText + buttonValue);
  };

  const backspace = function() {
    setMathText(currentMathText => currentMathText.substring(0, currentMathText.length - 1));
  };

  return (
    <table className={styles.buttonTable} tabIndex="0">
      <tbody>
        <tr>
          <td><button onClick={clear}> C </button></td>
          <td><button onClick={backspace}> &larr; </button></td>
          <td><button onClick={() => addCharacter('(')}> ( </button></td>
          <td><button onClick={() => addCharacter(')')}> ) </button></td>
          <td><button onClick={() => addCharacter('√')}> &radic; </button></td>
        </tr>
        <tr>
          <td><button onClick={() => addCharacter('7')}> 7 </button></td>
          <td><button onClick={() => addCharacter('8')}> 8 </button></td>
          <td><button onClick={() => addCharacter('9')}> 9 </button></td>
          <td><button onClick={() => addCharacter('/')}> / </button></td>
          <td><button onClick={() => addCharacter('^')}> x<sup>y</sup> </button></td>
        </tr>
        <tr>
          <td><button onClick={() => addCharacter('4')}> 4 </button></td>
          <td><button onClick={() => addCharacter('5')}> 5 </button></td>
          <td><button onClick={() => addCharacter('6')}> 6 </button></td>
          <td><button onClick={() => addCharacter('*')}> * </button></td>
          <td><button onClick={() => addCharacter('1/')}> 1/x </button></td>
        </tr>
        <tr>
          <td><button onClick={() => addCharacter('1')}> 1 </button></td>
          <td><button onClick={() => addCharacter('2')}> 2 </button></td>
          <td><button onClick={() => addCharacter('3')}> 3 </button></td>
          <td><button onClick={() => addCharacter('-')}> - </button></td>
          <td rowSpan="2"><button onClick={calculate}> = </button></td>
        </tr>
        <tr>
          <td colSpan="2"><button onClick={() => addCharacter('0')}> 0 </button></td>
          <td><button onClick={() => addCharacter('.')}> . </button></td>
          <td><button onClick={() => addCharacter('+')}> + </button></td>
        </tr>
      </tbody>
    </table>
  )

}

export default CalculatorButtons;
