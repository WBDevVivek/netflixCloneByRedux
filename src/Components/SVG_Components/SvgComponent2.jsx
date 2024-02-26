import React from "react";

/* //for MoreInfo Logo */

function SvgComponent2(props) {
  return (
    <div className="forSVG">
      <svg viewBox="0 0 24 24" {...props}>
        <path d="M6 4l15 8-15 8z" fill="currentColor" />
      </svg>
    </div>
  );
}

export default SvgComponent2;
