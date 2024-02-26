import React from "react";

const AnimatedCard = ({ mediaData, h1, h2 }) => {
  return (
    <>
      <div className="animatedCardSecDiv">
        <div className="animatedCardDivForText">
          <>
            <h1 id="" className="animatedCardH1">
              {h1}
            </h1>
            <h2 id="" className="animatedCardH2">
              {h2}
            </h2>
          </>
        </div>
        <div className="animatedCardDivForIMG">{mediaData}</div>
      </div>
    </>
  );
};

export default AnimatedCard;
