import './styles.scss';
import Board from './components/Board';
// import Square from './components/Square';

function App() {
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
    <div className="app">
      <Board />
    </div>
  );
}

export default App;
