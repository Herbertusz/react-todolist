import CalculatorDisplay from "./calculator-display/calculator-display";
import CalculatorButtons from "./calculator-buttons/calculator-buttons";
import styles from './calculator.module.scss';
import { useState } from 'react';
import { evaluate } from "mathjs";

const Calculator = function() {

  const [mathText, setMathText] = useState('');
  const [result, setResult] = useState('');

  const calculate = function() {
    if (mathText !== '') {
      try {
        const formattedMathText = mathText.replace(/√([\d.]+)/g, 'sqrt($1)');
        console.log(formattedMathText);
        const shortResult = String(evaluate(formattedMathText)).substring(0, 17);
        setResult(shortResult);
      }
      catch (exception) {
        setResult('Hibás kifejezés!');
      }
    }
  };

  return (
    <section className={styles.calculator}>
      <CalculatorDisplay mathText={mathText} setMathText={setMathText} result={result} calculate={calculate}/>
      <CalculatorButtons setMathText={setMathText} setResult={setResult} calculate={calculate}/>
    </section>
  )

}

export default Calculator;
