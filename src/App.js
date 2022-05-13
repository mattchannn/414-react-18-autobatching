import { useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const initialRender = useRef(true);
  const [renderCount] = useState(1);
  const [stateOne, setStateOne] = useState(false);
  const [stateTwo, setStateTwo] = useState(false);

  function onClickTimeout() {
    setTimeout(() => {
      initialRender.current = false;
      setStateOne(!stateOne);
      setStateTwo(!stateTwo);
    }, 1000);
  }

  if (!initialRender.current) {
    alert(`App is rendered for ${renderCount} time`);
  }

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <button style={{ padding: "0.6rem" }} onClick={onClickTimeout}>
            Click Me
          </button>
        </div>
        <div className="App-description" style={{ marginTop: "2rem" }}>
          In React 17, the App.js is rendered 2 times when you click the button
        </div>
      </div>
    </div>
  );
}

export default App;
