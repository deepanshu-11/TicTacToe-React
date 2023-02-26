import React from 'react';
const StatusMessage = ({ winner, isXnext, squares }) => {
  const noMovesLeft = squares.every(squareValue => {
    return squareValue !== null;
  });
  const nextPlayer = isXnext ? 'X' : 'O';

  const renderStatusMessage = () => {
    if (winner) {
      return (
        //React fragment displays empty element
        <React.Fragment>
          Winner is{' '}
          <span className={winner == 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </React.Fragment>
      );
    }
    if (!winner && noMovesLeft) {
      return (
        <div>
          {' '}
          <span className="text-green">Tie!!!!!!!!!!!!!!</span>
        </div>
      );
    }
    if (!winner && !noMovesLeft) {
      return (
        <div>
          Next player is{' '}
          <span className={isXnext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>{' '}
        </div>
      );
    }
    return null;
  };

  return <div className="status-message">{renderStatusMessage()}</div>;
};

export default StatusMessage;
