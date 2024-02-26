import React from "react";

import { regP } from "../../APInetflix";

// / Component For PassWard Input...!/

function PassInputBox({ value, IboxOperation, name }) {
  const validPass = regP.test(value);

  return (
    <>
      <div className="forInputBoxWithErrorMSJ">
        <input
          type="password"
          placeholder="Password..."
          value={value}
          name={name}
          onChange={IboxOperation}
          autoComplete="off"
          className="forSubEmailInput"
        />
        {value && !validPass ? (
          <p style={{ color: "red" }}>
            Your password must contain Min 6 & max 16 char, at least 1
            uppercase, 1 lowercase letter, 1 number & 1 special character....
          </p>
        ) : null}
      </div>
    </>
  );
}

export default PassInputBox;
