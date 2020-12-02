import styles from './calculator-buttons.module.scss';

const CalculatorButtonsTemplate = function({ CalcButtonSample, clear, backspace, getResult }) {

  return (
    <table className={styles.buttonTable} tabIndex="0">
      <tbody>
        <tr>
          <td><button onClick={clear}> C </button></td>
          <td><button onClick={backspace}> &larr; </button></td>
          <td><CalcButtonSample param="("/></td>
          <td><CalcButtonSample param=")"/></td>
          <td><CalcButtonSample param="√" label="&radic;"/></td>
        </tr>
        <tr>
          <td><CalcButtonSample param="7"/></td>
          <td><CalcButtonSample param="8"/></td>
          <td><CalcButtonSample param="9"/></td>
          <td><CalcButtonSample param="/"/></td>
          <td><CalcButtonSample param="^" label="x<sup>y</sup>"/></td>
        </tr>
        <tr>
          <td><CalcButtonSample param="4"/></td>
          <td><CalcButtonSample param="5"/></td>
          <td><CalcButtonSample param="6"/></td>
          <td><CalcButtonSample param="*"/></td>
          <td><CalcButtonSample param="1/" label="1/x"/></td>
        </tr>
        <tr>
          <td><CalcButtonSample param="1"/></td>
          <td><CalcButtonSample param="2"/></td>
          <td><CalcButtonSample param="3"/></td>
          <td><CalcButtonSample param="-"/></td>
          <td rowSpan="2"><button onClick={getResult}> = </button></td>
        </tr>
        <tr>
          <td colSpan="2"><CalcButtonSample param="0"/></td>
          <td><CalcButtonSample param="."/></td>
          <td><CalcButtonSample param="+"/></td>
        </tr>
      </tbody>
    </table>
  );

};

export default CalculatorButtonsTemplate;
