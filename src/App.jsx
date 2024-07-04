import { useState } from "react";
import "./App.css";
import Mobile from "./Mobile";
import datas from "./data.json";

function App() {
  const [count, setCount] = useState(0);
  const [nData, setnData] = useState(datas);
  // console.log(datas);
  const handleIncreseCount = () => {
    setCount(count + 1);
  };

  const handleDecreseCount = () => {
    setCount(count - 1);
  };

  const handleResetCount = () => {
    setCount(0);
  };

  const handleClear = () => {
    setnData([]);
  };

  const handleRemove = (id) => {
    setnData(nData.filter((item) => item.id !== id));
  };

  const handleUpdate = (id) => {
    setnData(
      nData.map((item) => {
        if (item.id === id) {
          if (id % 2 === 0) {
            return { name: "mia" };
          }
          return { name: "niggas" };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <div className="main">
      <h1>Hello World</h1>
      <h3 style={{ backgroundColor: "yellow", color: "green" }}>
        Pratik here...
      </h3>
      <div className="count-nums">
        <div className="count" style={{ fontSize: "20px" }}>
          {count}
        </div>
        <div className="plus-btns">
          <button onClick={handleIncreseCount}>+</button>
          <button onClick={handleResetCount}>Reset</button>
          <button onClick={handleDecreseCount}>-</button>
        </div>
      </div>
      <div className="girls">
        <Mobile />
      </div>
      <div className="data-names">
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {nData.map((item) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => handleRemove(item.id)}>remove</button>
              <button onClick={() => handleUpdate(item.id)}>update</button>
            </li>
          ))}
        </ul>
        <button
          style={{
            marginBottom: "30px",
            height: "50px",
            width: "60px",
            fontSize: "20px",
          }}
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
