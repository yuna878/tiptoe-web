import React from "react";
import BusinessReview from "../image/cornellbusinessreview.png";
import Glogo from "../image/Jungle.png";
import Koreadaily1 from "../image/koreadaily.png";

import "./home.css";

function PressMobile() {
  return (
    <div className="container-fluid pt-3 pb-3">
      <div className="pressline">
        <hr />
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center pb-1">
          <div className="col-6">
            <center>
              <a href="http://www.koreadaily.com/news/read.asp?art_id=6178286">
                <img
                  src={Koreadaily1}
                  alt="Korea Daily Logo"
                  className="pressmobilescontentimage"
                ></img>
              </a>
            </center>
          </div>
          <div className="col-6">
            <div className="pressmobiletext">
              Conversation with the Founders
            </div>
          </div>
        </div>
        <div className="pressline">
          <hr />
        </div>
        <div className="row justify-content-center align-items-center pb-1">
          <div className="col-6">
            <div className="pressmobiletext">
              Social enterprise by Korean Cornell students
            </div>
          </div>
          <div className="col-6">
            <center>
              <a href="http://www.thecornellbusinessreview.com/cbrnow/2017/11/12/a-conversation-with-tiptoes-luke-hong-gi-baek-hyun-kyoo-choi-and-jinhyung-moon">
                <img
                  src={BusinessReview}
                  alt="Cornell Business Review Logo"
                  className="pressmobilescontentimage"
                ></img>
              </a>
            </center>
          </div>
        </div>
        <div className="pressline">
          <hr />
        </div>
        <div className="row justify-content-center align-items-center pb-1">
          <div className="col-6">
            <center>
              <a href="https://www.jungle.co.kr/magazine/27289">
                <img
                  src={Glogo}
                  alt="Jungle Logo"
                  className="pressmobilescontentimage"
                ></img>
              </a>
            </center>
          </div>
          <div className="col-6">
            <div className="pressmobiletext">
              Fashion Startup by Cornell Students
            </div>
          </div>
        </div>
      </div>
      <div className="pressline">
        <hr />
      </div>
    </div>
  );
}
export { PressMobile };
