import React from "react";

const AnimatedCardVideoData1 = ({ imgSource, videoSource }) => {
  return (
    <>
      <div className="animatedCardIMGAnimContainer">
        <img alt="" className="animContainerIMG" src={imgSource} />
        <div className="animContainerVideoDiv">
          <video className="animContainerVideo" autoPlay playsInline muted loop>
            <source src={videoSource} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default AnimatedCardVideoData1;
