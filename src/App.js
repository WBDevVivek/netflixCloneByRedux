import "./styles.css";

import { regE } from "./APInetflix";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

// react Redux -------------------------

import { useDispatch, useSelector } from "react-redux";

// react Redux -------------------------

import HomePage from "./Pages/HomePage";
import User from "./Pages/User";
import SignOut from "./Pages/SignOut";
import NotFound from "./Pages/NotFound";
import { useEffect } from "react";
import { goToSignIn, goToSignUp } from "./action/action";

// --------------APP Component Start----------

export default function App() {
  // -------------------------------------------------------------------------

  const stateForLoggedIN = useSelector(
    (input) => input.reducerNetflixClone.stateForLoggedIN
  );

  const state1 = useSelector((input) => input.reducerNetflixClone.state1);

  const state3 = useSelector((input) => input.reducerNetflixClone.state3);

  const state4 = useSelector((input) => input.reducerNetflixClone.state4);

  const state5 = useSelector((input) => input.reducerNetflixClone.state5);

  const state6 = useSelector((input) => input.reducerNetflixClone.state6);

  const editAccountState = useSelector(
    (input) => input.reducerNetflixClone.editAccountState
  );

  // ------------------------------------------------------------------------------------

  let forTrialHome = state4 && state5 && !state6 ? true : false;
  try {
    var splitUserName = state3.split("@");
  } catch (error) {
    // console.log(error);
  }

  let email = state1;
  let result = regE.test(email);

  // ------------------------------------------------------------------------------------

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/");
    }

    if (location.pathname === "/signup") {
      dispatch(goToSignUp());
    }

    if (location.pathname === "/signin") {
      dispatch(goToSignIn());
    }

    if (location.pathname === "/signOut") {
      navigate("/signOut");
    }

    if (location.pathname === "/user") {
      navigate("/user");
    }
  }, [location.pathname]);

  useEffect(() => {
    if (stateForLoggedIN && !editAccountState) {
      !editAccountState ? navigate("/user") : dispatch(goToSignUp);
    }
  }, [stateForLoggedIN]);

  // -------------------------------------------------------------------------------------

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage result={result} forTrialHome={forTrialHome} />}
        />

        <Route exact path="/signup" element={<HomePage />} />

        <Route path="/signin" element={<HomePage />} />

        <Route
          exact
          path="/user"
          element={<User splitUserName={splitUserName} />}
        />

        <Route
          exact
          path="/signout"
          element={
            stateForLoggedIN ? (
              <SignOut splitUserName={splitUserName} />
            ) : (
              <HomePage />
            )
          }
        />

        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
