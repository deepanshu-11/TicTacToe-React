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

const Square = ({ value }) => {
  return (
    <button type="button" className="square">
      {value}
    </button>
  );
};

export default Square;
