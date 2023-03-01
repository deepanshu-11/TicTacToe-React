const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, index) => (
          <li key={index}>
            <button
              type="button"
              className={`btn-move ${currentMove === index ? 'active' : ''}`}
              onClick={() => moveTo(index)}
            >
              {index == 0 ? 'Go to game start' : `Go to Move #${index}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
//to help jsx uniquely identify each element
//in dynamic array(.map) we use key
//key must be unique
export default History;
