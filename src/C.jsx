import React, { useContext } from "react";
import { GreetContext } from "./A";

const C = () => {
  const useCon = useContext(GreetContext);

  //   console.log(props);
  return (
    <h1>{useCon}</h1>

    // <GreetContext.Consumer>
    //   {(val) => {
    //     return <h1>Greet: {val}</h1>;
    //   }}
    // </GreetContext.Consumer>
  );
};

export default C;
