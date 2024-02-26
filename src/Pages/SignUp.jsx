import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  backToHome,
  goToSignIn,
  onTextFieldChangeSingUp,
  signUpData
} from "../action/action";
import Button from "../Components/Buttons/Button";
import EmailInputBox from "../Components/InputBox/EmailInputBox";
import PassInputBox from "../Components/InputBox/PassInputBox";
import NavLinkC from "../Components/Nav/NavLinkC";

// signUpComponent Start

function SignUp() {
  const dispatch = useDispatch();
  const state8SignUp = useSelector(
    (input) => input.reducerNetflixClone.state8SignUp
  );

  const stateForLoggedIN = useSelector(
    (input) => input.reducerNetflixClone.stateForLoggedIN
  );

  const editAccountState = useSelector(
    (input) => input.reducerNetflixClone.editAccountState
  );

  return (
    <>
      <div className="forSignInDiv">
        {!stateForLoggedIN && !editAccountState ? "SignUp" : "EditData"}

        <div className="forSignInDivContent">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <EmailInputBox
              value={state8SignUp.email}
              IboxOperation={(e) => dispatch(onTextFieldChangeSingUp(e))}
            />

            <PassInputBox
              value={state8SignUp.pass}
              IboxOperation={(e) => dispatch(onTextFieldChangeSingUp(e))}
              name="pass"
            />

            <PassInputBox
              value={state8SignUp.cpass}
              IboxOperation={(e) => dispatch(onTextFieldChangeSingUp(e))}
              name="cpass"
            />

            {state8SignUp.pass === state8SignUp.cpass ? null : (
              <p style={{ color: "red" }}>
                Passward & confirmPassward Should Be Match...
              </p>
            )}

            {!stateForLoggedIN && !editAccountState ? (
              <Button
                BTNName="signUp"
                operation={() => dispatch(signUpData())}
              />
            ) : (
              <Button
                BTNName="Update"
                operation={() => dispatch(signUpData())}
              />
            )}

            {!stateForLoggedIN && !editAccountState ? (
              <>
                <p className="signInSlastPara1">
                  Have an account?
                  <span className="signInSlastParaSpan">
                    <NavLinkC
                      linkOperation={(e) => {
                        dispatch(goToSignIn());
                      }}
                      linkName="SignIn Now"
                      goToLink="/"
                    />
                  </span>
                </p>

                <p className="signInLastPara2">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot
                </p>
              </>
            ) : null}
          </form>
        </div>

        {!stateForLoggedIN && !editAccountState ? (
          <NavLink
            exact="true"
            className="nav-link"
            to="/"
            onClick={() => dispatch(backToHome())}
          >
            go to HomePage
          </NavLink>
        ) : (
          <NavLink
            exact="true"
            className="nav-link"
            to="/user"
            onClick={() => dispatch(backToHome())}
          >
            backToUserPage
          </NavLink>
        )}
      </div>
    </>
  );
}

// signUpComponent End

export default SignUp;
