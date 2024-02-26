import React from "react";

/* //for play button */

function SvgComponent3(props) {
  return (
    <div className="forSVG">
      <svg viewBox="0 0 24 24" {...props}>
        <path
          d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 00-8-8 8 8 0 00-8 8 8 8 0 008 8 8 8 0 008-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 01-.877-.364A1.188 1.188 0 0110.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0112 9.25z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export default SvgComponent3;
