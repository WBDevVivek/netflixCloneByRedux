export const inputEvent = (inputValue) => {
  return {
    type: "inputEvent",
    anyPayload: inputValue
  };
};

export const backToHome = () => {
  return {
    type: "backToHome",
    anyPayload: ""
  };
};

export const goToSignIn = () => {
  return {
    type: "goToSignIn",
    anyPayload: ""
  };
};

export const goToSignUp = () => {
  return {
    type: "goToSignUp",
    anyPayload: ""
  };
};

export const goToLoggedIn = (userName) => {
  return {
    type: "goToLoggedIn",
    anyPayload: userName
  };
};

export const onTextFieldChangeSingIn = (e) => {
  return {
    type: "onTextFieldChangeSingIn",
    anyPayload: e
  };
};

export const onTextFieldChangeSingUp = (e) => {
  return {
    type: "onTextFieldChangeSingUp",
    anyPayload: e
  };
};

export const signInData = () => {
  return {
    type: "signInData",
    anyPayload: ""
  };
};

export const signUpData = () => {
  return {
    type: "signUpData",
    anyPayload: ""
  };
};

export const onSubmit = (e) => {
  return {
    type: "onSubmit",
    anyPayload: e
  };
};

export const categoryFilter = (catName) => {
  return {
    type: "categoryFilter",
    anyPayload: catName
  };
};

export const videoPlayer = (id, movieCat) => {
  return {
    type: "videoPlayer",
    anyPayload: { id, movieCat }
  };
};

export const bigSectionVideoPlay = (videoId, videoList) => {
  return {
    type: "bigSectionVideoPlay",
    anyPayload: { videoId, videoList }
  };
};

export const goToLoggedOut = () => {
  return {
    type: "goToLoggedOut",
    anyPayload: ""
  };
};

export const confirmLoggedOut = () => {
  return {
    type: "confirmLoggedOut",
    anyPayload: ""
  };
};

export const clearAllViewListItems = () => {
  return {
    type: "clearAllViewListItems",
    anyPayload: ""
  };
};

export const deleteViewListItems = (id) => {
  return {
    type: "deleteViewListItems",
    anyPayload: id
  };
};

export const editAccountData = () => {
  return {
    type: "editAccountData",
    anyPayload: ""
  };
};

export const handlePlayVideo = (vidRef) => {
  return {
    type: "handlePlayVideo",
    anyPayload: ""
  };
};

export const handlePauseVideo = (vidRef) => {
  return {
    type: "handlePauseVideo",
    anyPayload: ""
  };
};

export const handleToggleVideo = (vidRef) => {
  return {
    type: "handleToggleVideo",
    anyPayload: vidRef
  };
};
