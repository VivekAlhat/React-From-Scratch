import React from "./core/React";
import "./index.css";

import root from "./constants";
import CustomGreeting from "./components/CustomGreeting";
import Greeting from "./components/Greeting";

const fruits = ["Apple", "Pineapple"];

const App = () => {
  const [counter, setCounter, subscribeCounter] = React.useState(0);
  const [count, setCount, subscribeCount] = React.useState(0);

  subscribeCounter(() => {
    React.render(<App />, root);
  });

  subscribeCount(() => {
    React.render(<App />, root);
  });

  const handleIncrement = () => setCounter(counter + 1);
  const handleDecrement = () => setCounter(counter - 1);

  return (
    <section className="main">
      <Greeting name="World" />
      <div className="box">
        <h3>List rendering</h3>
        <ul>
          {fruits.map((fruit) => (
            <li>{fruit}</li>
          ))}
        </ul>
      </div>
      <div className="box" id="counter-1">
        <p>
          Counter 1: <pre>{counter}</pre>
        </p>
        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={handleIncrement}>Increase</button>
          <button onClick={handleDecrement}>Decrease</button>
        </div>
      </div>
      <div className="box" id="counter-2" style={{ marginTop: "4px" }}>
        <p>
          Counter 2: <pre>{count}</pre>
        </p>
        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={() => setCount(count + 1)}>Increase</button>
          <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
      </div>
      <CustomGreeting />
    </section>
  );
};

React.render(<App />, root);

export default App;
