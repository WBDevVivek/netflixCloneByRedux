import React from "react";
import { useDispatch } from "react-redux";
import { backToHome } from "../action/action";

import NavLinkC from "../Components/Nav/NavLinkC";

// / Component For PageNotFound...!/

function NotFound() {
  const dispatch = useDispatch();
  return (
    <>
      <p>not found</p>
      <h1>404 error page</h1>
      <p>Sorry, this page does not exist...</p>
      <NavLinkC
        linkOperation={() => dispatch(backToHome())}
        linkName="go to HomePage"
        goToLink="/"
      />
    </>
  );
}

export default NotFound;
