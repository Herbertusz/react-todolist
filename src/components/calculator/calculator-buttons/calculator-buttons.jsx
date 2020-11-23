import styles from './calculator-buttons.module.scss';

const CalculatorButtons = function() {

  return (
    <table className={styles.buttonTable} tabIndex="0">
      <tbody>
        <tr>
          <td><button> C </button></td>
          <td><button> &larr; </button></td>
          <td><button> ( </button></td>
          <td><button> ) </button></td>
          <td><button> &radic; </button></td>
        </tr>
        <tr>
          <td><button> 7 </button></td>
          <td><button> 8 </button></td>
          <td><button> 9 </button></td>
          <td><button> / </button></td>
          <td><button> x<sup>y</sup> </button></td>
        </tr>
        <tr>
          <td><button> 4 </button></td>
          <td><button> 5 </button></td>
          <td><button> 6 </button></td>
          <td><button> * </button></td>
          <td><button> 1/x </button></td>
        </tr>
        <tr>
          <td><button> 1 </button></td>
          <td><button> 2 </button></td>
          <td><button> 3 </button></td>
          <td><button> - </button></td>
          <td rowSpan="2"><button> = </button></td>
        </tr>
        <tr>
          <td colSpan="2"><button> 0 </button></td>
          <td><button> , </button></td>
          <td><button> + </button></td>
        </tr>
      </tbody>
    </table>
  )

}

export default CalculatorButtons;
