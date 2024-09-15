import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { useNumber } from "mmm";
import { useNumber } from "./react-super-variables";

// let useNumber2 = (
//   definingValue: number,
//   options?: {
//     min?: number;
//     max?: number;
//     step?: number;
//     decimal?: number;
//   }
// ) => {
//   return {
//     value: 0,
//     set: (n: number) => {},
//   };
// }

function App() {
  let num = useNumber(10);
console.log(num);

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main>
        <input value={num.value} onChange={e => num.set(Number(e.target.value))} />
        <div>{num.value}</div>
      </main>
    </div>
  );
}

export default App;
