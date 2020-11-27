import Button from "../../shared/button";
import CalculatorButtonsTemplate from './calculator-buttons-template';

const CalculatorButtons = function({setMathText, setResult, calculate}) {

  const clear = function() {
    setMathText('');
    setResult('');
  };

  const addCharacter = function(buttonValue) {
    setMathText(currentMathText => currentMathText + buttonValue);
  };

  const CalcButtonSample = function({param, label = param}) {
    return(
      <Button callback={addCharacter} param={param} label={label}/>
    );
  };

  const backspace = function() {
    setMathText(currentMathText => currentMathText.substring(0, currentMathText.length - 1));
  };

  const getResult = function() {
    addCharacter('=');
    calculate();
  }

  return (
    <CalculatorButtonsTemplate clear={clear} CalcButtonSample={CalcButtonSample} backspace={backspace} getResult={getResult}/>
  )

}

export default CalculatorButtons;
