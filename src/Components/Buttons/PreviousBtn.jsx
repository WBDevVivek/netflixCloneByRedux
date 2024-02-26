import React from "react";

import { MdArrowBackIosNew } from "react-icons/md";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdArrowBackIosNew style={{ color: "red", fontSize: "30px" }} />
    </div>
  );
};

export default PreviousBtn;
