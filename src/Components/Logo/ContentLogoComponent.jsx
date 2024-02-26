import React from "react";

function ContentLogoComponent({ contentLogoSrc }) {
  return (
    <div className="contentLogo">
      <img src={contentLogoSrc} alt="contentLogo" className="showLogo" />
    </div>
  );
}

export default ContentLogoComponent;
