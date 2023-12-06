import "./App.scss";
import bell from "./assets/Bell.svg";
import eye from "./assets/Eye.svg";
import icon from "./assets/Vector.svg";

import portfolio from "./assets/img1.png";
import NotificationCard from "./components/notificationCard/NotificationCard";
import Signup from "./components/signup/Signup";
import TestimonialCard from "./components/testimonial/TestimonialCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import bell1 from "./assets/notbell.svg";
import clock from "./assets/clock.svg";
import chat from "./assets/bar-chart-2.svg";
import menu from "./assets/Hamburger_icon.svg.png";
import { useState } from "react";


function App() {
  const splideOptions = {
    type: "loop",
    rewind: true,
    perPage: 2,
    gap: "20px",
    arrows: false,
    fixedWidth: 353,
    fixedHeight: 137,
        width: "45vw",
    breakpoints: {
      900: {
        perPage: 1,
        fixedWidth: 300,
        fixedHeight: 137,
        width: "calc(100vw - 20vw)",
      },
    },
  };

  const NotificationsplideOptions = {
    type: "loop",
    rewind: true,
    perPage: 2,
    gap: "20px",
    arrows: false,
    fixedWidth: 190,
    autoWidth: true,
    pagination: false,
  };
  const [menuData, setmenuData] = useState(false)
  return (
    <div className="App">
      <div className="wrap">
        <div className="contentLeft">
          <div className="contentNotification">
            <div className="notification">
              <div className="menu">
                <img src={bell} alt="Bellicon" />
                                              <img src={menu} className="menuImg" onClick={e => setmenuData(!menuData)} alt="menu" width={32} height={32} />


              </div>
              <span>
                Get notified when a highly correlated whale makes a move
              </span>
              <p>
                Find out when a certain whale moves more than any preset amount
                on-chain or when a dormant whale you care about becomes active.
              </p>
            </div>
            <div className="contentScroll">
              <div className="scroller">
                <Splide options={NotificationsplideOptions}>
                  <SplideSlide>
                    <NotificationCard icon={bell1} bellSave={true} />
                  </SplideSlide>
                  <SplideSlide>
                    <NotificationCard
                      icon={chat}
                      desc={"Notify me when any wallets move more than"}
                      action={true}
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <NotificationCard
                      icon={clock}
                      desc={"Notify me when any wallet dormant for"}
                      action={true}
                      active={"becomes active"}
                    />
                  </SplideSlide>
                </Splide>
              </div>
            </div>
          </div>
          <div className="contentPortfolio container">
            <img
              src={portfolio}
              alt="portfolio"
              className="imgPort"
              width={335}
              height={306}
            />
            <div className="contentEye">
              <img src={eye} alt="eye" width={32} height={32} />
              <span>Watch what the whales are doing</span>
              <p>
                All whales are not equal. Know exactly what the whales impacting
                YOUR portfolio are doing.
              </p>
            </div>
          </div>
          <div className="testimonial">
            <div className="head container">
              <p>Testimonials</p>
              <div className="divider"></div>
            </div>
            <div className="slider">
              <img src={icon} alt="icon" />
              <div className="wrapSplide">
                <div className="splide">
                  <Splide options={splideOptions}>
                    <SplideSlide>
                      <TestimonialCard
                        userName={"Jack F"}
                        role={"Ex Blackrock PM"}
                        desc={
                          "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”"
                        }
                      />
                    </SplideSlide>
                    <SplideSlide>
                      <TestimonialCard
                        userName={"Yash P"}
                        role={"Research, 3poch Crypto Hedge Fund"}
                        desc={
                          "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”"
                        }
                      />
                    </SplideSlide>
                    <SplideSlide>
                      <TestimonialCard
                        userName={"Shiv S"}
                        role={"Co-Founder Magik Labs"}
                        desc={
                          "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”"
                        }
                      />
                    </SplideSlide>
                  </Splide>
                </div>
              </div>
            </div>
          </div>
        </div>
                <Signup menuActive={menuData} setMenuActive={setmenuData} />

      </div>
    </div>
  );
}

export default App;
