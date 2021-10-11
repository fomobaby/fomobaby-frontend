import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import { CgMenu } from "react-icons/cg";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ComingSoon from "./components/ComingSoon";
import ComingSoonNft from "./components/ComingSoonNft";
import Community from "./components/Community";
import News from "./components/News";
import MobNav from "./components/MobNav";

function App() {
  const [show, setShow] = useState(true);
  const [mobShow, setMobShow] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 961);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 961);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 960;
        if (ismobile !== isMobile) {
          setIsMobile(ismobile);
          setShow(false);
        }
      },
      false
    );
  }, [isMobile]);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const isDesktop = window.innerWidth > 961;
        if (isDesktop !== isDesktop) {
          setIsDesktop(isDesktop);
          setShow(true);
        }
      },
      false
    );
  }, [isDesktop]);

  return (
    <Router>
      <div className="header">
        <div className="header-inner">
          <div className="inner-widget">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="button-aside">
                <CgMenu
                  className="menu-icon"
                  onClick={() => setMobShow(!mobShow)}
                />
              </div>
              <img
                src="https://res.cloudinary.com/ontraveldiary/image/upload/v1633359750/FOMOBABY/fomo-logo_1_l9nszt.png"
                alt="logo"
                className="logo"
                height={55}
                width={52}
              />
              <h3
                style={{
                  color: "#000",
                  fontWeight: 700,
                  marginLeft: 10,
                }}
              >
                FOMO BABY
              </h3>
            </div>
            <div className="space"></div>
            <div>
              <a
                href="https://t.me/fomobabytelegram"
                target="_blank"
                className="common-button button-primary button-40"
              >
                Join Telegram
              </a>
            </div>
          </div>
        </div>
      </div>

      <Navbar />

      {mobShow && <MobNav mobShow={mobShow} close={() => setMobShow(false)} />}

      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/swap" exact component={ComingSoon} />
        <Route path="/comingsoon" exact component={ComingSoon} />
        <Route path="/comingsoonnft" exact component={ComingSoonNft} />
        <Route path="/comingsoonstaking" exact component={ComingSoon} />
        <Route path="/community" exact component={Community} />
        <Route path="/news" exact component={News} />
      </div>
    </Router>
  );
}

export default App;
