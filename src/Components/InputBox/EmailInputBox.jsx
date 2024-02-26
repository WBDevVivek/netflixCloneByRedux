import React from "react";

import { regE } from "../../APInetflix";

// / Component For EmailInput...!/

function EmailInputBox({ value, IboxOperation, forTrialHome }) {
  const validEmail = regE.test(value);

  return (
    <>
      <div className="forInputBoxWithErrorMSJ">
        <input
          type="email"
          placeholder="Email address..."
          name="email"
          autoComplete="off"
          className="forSubEmailInput"
          value={value}
          onChange={IboxOperation}
        />
        {!validEmail && value ? (
          !forTrialHome ? (
            <p style={{ color: "red" }}>
              Enter correct email with @ and domain name...
            </p>
          ) : null
        ) : null}
      </div>
    </>
  );
}

export default EmailInputBox;
