import React from 'react';
import { Loop } from '../shared/utility';
import GameStatus from './game-status/game-status';
import styles from './training.module.scss';

const TrainingTemplate = function({setSign, board, reset, player, winner}) {

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

export default TrainingTemplate;
