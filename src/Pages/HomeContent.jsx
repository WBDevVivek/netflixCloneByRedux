import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputEvent, onSubmit } from "../action/action";
import EmailInputBox from "../Components/InputBox/EmailInputBox";
import Button from "../Components/Buttons/Button";

function HomeContent({ result, forTrialHome }) {
  const dispatch = useDispatch();

  const state1 = useSelector((input) => input.reducerNetflixClone.state1);

  // -------------------------------------------------

  return (
    <>
      <div className="forContent">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>

        <div className="forInputBoxDiv">
          <form action="" onSubmit={(e) => dispatch(onSubmit(e))}>
            <EmailInputBox
              value={state1}
              IboxOperation={(e) => dispatch(inputEvent(e.target.value))}
              forTrialHome={forTrialHome}
            />
            <Button
              BTNIcon=">"
              BTNName="TRY FOR ₹&nbsp;199"
              operation={(e) => dispatch(onSubmit(e))}
            />
          </form>
        </div>

        <div className="forBtmContent">
          {!state1 ? (
            <p>
              Ready to watch? Enter your email to create or access your account.
            </p>
          ) : !result ? (
            <p style={{ color: "red" }}>
              Enter correct email with @ and domain name...
            </p>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default HomeContent;
