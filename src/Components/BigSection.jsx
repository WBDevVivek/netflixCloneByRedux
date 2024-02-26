import React from "react";
import TextContainerC from "./TextContainerC";

function BigSection({
  poster,
  logo,
  syncPara,
  bigSectionVideoPlay,
  handleToggleVideo
}) {
  return (
    <>
      <div className="bigSection">
        <div className="bigSectionImg" onClick={bigSectionVideoPlay}>
          <img src={poster} alt="" />
        </div>
        <div className="rightSide">
          <TextContainerC
            logo={logo}
            syncPara={syncPara}
            handleToggleVideo={handleToggleVideo}
          />
        </div>
      </div>
    </>
  );
}

export default BigSection;
