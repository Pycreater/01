import React, { createContext } from "react";
import B from "./B";

const GreetContext = createContext();

const A = () => {
  const greet = "Hello World";
  return (
    <div>
      <GreetContext.Provider value={greet}>
        A
        <B />
      </GreetContext.Provider>
    </div>
  );
};

export default A;
export { GreetContext };
