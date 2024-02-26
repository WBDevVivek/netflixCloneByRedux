import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmLoggedOut } from "../action/action";

import Button from "../Components/Buttons/Button";

// signOutComponent Start

function SignOut({ splitUserName }) {
  const dispatch = useDispatch();
  const state3 = useSelector((input) => input.reducerNetflixClone.state3);
  const stateForLoggedIN = useSelector(
    (input) => input.reducerNetflixClone.stateForLoggedIN
  );
  return (
    <>
      <section className="signOutSection ">
        <div className="signOutSectionDiv">
          <h2 className="signOutSectionH2"> Signed Out</h2>
          {stateForLoggedIN ? (
            <>
              <h3 className="signOutSectionH3"> Name :- {splitUserName[0]}</h3>
              <h3 className="signOutSectionH3">Email :- {state3}</h3>
            </>
          ) : null}
          <p className="signOutSectionP1">
            Only members using a shared or public computer need to end each
            visit to Netflix by using the{" "}
            <span style={{ color: "red" }}> Sign Out </span> link.
          </p>
          <p className="signOutSectionP2">
            This computer will be redirected to the Netflix home page in 30
            seconds.
          </p>

          <Button
            BTNName="Continue..."
            operation={() => dispatch(confirmLoggedOut())}
          ></Button>
        </div>
      </section>
    </>
  );
}

// signOutComponent End

export default SignOut;
