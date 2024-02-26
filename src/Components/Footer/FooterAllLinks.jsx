import React from "react";
import { NavLink } from "react-router-dom";

const FooterAllLinks = ({ name, to }) => {
  return (
    <>
      <li
        className="allFooterLinkList"
        placeholder="footer_responsive_link_faq_item"
      >
        <NavLink className="footerSingleLink" to={to}>
          <span id="footerSingleLinkSpanId" className="footerSingleLinkSpan">
            {name}
          </span>
        </NavLink>
      </li>
    </>
  );
};

export default FooterAllLinks;
