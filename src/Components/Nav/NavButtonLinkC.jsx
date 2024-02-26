import React from "react";

const NavButtonLinkC = ({ linkName, linkOperation }) => {
  return (
    <>
      <button onClick={linkOperation}> {linkName} </button>
    </>
  );
};

export default NavButtonLinkC;
