import { useReducer } from "react";

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "incr") {
    return { count: state.count + 1 };
  } else if (action.type === "desc") {
    return { count: state.count - 1 };
  } else if (action.type === "reset") {
    return { coutn: (state.count = 0) };
  } else {
    throw new Error("Unsupported action type...");
  }
};

function UseReducer() {
  //   const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleIncreseCount = () => {
    dispatch({
      type: "incr",
    });
  };

  const handleDecreseCount = () => {
    dispatch({
      type: "desc",
    });
  };

  const handleResetCount = () => {
    dispatch({
      type: "reset",
    });
  };

  return (
    <div className="main">
      <div className="count-nums">
        <div className="count" style={{ fontSize: "20px" }}>
          {state.count}
        </div>
        <div className="plus-btns">
          <button onClick={handleIncreseCount}>+</button>
          <button onClick={handleResetCount}>Reset</button>
          <button onClick={handleDecreseCount}>-</button>
        </div>
      </div>
    </div>
  );
}

export default UseReducer;
