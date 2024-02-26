import { useSelector } from "react-redux";
import { Category } from "../APInetflix";

// these all are state of programme....
const initialState = {
  stateForLoggedIN: false,
  state1: "",
  state2: "",
  state3: "",
  state4: true,
  state5: true,
  state6: false,
  state7SignIn: {
    email: "vivek@gmail.com",
    pass: "Vivek@9"
  },
  state8SignUp: {
    email: "",
    pass: "",
    cpass: ""
  },
  state9SSignIn: [
    {
      email: "vivek@gmail.com",
      pass: "Vivek@9"
    }
  ],
  state10SSignUp: [
    {
      email: "vivek@gmail.com",
      pass: "Vivek@9",
      cpass: "Vivek@9"
    },
    {
      email: "gawale@gmail.com",
      pass: "Gawale@9",
      cpass: "Gawale@9"
    }
  ],
  stateForLogo: false,
  userViewListData: {
    userEmail: "",
    userData: []
  },
  userViewListDataFilter: [],
  scrollState: {
    a: "transparent",
    b: "",
    c: "",
    d: ""
  },
  videoDataShow: true,
  playerVideo: Category,
  myList: [],
  myListTrue: false,
  allCatTrue: false,
  state11Category: Category,
  navIcon: false,
  editAccountState: false,
  loaded: false
};

// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------

export const reducerNetflixClone = (state = initialState, action) => {
  // --------------------------------------------------

  const backToHome = () => {
    return {
      ...state,
      state1: "",
      state2: "",
      state4: true,
      state5: true,
      state6: false,
      stateForLogo: false,
      state7SignIn: { email: "", pass: "" },
      state8SignUp: { email: "", pass: "", cpass: "" },
      PlayerVideo: Category
    };
  };

  const goToSignIn = () => {
    return {
      ...state,
      state4: false,
      state5: false,
      state6: true,
      stateForLogo: true,
      state8SignUp: { email: "", pass: "", cpass: "" }
    };
  };

  const goToSignUp = () => {
    return {
      ...state,
      state4: true,
      state5: false,
      state6: false,
      stateForLogo: true,
      state7SignIn: { email: "", pass: "" }
    };
  };

  const onTextFieldChangeSingIn = (e) => {
    return {
      ...state,
      state7SignIn: {
        ...state.state7SignIn,
        [e.target.name]: e.target.value
      }
    };
  };

  const onTextFieldChangeSingUp = (e) => {
    const { value, name } = e.target;
    return {
      ...state,
      state8SignUp: {
        ...state.state8SignUp,
        [name]: value
      }
    };
  };

  const signUpData = (e) => {
    const { email, pass, cpass } = state.state8SignUp;
    const signUpDataArr = { email, pass, cpass };

    if (email && pass && cpass && !state.editAccountState) {
      const findInSignUpArr = state.state10SSignUp.some((ele) => {
        return ele.email === state.state8SignUp.email;
      });

      if (findInSignUpArr) {
        alert("this user is already registered...!");
        return goToSignIn();
      } else {
        return {
          ...state,
          state10SSignUp: [...state.state10SSignUp, signUpDataArr],
          state8SignUp: { email: "", pass: "", cpass: "" }
        };
      }
    } else if (email && pass && cpass && state.editAccountState) {
      return {
        ...state,
        state10SSignUp: state.state10SSignUp.map((elemForUpd) => {
          if (elemForUpd.email === state.state3) {
            return { ...elemForUpd, pass: pass, cpass: cpass };
          }
          return elemForUpd;
        }),
        state8SignUp: { email: "", pass: "", cpass: "" },
        editAccountState: false
      };
    } else {
      alert("plz fill first...");
      return {
        ...state
      };
    }
  };

  const signInData = () => {
    const { email, pass } = state.state7SignIn;
    const signInDataArr = { email, pass };

    const forFilterSignUpData = state.state10SSignUp.filter((ele) => {
      return ele.email === state.state7SignIn.email;
    });

    const forSingInUserEmail = forFilterSignUpData.some((ele) => {
      return ele.email === state.state7SignIn.email;
    });

    const forSingInUserPass = forFilterSignUpData.some((ele) => {
      return ele.pass === state.state7SignIn.pass;
    });

    const viewListFilter = state.userViewListDataFilter.filter((ele) => {
      return ele.userEmail === email;
    });

    const filterViewListData = viewListFilter[0];

    if (email && pass) {
      if (forSingInUserEmail && forSingInUserPass) {
        alert(`Now u loggedIn...${email}...!`);

        if (filterViewListData && filterViewListData.userData.length > 0) {
          return {
            ...state,
            stateForLoggedIN: true,
            state3: email,
            state9SSignIn: [signInDataArr],
            state7SignIn: { email: "", pass: "" },
            myListTrue: true,
            myList: filterViewListData.userData,
            playerVideo: filterViewListData.userData,
            userViewListData: {
              ...state.userViewListData,
              userEmail: email,
              userData: filterViewListData.userData
            }
          };
        }

        return {
          ...state,
          stateForLoggedIN: true,
          state3: email,
          state9SSignIn: [signInDataArr],
          myListTrue: false,
          myList: state.myList,
          playerVideo: state.playerVideo,
          userViewListData: {
            ...state.userViewListData,
            userEmail: email
          },
          state7SignIn: { email: "", pass: "" }
        };
      } else {
        alert("Sorry...! this user is not registered...!");
        return goToSignUp();
      }
    } else {
      alert("plz fill first...");
      return {
        ...state
      };
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const findInArr = state.state10SSignUp.some((ele) => {
      return ele.email === state.state1;
    });

    if (!state.state1) {
      alert(" Enter Your Email First...");
      return {
        ...state
      };
    } else if (state.state1 && findInArr) {
      return {
        ...state,
        state2: state.state1,
        state1: "",
        state4: false,
        state5: false,
        state6: true,
        stateForLogo: true,
        state7SignIn: { ...state.state7SignIn, email: state.state1 },
        state8SignUp: { email: "", pass: "", cpass: "" }
      };
    } else {
      alert(" Email Not SignUp, So Redirect To That Page...");
      return {
        ...state,
        state2: state.state1,
        state1: "",
        state8SignUp: { ...state.state8SignUp, email: state.state1 },
        state4: true,
        state5: false,
        state6: false,
        stateForLogo: true,
        state7SignIn: { email: "", pass: "" }
      };
    }
  };

  const categoryFilter = (catName) => {
    const updateCategoryFilter = Category.filter((ele) => {
      return ele.category === catName;
    });

    const latestCategoryFilter = Category.filter((ele) => {
      return ele.latest === catName;
    });

    switch (catName) {
      case "Home":
        return {
          ...state,
          allCatTrue: false,
          state11Category: Category,
          playerVideo: Category
        };

      case "Movies":
      case "TVShow":
        return {
          ...state,
          allCatTrue: false,
          state11Category: updateCategoryFilter,
          playerVideo: updateCategoryFilter
        };

      case "Latest":
        return {
          ...state,
          allCatTrue: false,
          state11Category: latestCategoryFilter,
          playerVideo: latestCategoryFilter
        };
      case "MyList":
        if (state.myListTrue) {
          return {
            ...state,
            allCatTrue: true,
            state11Category: state.myList,
            playerVideo: state.myList
          };
        } else {
          alert("Plz Add SomeItems In MyList...!");
          return {
            ...state,
            allCatTrue: false,
            state11Category: Category,
            playerVideo: Category
          };
        }

      default:
        return {
          ...state,
          state11Category: Category
        };
    }
  };

  const videoPlayer = (id, movieCat) => {
    const someData = state.myList.some((ele) => {
      return ele.id === id;
    });
    const forPlayer = movieCat.filter((ele, ind) => id === ele.id);

    if (movieCat) {
      if (state.myList) {
        if (!someData) {
          return {
            ...state,
            myListTrue: true,
            myList: [...state.myList, ...forPlayer],
            playerVideo: forPlayer,
            userViewListData: {
              ...state.userViewListData,
              userData: [...state.myList, ...forPlayer]
            }
          };
        } else {
          return {
            ...state,
            myListTrue: true,
            myList: state.myList,
            playerVideo: forPlayer,
            userViewListData: {
              ...state.userViewListData,
              userData: state.myList
            }
          };
        }
      }
    }
  };

  const bigSectionVideoPlay = (videoId, videoList) => {
    const toPlayVideo = videoList.filter((ele, ind) => videoId === ele.id);
    return {
      ...state,
      playerVideo: toPlayVideo
    };
  };

  const goToLoggedOut = () => {
    alert(` Hey ${state.state3} u click on loggedOut...!`);

    const viewListFilter2 = state.userViewListDataFilter.filter((ele) => {
      return ele.userEmail === state.state3;
    });

    if (
      viewListFilter2.length > 0 &&
      state.userViewListData.userData.length > 0
    ) {
      return {
        ...state,
        userViewListDataFilter: state.userViewListDataFilter.map(
          (elemForUpd) => {
            if (elemForUpd.userEmail === state.state3) {
              return {
                ...elemForUpd,
                userData: state.userViewListData.userData
              };
            }
            return elemForUpd;
          }
        )
      };
    } else {
      return {
        ...state,
        userViewListDataFilter:
          state.userViewListData.userData.length > 0
            ? [...state.userViewListDataFilter, state.userViewListData]
            : [...state.userViewListDataFilter]
      };
    }
  };

  const confirmLoggedOut = () => {
    if (state.userViewListDataFilter) {
      const userViewListDataFilterFilter = state.userViewListDataFilter.filter(
        (eleForFilter) => {
          return eleForFilter.userData.length > 0;
        }
      );

      return {
        ...state,
        userViewListDataFilter: userViewListDataFilterFilter,
        stateForLoggedIN: false,
        state3: "",
        // state5: true,
        state8SignUp: {
          email: "",
          pass: "",
          cpass: ""
        },
        userViewListData: {
          userEmail: "",
          userData: []
        },
        playerVideo: Category,
        myList: [],
        myListTrue: false,
        editAccountState: false
      };
    }
    return {
      ...state,
      stateForLoggedIN: false,
      state3: "",
      // state5: true,
      state8SignUp: {
        email: "",
        pass: "",
        cpass: ""
      },
      userViewListData: {
        userEmail: "",
        userData: []
      },
      playerVideo: Category,
      myList: [],
      myListTrue: false,
      editAccountState: false
    };
  };

  const clearAllViewListItems = () => {
    const userViewListClearAllMap = state.userViewListDataFilter.map(
      (elemForUpd) => {
        if (elemForUpd.userEmail === state.state3) {
          return { ...elemForUpd, userData: [] };
        }
        return elemForUpd;
      }
    );

    return {
      ...state,
      myList: [],
      myListTrue: false,
      allCatTrue: false,
      playerVideo: Category,
      state11Category: Category,
      userViewListData: {
        ...state.userViewListData,
        userData: []
      },
      userViewListDataFilter: userViewListClearAllMap
    };
  };

  const deleteViewListItems = (id) => {
    const myListFilter = state.myList.filter((val) => {
      return id !== val.id;
    });

    if (myListFilter.length !== 0) {
      const userViewListDataFilterMap = state.userViewListDataFilter.map(
        (elemForUpd) => {
          if (elemForUpd.userEmail === state.state3) {
            return { ...elemForUpd, userData: [...myListFilter] };
          }
          return elemForUpd;
        }
      );

      return {
        ...state,
        state11Category: myListFilter,
        myList: myListFilter,
        myListTrue: true,
        playerVideo: myListFilter,
        userViewListData: {
          ...state.userViewListData,
          userData: myListFilter
        },
        userViewListDataFilter: userViewListDataFilterMap
      };
    } else {
      return clearAllViewListItems();
    }
  };

  const editAccountData = () => {
    const newupdateItems = state.state10SSignUp.find((findElemt) => {
      return findElemt.email === state.state3;
    });

    return {
      ...state,
      editAccountState: true,
      state8SignUp: {
        email: newupdateItems.email,
        pass: newupdateItems.pass,
        cpass: newupdateItems.cpass
      }
    };
  };

  const handleToggleVideo = (vidRef) => {
    const handlePlayVideo = () => {
      vidRef.current.play();
      return {
        ...state,
        videoDataShow: false
      };
    };

    const handlePauseVideo = () => {
      vidRef.current.pause();
      return {
        ...state,
        videoDataShow: true
      };
    };

    vidRef.current.paused ? handlePlayVideo() : handlePauseVideo();

    return {
      ...state
    };
  };

  // --------------------------__________________-----------------------_________________----------------_________________
  // --------------------------__________________-----------------------_________________----------------_________________

  switch (action.type) {
    case "inputEvent":
      return {
        ...state,
        state1: action.anyPayload
      };

    case "backToHome":
      return backToHome();

    case "goToSignIn":
      return goToSignIn();

    case "goToSignUp":
      return goToSignUp();

    case "onTextFieldChangeSingIn":
      return onTextFieldChangeSingIn(action.anyPayload);

    case "onTextFieldChangeSingUp":
      return onTextFieldChangeSingUp(action.anyPayload);

    case "signInData":
      return signInData();

    case "signUpData":
      return signUpData();

    case "onSubmit":
      return onSubmit(action.anyPayload);

    case "categoryFilter":
      return categoryFilter(action.anyPayload);

    case "videoPlayer":
      return videoPlayer(action.anyPayload.id, action.anyPayload.movieCat);

    case "bigSectionVideoPlay":
      return bigSectionVideoPlay(
        action.anyPayload.videoId,
        action.anyPayload.videoList
      );

    case "goToLoggedOut":
      return goToLoggedOut();

    case "confirmLoggedOut":
      backToHome();
      return confirmLoggedOut();

    case "clearAllViewListItems":
      return clearAllViewListItems();

    case "deleteViewListItems":
      return deleteViewListItems(action.anyPayload);

    case "editAccountData":
      return editAccountData();

    case "handleToggleVideo":
      return handleToggleVideo(action.anyPayload);

    default:
      return state;
  }
};
