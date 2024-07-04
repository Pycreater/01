import React from "react";
import "./MobileLists.css";

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqH-gQn6PufavH6Hr0rEOcaUj3neZ8PzMgNQ&s";
const title = "Crush";

const img2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDgnUtcob051QfKj4SVUx2CRvgJVLkLSCRww&s";
const title2 = "Crush 2";

const MobileLists = () => {
  return (
    <div className="main-girls">
      <img src={img} alt={title} />
      <img src={img2} alt={title2} />
    </div>
  );
};

export default MobileLists;
