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

const Square = ({ value, onClick }) => {
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
