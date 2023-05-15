import React from "react";
import "../styles/Purpose.css";
import Img1 from "../images/purpose-img-1.png";
import Img2 from "../images/purpose-img-2.png";
import { useState, useEffect } from "react";
function Purpose() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
        <div id="loadir">
          <div class="wrapper">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="shadow"></div>
            <div class="shadow"></div>
            <div class="shadow"></div>
          </div>
        </div>
      ) : (
        <section>
          <div className="num-div">
            <p className="num">01</p>
          </div>

          {/* First Half */}
          <div className="first-section">
            <div className="fst-heading">
              <h1>Why to use our Task Manager?</h1>
            </div>
            <div>
              <img src={Img1} alt="" className="purpose-img-1" />
            </div>
          </div>
          {/* Second half */}
          <div className="second-section">
            <div>
              <img src={Img2} alt="" className="purpose-img-2" />
            </div>
            <div>
              <h1 className="snd-heading">Because..</h1>
              <ul className="points-list">
                <li className="point">Easy To Use</li>
                <li className="point">User Friendly</li>
                <li className="point">Perfect For Students</li>
                <li className="point">User Friendly UI Design</li>
              </ul>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Purpose;
