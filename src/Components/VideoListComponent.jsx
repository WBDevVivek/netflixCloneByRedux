import React from "react";
import { useDispatch, useSelector } from "react-redux";

// --------------forSlider  Start----------

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// --------------forSlider  End----------

import {
  clearAllViewListItems,
  deleteViewListItems,
  videoPlayer
} from "../action/action";
import { carouselProperties } from "../APInetflix";

import PreviousBtn from "./Buttons/PreviousBtn";
import NextBtn from "./Buttons/NextBtn";
import SmallVideoComponent from "./SmallVideoComponent";
import EmptyList from "./EmptyList";

function VideoListComponent({ name, APIData, handleToggleVideo }) {
  const dispatch = useDispatch();
  const allCatTrue = useSelector(
    (input) => input.reducerNetflixClone.allCatTrue
  );

  return (
    <>
      <div style={{ margin: "30px" }}>
        <h4 className="myListH">
          {name}
          {allCatTrue ? (
            <span
              className="myListSpan"
              onClick={() => dispatch(clearAllViewListItems())}
            >
              clearAll
            </span>
          ) : null}
        </h4>

        {APIData.length >= 1 ? (
          <div className="myListContainer container">
            <Slider
              {...carouselProperties}
              prevArrow={<PreviousBtn />}
              nextArrow={<NextBtn className="arrowClass" />}
            >
              {APIData.map((ele, ind) => {
                return (
                  <SmallVideoComponent
                    key={ind}
                    ele={ele}
                    videoPlayer={() => dispatch(videoPlayer(ele.id, APIData))}
                    handleToggleVideo={handleToggleVideo}
                    deleteViewListItems={() =>
                      dispatch(deleteViewListItems(ele.id))
                    }
                    clearAllViewListItems={() =>
                      dispatch(clearAllViewListItems())
                    }
                  />
                );
              })}
            </Slider>
          </div>
        ) : (
          <EmptyList />
        )}
      </div>
    </>
    // {/* myListContainerClassEnd */}
  );
}

export default VideoListComponent;
