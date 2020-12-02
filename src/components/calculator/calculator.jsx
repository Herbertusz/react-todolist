import { useState } from 'react';
import { evaluate } from 'mathjs';
import CalculatorDisplay from './calculator-display/calculator-display';
import CalculatorButtons from './calculator-buttons/calculator-buttons';
import styles from './calculator.module.scss';

const Calculator = function() {

  const [mathText, setMathText] = useState('');
  const [result, setResult] = useState('');

  const calculate = function() {
    if (mathText !== '') {
      try {
        const formattedMathText = mathText.replace(/√([\d.]+)/g, 'sqrt($1)').replace('=', '');
        let shortResult = String(evaluate(formattedMathText)).substring(0, 17);
        if (shortResult.includes('.')) {
          let i;
          for (i = shortResult.length - 1; shortResult[i] === '0'; i--);
          shortResult = shortResult.substring(0, shortResult[i] === '.' ? i : i + 1);
        }

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
