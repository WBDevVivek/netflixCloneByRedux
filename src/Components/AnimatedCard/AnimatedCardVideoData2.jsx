import React from "react";

const AnimatedCardVideoData2 = ({ imgSource, imgSource2, downGif }) => {
  return (
    <>
      <div className="animatedCardIMGAnimContainer animatedCardIMGAnimContainerGif">
        <img alt="" className="animContainerIMG" src={imgSource} />
        {downGif === "true" ? (
          <div className="animContainerGifDiv">
            <div className="animContainerGifDivImg">
              <img alt="" src={imgSource2} />
            </div>
            <div className="animContainerTextGif">
              <div id="" className="text1">
                Stranger Things
              </div>
              <div id="" className="text2">
                Downloading...
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default AnimatedCardVideoData2;
