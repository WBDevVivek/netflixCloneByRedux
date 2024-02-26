import React from "react";
import { useSelector } from "react-redux";
import SvgComponent2 from "./SVG_Components/SvgComponent2";

function SmallVideoComponent({
  ele,
  videoPlayer,
  handleToggleVideo,
  deleteViewListItems
}) {
  const allCatTrue = useSelector(
    (input) => input.reducerNetflixClone.allCatTrue
  );

  return (
    <div className="mylistVideoClass">
      <div className="forVideoListVideo" onClick={videoPlayer}>
        <video className="mylistImg videoItem" poster={ele.shortPoster}>
          <source src={ele.source} type={ele.type} />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="videoDescription" onClick={videoPlayer}>
        <div className="videoDescriptionData">
          <div className="buttonPlay" onClick={handleToggleVideo}>
            <SvgComponent2 />
          </div>
          <div className="videoDescriptionH">
            <h4>{ele.videoDescriptionH}</h4>
          </div>
          <div className="videoDescriptionInfo ">
            <p className="videoRate">
              <strong>{ele.videoRate}</strong>
            </p>
            <p className="seasonCount"> {ele.seasonCount}</p>
          </div>
          <div className="videoGenere">
            <p>{ele.videoGenere1}</p>
            <p>{ele.videoGenere2}</p>
            <p>{ele.videoGenere3}</p>
          </div>
        </div>
      </div>

      {/* videoDescriptionEnd */}
      {allCatTrue ? (
        <div className="videoDivCloseBTN" onClick={deleteViewListItems}>
          <span
            role="img"
            aria-labelledby="panda1"
            className="videoDivCloseBTNP"
          >
            ❌
          </span>
        </div>
      ) : null}
    </div>
    // {/* mylistVideoClassEnd - forMapFunction....*/}
  );
}

export default SmallVideoComponent;
