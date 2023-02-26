import './styles.scss';
import Board from './components/Board';
import { useState } from 'react';
import { calculateWinner } from './winner';
import StatusMessage from './components/statusMessage';
// import Square from './components/Square';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXnext, setisXnext] = useState(true);
  //statusMessage is dervied/computed from state so njot necessary to use state
  const winner = calculateWinner(squares);

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) {
      return;
    }
    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXnext ? 'X' : 'O';
        }
        return squareValue;
      });
    });

    setisXnext(currentisXnext => {
      return !currentisXnext;
    });
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
      <StatusMessage winner={winner} isXnext={isXnext} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
