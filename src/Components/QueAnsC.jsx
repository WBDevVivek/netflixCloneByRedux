import React from "react";
import { useState } from "react";

const QueAnsC = ({ Que, Ans1, Ans2 }) => {
  const [ansShow, setAnsShow] = useState(false);

  return (
    <>
      <div className="divQueAnsCombine">
        <div className="divQue">
          <p onClick={() => setAnsShow(!ansShow)}>{ansShow ? "➖" : "➕"}</p>
          <h3>{Que}</h3>
        </div>
        {ansShow && (
          <div className="divAns">
            <p className="answersPara">{Ans1}</p>
            {Ans2.length > 0 ? <p className="answersPara">{Ans2}</p> : null}
          </div>
        )}
      </div>
    </>
  );
};

export default QueAnsC;
