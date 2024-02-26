import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  backToHome,
  categoryFilter,
  editAccountData,
  goToLoggedOut
} from "../action/action";
import { Category, navMenuData, userNot2 } from "../APInetflix";
import LogoC from "../Components/Logo/LogoC";
import NavLinkC from "../Components/Nav/NavLinkC";
import NavButtonLinkC from "../Components/Nav/NavButtonLinkC";
import Button from "../Components/Buttons/Button";

import TextContainerC from "../Components/TextContainerC";

import VideoListComponent from "../Components/VideoListComponent";
import BigPoster from "../Components/BigPoster";
import FooterComponent from "../Components/Footer/FooterComponent";

import { VscSearch } from "react-icons/vsc";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiUser } from "react-icons/bi";

// userComponent Start

function User({ splitUserName }) {
  const dispatch = useDispatch();
  const vidRef = useRef(null);
  const playerVideo = useSelector(
    (input) => input.reducerNetflixClone.playerVideo
  );
  const myList = useSelector((input) => input.reducerNetflixClone.myList);

  const allCatTrue = useSelector(
    (input) => input.reducerNetflixClone.allCatTrue
  );

  const state11Category = useSelector(
    (input) => input.reducerNetflixClone.state11Category
  );

  // ------------------------------------------------------------------------------------

  //userLastLinkAPI
  const userLastData2 = [
    {
      linkName: "Account",
      linkUrl: editAccountData,
      goToLink: "/signup"
    },
    {
      linkName: "HelpCenter",
      linkUrl: backToHome,
      goToLink: "/"
    },
    {
      linkName: "SignOut Netflix",
      linkUrl: goToLoggedOut,
      goToLink: "/signout"
    }
  ];

  // ------------------------------------------------------------------------------------

  const [playing, setPlaying] = useState(false);
  const [videoDataShow, setVideoDataShow] = useState(true);
  const [navIcon, setNavIcon] = useState(false);
  const [scrollState, setScrollState] = useState({
    a: "transparent",
    b: "",
    c: "",
    d: ""
  });

  // ------------------------------------------------------------------------------------

  const style = {
    backgroundColor: scrollState.a,
    position: scrollState.b,
    top: scrollState.c,
    height: scrollState.d
  };

  // ------------------------------------------------------------------------------------

  const listenScrollEvent = (e) => {
    if (window.scrollY > 100) {
      setScrollState({
        a: "black",
        b: "fixed",
        c: 0,
        d: "15%"
      });
    } else {
      setScrollState({
        a: "transparent",
        b: "",
        c: "",
        d: "15%"
      });
    }
  };

  // ------------------------------------------------------------------------------------

  // ------------------------------------------------------------------------------------

  const handlePlayVideo = () => {
    vidRef.current.play();
    setVideoDataShow(false);
    setPlaying(true);
  };

  const handlePauseVideo = () => {
    vidRef.current.pause();
    setVideoDataShow(true);
  };

  const handleToggleVideo = () => {
    vidRef.current.paused ? handlePlayVideo() : handlePauseVideo();
  };

  const toggle = () => {
    setPlaying(!playing);
  };

  const pauseVideo = () => {
    setPlaying(false);
    setVideoDataShow(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  useEffect(() => {
    playing ? vidRef.current.play() : vidRef.current.pause();
  }, [playing]);

  useEffect(() => {
    window.addEventListener("scroll", pauseVideo);
    return () => {
      window.removeEventListener("scroll", pauseVideo);
    };
  }, []);

  // --------------------------

  useEffect(() => {
    dispatch(categoryFilter());
  }, [myList.length === 0]);

  // ------------------------------------------------------------------------------------

  const romanticMoviesFilter = state11Category.filter(
    (ele) => ele.subCategory === "RomanticMovies"
  );

  const crimeMoviesFilter = state11Category.filter(
    (ele) => ele.subCategory === "CrimeMovies"
  );

  const actionMoviesFilter = state11Category.filter(
    (ele) => ele.subCategory === "ActionMovies"
  );

  const horrorTVShowFilter = state11Category.filter(
    (ele) => ele.subCategory === "HorrorTVShow"
  );

  const hollywoodTVShowFilter = state11Category.filter(
    (ele) => ele.subCategory === "HollywoodTVShow"
  );

  const romanticTVShowFilter = state11Category.filter(
    (ele) => ele.subCategory === "RomanticTVShow"
  );

  // -------------------------------------------------------------------

  const forVideoListComponentAPI1 = [
    {
      id: "1",
      name: "My Viewing List",
      APIData: myList
    },
    {
      id: "2",
      name: "Continue watching",
      APIData: Category
    },
    {
      id: "3",
      name: "Romantic Movies",
      APIData: romanticMoviesFilter
    }
  ];

  // -------------------------------------------------------------------

  const forVideoListComponentAPI2 = [
    {
      id: "1",
      name: "",
      APIData: state11Category
    },
    {
      id: "2",
      name: "Romantic TV Shows",
      APIData: romanticTVShowFilter
    },
    {
      id: "3",
      name: "Crime Movies",
      APIData: crimeMoviesFilter
    },
    {
      id: "4",
      name: "Hollywood TV Shows",
      APIData: hollywoodTVShowFilter
    },
    {
      id: "5",
      name: "Action Movies",
      APIData: actionMoviesFilter
    },
    {
      id: "6",
      name: "Horror TV Shows",
      APIData: horrorTVShowFilter
    }
  ];

  // -------------------------------------------------------------------

  return (
    <>
      <div className="forUserPageMainTopDiv">
        <main className="forUserPageMainContainer">
          <div className="forUserHeaderDiv">
            <header className="forUserHeader">
              <div className="forLogoAndNavMenuDiv" style={style}>
                <LogoC backToHome={() => dispatch(backToHome())} />
                <div
                  className={
                    !navIcon ? "forNavMenuAndRtIcon" : "forNavMenuIcon"
                  }
                >
                  <div className="forNavMenuDiv">
                    {navMenuData.map((ele, ind) => (
                      <NavButtonLinkC
                        key={ind}
                        linkOperation={() => dispatch(categoryFilter(ele))}
                        linkName={ele}
                      />
                    ))}
                  </div>
                  <div className="forRightSideNavIcons">
                    <NavLinkC
                      linkOperation={() => dispatch(backToHome())}
                      goToLink="/"
                      linkName={<VscSearch />}
                    />

                    <div className="navDropdown dropDNotification">
                      <IoNotificationsOutline />
                      <div className="notificationContent">
                        {userNot2.map((ele, ind) => {
                          return (
                            <NavLink key={ind} to="/" className="notiDropLink">
                              {ele.icon}
                              <span>
                                You have new notification from
                                <span className="userName">{ele.name}</span>
                              </span>
                            </NavLink>
                          );
                        })}
                      </div>
                    </div>

                    <div className="navUserDropdown ">
                      <HiUserGroup className="UserIcon" />
                      <span className="dropArrow"></span>

                      <div className="userContent">
                        <div className="profileContent">
                          <NavLink to="/" className="profileDropLink">
                            <BiUser className="UserIcon" />
                            <span>
                              {splitUserName ? splitUserName[0] : "username"}
                            </span>
                          </NavLink>

                          <NavLinkC
                            linkOperation={() => dispatch(backToHome())}
                            goToLink="/"
                            linkName="manageProfile"
                          />
                        </div>

                        <hr className="hrClass" />

                        <div className="forUserContentLastLinks">
                          {userLastData2.map((ele, ind) => {
                            const { linkUrl, goToLink, linkName } = ele;

                            return (
                              <NavLinkC
                                key={ind}
                                linkOperation={() => dispatch(linkUrl())}
                                goToLink={goToLink}
                                linkName={linkName}
                              />
                            );
                          })}
                        </div>
                        {/* forUserContentLastLinks div end */}
                      </div>
                      {/* userContent div end */}
                    </div>
                    {/* navUserDropdown div end */}
                  </div>
                  {/* forRightSideNavIcons div end */}
                </div>

                <div className="forMenuIcon">
                  <NavLink to="#" onClick={() => setNavIcon(!navIcon)}>
                    <GiHamburgerMenu />
                  </NavLink>
                </div>
              </div>
              {/* forLogoAndNavMenu div end */}
            </header>

            <div className="frontPageADdiv">
              <section id="userDashboard" className="userDashboardClass">
                <div
                  className="divForVideo"
                  onClick={(e) => {
                    e.preventDefault();
                    setVideoDataShow(!videoDataShow);
                    toggle();
                  }}
                >
                  {/*trailer video*/}

                  <video
                    className="frontPageADBackIMG"
                    id="AdVideo"
                    ref={vidRef}
                    poster={playerVideo[0].poster}
                    src={playerVideo[0].source}
                    controls
                    loop
                    muted
                  />

                  {/*left shadow*/}
                  <div className="shadowLayer" />
                </div>

                {videoDataShow ? (
                  <TextContainerC
                    logo={playerVideo[0].logo}
                    syncPara={playerVideo[0].syncPara}
                    handleToggleVideo={handleToggleVideo}
                  />
                ) : null}
              </section>
            </div>

            {/* black bg after backIMG */}
            <div className="blackBackground">
              {/* my list  */}
              <section id="myList" className="container2">
                {forVideoListComponentAPI1.map((ele, ind) => {
                  if (ind === 0 || ind === 1) {
                    return !allCatTrue ? (
                      <VideoListComponent
                        key={ele.id}
                        name={ele.name}
                        APIData={ele.APIData}
                        handleToggleVideo={handleToggleVideo}
                      />
                    ) : null;
                  } else {
                    return (
                      <VideoListComponent
                        key={ele.id}
                        name={ele.name}
                        APIData={ele.APIData}
                        handleToggleVideo={handleToggleVideo}
                      />
                    );
                  }
                })}
              </section>
              {/* // myListSectionEnd */}
              <section className="container2">
                {forVideoListComponentAPI2.map((ele, ind) => {
                  if (ind === 0) {
                    return !allCatTrue ? (
                      <BigPoster
                        key={ele.id}
                        APIData={ele.APIData}
                        handleToggleVideo={handleToggleVideo}
                      />
                    ) : null;
                  } else {
                    return (
                      <VideoListComponent
                        key={ele.id}
                        name={ele.name}
                        APIData={ele.APIData}
                        handleToggleVideo={handleToggleVideo}
                      />
                    );
                  }
                })}
              </section>
            </div>
            {/* blackBackgroundDivEnd */}
          </div>
          {/* mainDiv k niche wala Div */}
          <FooterComponent />
        </main>
      </div>
      <NavLinkC
        style={{ color: "black" }}
        linkOperation={() => dispatch(backToHome())}
        linkName="go to HomePage"
        goToLink="/"
      />

      <NavLinkC
        linkOperation={() => dispatch(goToLoggedOut())}
        goToLink={"/signout"}
        linkName={"SignOut Netflix"}
        style={{
          width: "fitContent",
          height: "fitContent",
          border: "none",
          padding: "1% 2%",
          fontSize: "100%",
          fontWeight: "600",
          background: "#e50914",
          color: "white",
          cursor: "pointer",
          borderRadius: "2%"
        }}
      />
    </>
  );
}

// userComponent End

export default User;
