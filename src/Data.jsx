import React, { useState } from "react";
import datas from "./data.json";

const Data = () => {
  const [nData, setnData] = useState(datas);
  console.log(datas);
  return (
    <div>
      <ul>
        {nData.map((item) => {
          <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Data;
