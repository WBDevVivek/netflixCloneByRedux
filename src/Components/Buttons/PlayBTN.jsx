import React from "react";

import SvgComponent2 from "../SVG_Components/SvgComponent2";

function PlayBTN({ onClick }) {
  return (
    <div className="buttonPlay" onClick={onClick}>
      <span>
        <SvgComponent2 />
      </span>
      Play
    </div>
  );
}

export default PlayBTN;
