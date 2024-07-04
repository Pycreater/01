import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [clicked, setClicked] = useState();
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("we are in use state");
    return () => {
      console.log("return of use state");
    };
  }, [clicked, count]); // in this array we gonna a state which wanna have a effect on

  return (
    <div className="use">
      <button onClick={() => setClicked("Subscribe")}>Subscribe</button>
      <br /> <hr />
      <button onClick={() => setClicked("To")}>To</button>
      <br /> <hr />
      <button onClick={() => setClicked("YouTube")}>YouTube</button>
      <br /> <hr />
      <h1>{clicked}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <br /> <hr />
    </div>
  );
};

export default UseEffect;
