import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  backToHome,
  goToSignUp,
  onTextFieldChangeSingIn,
  signInData
} from "../action/action";
import EmailInputBox from "../Components/InputBox/EmailInputBox";
import PassInputBox from "../Components/InputBox/PassInputBox";

import NavLinkC from "../Components/Nav/NavLinkC";
import Button from "../Components/Buttons/Button";

// signInComponent Start

function SignIn() {
  const dispatch = useDispatch();
  const state7SignIn = useSelector(
    (input) => input.reducerNetflixClone.state7SignIn
  );

  return (
    <>
      <div className="forSignInDiv">
        <h1> SignIn </h1>

        <div className="forSignInDivContent">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <EmailInputBox
              value={state7SignIn.email}
              IboxOperation={(e) => dispatch(onTextFieldChangeSingIn(e))}
            />

            <PassInputBox
              value={state7SignIn.pass}
              IboxOperation={(e) => dispatch(onTextFieldChangeSingIn(e))}
              name="pass"
            />

            <Button BTNName="signIn" operation={() => dispatch(signInData())} />

            <div className="checkboxDiv">
              <input type="checkbox" name="" id="" className="" />
              <label htmlFor="">
                <span className="formCheckboxSpan">Remember me</span>
              </label>
            </div>

            <p className="signInSlastPara1">
              New to Netflix?
              <span className="signInSlastParaSpan">
                <NavLinkC
                  linkOperation={() => dispatch(goToSignUp())}
                  linkName="Sign up Now"
                  goToLink="/"
                />
              </span>
            </p>

            <p className="signInLastPara2">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot
            </p>
          </form>
        </div>

        <NavLinkC
          linkOperation={() => dispatch(backToHome())}
          linkName="go to HomePage"
          goToLink="/"
        />
      </div>
    </>
  );
}

// signInComponent End

export default SignIn;
