import './styles.scss';
import Board from './components/Board';
import { useState } from 'react';
import { calculateWinner } from './winner';
import StatusMessage from './components/statusMessage';
import History from './components/History';

const NEW_GAME = [{ squares: Array(9).fill(null), isXnext: true }];

function App() {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);

  //statusMessage is dervied/computed from state so njot necessary to use state
  const gamingBoard = history[currentMove];
  // console.log(gamingBoard);
  // console.log(history);

  const winner = calculateWinner(gamingBoard.squares);

  const handleSquareClick = clickedPosition => {
    if (gamingBoard.squares[clickedPosition] || winner) {
      return;
    }
    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentHistory.length;
      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : currentHistory[currentHistory.length - 1];

      const nextSquareState = lastGamingState.squares.map(
        (squareValue, position) => {
          if (clickedPosition === position) {
            return lastGamingState.isXnext ? 'X' : 'O';
          }
          return squareValue;
        }
      );

      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;
      return base.concat({
        squares: nextSquareState,
        isXnext: !lastGamingState.isXnext,
      });
    });

    setCurrentMove(Move => Move + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };
  return (
    // <div className="AppDiv">
    //   <h1>Hello</h1>
    //   {/* attributes given to jsx elements are props */}
    //   <Square value="1">
    //     {/* everything inside here is available
    //     in children in component file */}
    //     <div>Hello children component</div>
    //     <h2>ok!</h2>
    //   </Square>

    //   <Square value="2" />
    //   <Square value="3" />
    //   <Square value="4" />
    //   <Square value="5" />
    // </div>
    //To update in value in react componenet we use state
    //as updation in react require rerender which is done by state
    //direct variable update doesnt work as it doesnt rerender
    //hooks in react are fn that allow us to manipulate componenet
    //lifecycle
    <div className="app">
      {/* <h2>{statusMessage}</h2> */}
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <Board
        squares={gamingBoard.squares}
        handleSquareClick={handleSquareClick}
      />
      <h2>Current Game History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
