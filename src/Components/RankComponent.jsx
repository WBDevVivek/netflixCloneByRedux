import React from "react";
import SvgComponent1 from "./SVG_Components/SvgComponent1";

function RankComponent() {
  return (
    <div className="rankingDiv">
      <SvgComponent1 className="top10Badge" />
      <span className="rankingSpan">#2 in India Today</span>
    </div>
  );
}

export default RankComponent;
