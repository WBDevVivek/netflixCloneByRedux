import React from "react";

import { MdArrowForwardIos } from "react-icons/md";

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdArrowForwardIos style={{ color: "red", fontSize: "30px" }} />
    </div>
  );
};

export default NextBtn;
