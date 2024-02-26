import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { goToSignIn, backToHome } from "../action/action";
import LogoC from "../Components/Logo/LogoC";
import Button from "../Components/Buttons/Button";

import NewFooter from "../Components/Footer/NewFooter";

import QueAnsC from "../Components/QueAnsC";

import AnimatedCard from "../Components/AnimatedCard/AnimatedCard";
import AnimatedCardVideoData2 from "../Components/AnimatedCard/AnimatedCardVideoData2";
import AnimatedCardVideoData1 from "../Components/AnimatedCard/AnimatedCardVideoData1";

import HomeContent from "./HomeContent";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

import { animatedCardSecApi, QueAnsData } from "../APInetflix";

function HomePage({ result, forTrialHome }) {
  // -------------------------------------------------------------------------------------

  const dispatch = useDispatch();

  // *******************************************************************************

  const stateForLogo = useSelector(
    (input) => input.reducerNetflixClone.stateForLogo
  );
  const stateForLoggedIN = useSelector(
    (input) => input.reducerNetflixClone.stateForLoggedIN
  );

  const state4 = useSelector((input) => input.reducerNetflixClone.state4);
  const state5 = useSelector((input) => input.reducerNetflixClone.state5);
  const state6 = useSelector((input) => input.reducerNetflixClone.state6);

  // -------------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------------

  return (
    <>
      <div className="card95DivForNFClone">
        <header
          className={
            !stateForLogo
              ? "card95DivForNFCloneHeader headerBackImg1"
              : "card95DivForNFCloneHeader headerBackImg2"
          }
        >
          <div className="forLogo">
            <LogoC backToHome={() => dispatch(backToHome())} />

            {state4 && !stateForLoggedIN ? (
              <Button
                BTNName="signIn"
                operation={() => dispatch(goToSignIn())}
              />
            ) : null}
          </div>

          <div className="forPageContent">
            {state5 ? (
              <HomeContent forTrialHome={forTrialHome} result={result} />
            ) : state6 ? (
              <SignIn />
            ) : (
              <SignUp />
            )}
          </div>
        </header>

        {!stateForLogo ? (
          <>
            {animatedCardSecApi.map((ele, ind) => {
              return (
                <section
                  key={ind}
                  className={`animatedCardSec ${ele.secClassName}`}
                >
                  <AnimatedCard
                    mediaData={
                      ind === 1 || ind === 3 ? (
                        <AnimatedCardVideoData2
                          imgSource={ele.imgSource}
                          imgSource2={ele.imgSource2}
                          videoSource={ele.videoSource}
                          downGif={ele.downGif}
                        />
                      ) : (
                        <AnimatedCardVideoData1
                          imgSource={ele.imgSource}
                          imgSource2={ele.imgSource2}
                          videoSource={ele.videoSource}
                          downGif={ele.downGif}
                        />
                      )
                    }
                    h2={ele.h2}
                    h1={ele.h1}
                  />
                </section>
              );
            })}

            <section className="QueAnsCSection">
              <div className="QueAnsCDiv">
                <h1>Frequently Asked Questions</h1>

                {QueAnsData.map((ele) => {
                  return (
                    <QueAnsC key={ele.id} {...ele} question="" answer="" />
                  );
                })}
              </div>
            </section>

            <section className="homePageFooter">
              <NewFooter />
            </section>
          </>
        ) : null}
      </div>
    </>
  );
}

export default HomePage;
