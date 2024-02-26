import React from "react";
import { useSelector } from "react-redux";
import { logoImg } from "../../APInetflix";

function LogoChoose() {
  const state4 = useSelector((input) => input.reducerNetflixClone.state4);
  const state6 = useSelector((input) => input.reducerNetflixClone.state6);
  const stateForLogo = useSelector(
    (input) => input.reducerNetflixClone.stateForLogo
  );

  return (
    <>
      {!stateForLogo ? (
        <img src={logoImg} alt="logoImg" className="forLogoImg" />
      ) : !state4 && state6 ? (
        <h2 className="textLogo">NETFLIX</h2>
      ) : (
        <h2 className="textLogoFirstWord">N</h2>
      )}
    </>
  );
}

export default LogoChoose;
