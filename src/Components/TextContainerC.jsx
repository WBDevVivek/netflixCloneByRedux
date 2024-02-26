import React from "react";
import PlayBTN from "./Buttons/PlayBTN";
import MoreInfoBTN from "./Buttons/MoreInfoBTN";
import ContentLogoComponent from "./Logo/ContentLogoComponent";
import RankComponent from "./RankComponent";
import SynopsisComponent from "./SynopsisComponent";

const TextContainerC = ({ logo, syncPara, handleToggleVideo }) => {
  return (
    <div className="container textContainer">
      <ContentLogoComponent contentLogoSrc={logo} />

      {/*top 10 ranking badge svg*/}
      <RankComponent />

      <SynopsisComponent syncPara={syncPara} />

      <div className="buttonsContainer">
        <PlayBTN onClick={handleToggleVideo} />
        <MoreInfoBTN />
      </div>
    </div>
  );
};

export default TextContainerC;
