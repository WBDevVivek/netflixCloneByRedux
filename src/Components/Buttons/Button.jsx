import React from "react";
import { NavLink } from "react-router-dom";

// / Component For Button...!/

function Button({ BTNName, operation, BTNIcon }) {
  return (
    <>
      <button
        className="classForBTN"
        // onClick={operation}
      >
        <NavLink exact="true" className="" to="/" onClick={operation}>
          <span className="classForBTNName">{BTNName}</span>
          <span className="classForBTNIcon">{BTNIcon}</span>
        </NavLink>
      </button>
    </>
  );
}

export default Button;
