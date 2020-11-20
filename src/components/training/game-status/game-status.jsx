import React from "react";

const GameStatus = function(props) {

  console.log(props);

  return (
    <React.Fragment>
      {!props.winner &&
        <div>Következő: {props.nextPlayer}</div>
      }
      {props.winner &&
          <div>Nyertes: {props.winner === 'Draw' ? 'Döntetlen' : props.winner}</div>
      }
    </React.Fragment>
  );

};

export default GameStatus;
