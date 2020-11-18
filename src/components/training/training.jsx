import React, { useState } from 'react';
import styles from './training.module.scss';

const Training = function() {

  const [player, setPlayer] = useState('X');
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const setSign = function (index) {
    if (!board[index]) {
      // event.target.innerHTML = player;
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);
      setPlayer(player === 'X' ? 'O' : 'X');
      setWinner(getWinner(newBoard));
    }
  };

  const getWinner = function(currentBoard) {
    let result = null;
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6], 
    ];
    combinations.some(combination => {
      const allX = combination.every(index => currentBoard[index] === 'X');
      const allO = combination.every(index => currentBoard[index] === 'O');
      if (allX) {
        result = "X";
      }
      if (allO) {
        result = "O";
      }
      return allX || allO;
    });
    console.log(result);
    return result;
  }

  return (
    <React.Fragment>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td onClick={() => setSign(0)}>{board[0]}</td>
            <td onClick={() => setSign(1)}>{board[1]}</td>
            <td onClick={() => setSign(2)}>{board[2]}</td>
          </tr>
          <tr>
            <td onClick={() => setSign(3)}>{board[3]}</td>
            <td onClick={() => setSign(4)}>{board[4]}</td>
            <td onClick={() => setSign(5)}>{board[5]}</td>
          </tr>
          <tr>
            <td onClick={() => setSign(6)}>{board[6]}</td>
            <td onClick={() => setSign(7)}>{board[7]}</td>
            <td onClick={() => setSign(8)}>{board[8]}</td>
          </tr>
        </tbody>
      </table>
    
      {winner &&
        <div>Nyertes: {winner}</div>
      }
    </React.Fragment>
  );
};

export default Training;
