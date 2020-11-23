import CalculatorDisplay from "./calculator-display/calculator-display";
import CalculatorButtons from "./calculator-buttons/calculator-buttons";
import styles from './calculator.module.scss';

const Calculator = function() {

  return (
    <section className={styles.calculator}>
      <CalculatorDisplay />
      <CalculatorButtons />
    </section>
  )

}

export default Calculator;
