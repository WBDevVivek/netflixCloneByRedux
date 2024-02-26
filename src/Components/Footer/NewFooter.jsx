import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { FooterLinksAPI } from "../../APInetflix";

import FooterAllLinks from "./FooterAllLinks";

const NewFooter = () => {
  const [selectBoxState, setSelectBoxState] = useState("");

  return (
    <>
      <div className="homePageFooterDiv">
        <div className="footerDivider"></div>
        <div className="footerContent">
          <div className="">
            <p className="footerTopPara">
              Questions? Call
              <NavLink to="/" className="">
                000-800-040-1843{" "}
              </NavLink>
            </p>
            <ul className="allFooterLink">
              {FooterLinksAPI.map((ele) => (
                <FooterAllLinks
                  key={ele.id}
                  name={ele.linkName}
                  to={ele.linkURL}
                />
              ))}
            </ul>
            <div className="footerLanguageSelector" id="langSelector">
              <div className="langSelectDiv">
                <label
                  htmlFor="langSwitcherSelectBox"
                  className="langSwitcherSelectBoxLabel"
                >
                  <span className="langSelecLabeltSpan">Select Language</span>
                </label>
                <div className="langOptionDiv">
                  <select
                    className="langOptionDivSelect"
                    id="langSwitcherSelectBox"
                    tabIndex={0}
                    placeholder="lang-switcher"
                    value={selectBoxState}
                    onChange={(e) => {
                      setSelectBoxState(e.target.value);
                    }}
                  >
                    <option
                      lang="en"
                      value="/in/"
                      className="langOptionDivOption"
                    >
                      English
                    </option>
                    <option
                      lang="hi"
                      value="/in-hi/"
                      className="langOptionDivOption"
                    >
                      हिन्दी
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <p className="footerCountryName">Netflix India</p>
          </div>
        </div>
        <div className="" />
      </div>
    </>
  );
};

export default NewFooter;
