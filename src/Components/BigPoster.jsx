import React from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { bigSectionVideoPlay } from "../action/action";
import NextBtn from "./Buttons/NextBtn";
import PreviousBtn from "./Buttons/PreviousBtn";
import BigSection from "./BigSection";

function BigPoster({ APIData, handleToggleVideo }) {
  const dispatch = useDispatch();

  return (
    <>
      <section className="bigPosterContainer">
        <Slider
          initialSlide={0}
          infinite
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
        >
          {APIData.map((ele, ind) => (
            <BigSection
              key={ind}
              bigSectionVideoPlay={() =>
                dispatch(bigSectionVideoPlay(ele.id, APIData))
              }
              poster={ele.poster}
              logo={ele.logo}
              syncPara={ele.syncPara}
              handleToggleVideo={handleToggleVideo}
            />
          ))}
        </Slider>
      </section>
    </>
  );
}

export default BigPoster;
