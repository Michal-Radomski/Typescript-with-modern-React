import logo from "./logo.svg";
import "./App.css";

function App() {
  function sum(a: number, b: number): number {
    return a + b;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {sum(2, 15)}
      </header>
    </div>
  );
}

export default App;
