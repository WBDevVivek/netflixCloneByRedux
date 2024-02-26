import React from "react";
import { useDispatch } from "react-redux";
import { backToHome } from "../../action/action";
import NavLinkC from "../Nav/NavLinkC";

import LogoChoose from "./LogoChoose";

// / Component For Logo...!/
function LogoC() {
  const dispatch = useDispatch();

  return (
    <div className="forLogoCDiv">
      <NavLinkC
        linkOperation={() => dispatch(backToHome())}
        goToLink="/"
        linkName={<LogoChoose />}
      />
    </div>
  );
}

export default LogoC;
