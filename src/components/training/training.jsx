import React, { useState } from 'react';
import { Loop } from '../shared/utility';
import GameStatus from './game-status/game-status';
import styles from './training.module.scss';

const Training = function() {

  const [player, setPlayer] = useState('X');
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const setSign = function (index) {
    if (!board[index] && getWinner(board) === null) {
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
    const isWinner = combinations.some(combination => {
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
    const boardIsFull = !currentBoard.some(field => field === null);
    if (boardIsFull && !isWinner) {
      result = "Draw";
    }
    return result;
  }

  const reset = function() {
    setPlayer('X');
    setBoard(Array(9).fill(null));
    setWinner(null);
  }

  return (
    <React.Fragment>
      <h1 className={styles.title}>Tic Tac Toe</h1>
      <div className={styles.table}>
        <Loop for={9}>
          {n => (
            <div key={n} onClick={() => setSign(n)}>{board[n]}</div>
          )}
        </Loop>
      </div>
      <div className={styles.resetButton}>
        <button onClick={reset}>Reset</button>
      </div>

      <hr />
      <GameStatus nextPlayer={player} winner={winner} />
    </React.Fragment>
  );

};

export default Training;
