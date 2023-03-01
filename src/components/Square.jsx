// //props is js object sent from the component
// // const Square = props => {
// const Square = ({ value, children }) => {
//   //   console.log(props);
//   //   console.log(children);
//   return (
//     <div>
//       Hello from square jsx {value}
//       <h3>Children will be rendered here</h3>
//       <div>{children}</div>
//     </div>
//   );
// };

const Square = ({ value, onClick, isWinningSquare }) => {
  const colorClassName = value === 'X' ? 'text-green' : 'text-orange';
  const winningClassName = isWinningSquare ? 'winning' : '';
  return (
    <button
      type="button"
      className={`square ${colorClassName} ${winningClassName}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
