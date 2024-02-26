import React from "react";
import { NavLink } from "react-router-dom";

function NavLinkC({ linkOperation, linkName, style, goToLink, className }) {
  return (
    <>
      <NavLink
        exact="true"
        style={style}
        to={goToLink}
        className={className}
        onClick={linkOperation}
      >
        {linkName}
      </NavLink>
    </>
  );
}

export default NavLinkC;
