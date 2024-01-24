import React from "react";
import "./offer.css";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { LuClock9 } from "react-icons/lu";
import { HiSupport } from "react-icons/hi";
import Image from "../../assets/1-removebg-preview.png";
import Image2 from "../../assets/download-removebg-preview.png";
import Image3 from "../../assets/117089305-stylish-young-man-in-suit-and-sunglasses-business-style-office-worker-man-standing-isolated-over-removebg-preview.png";
import Image4 from "../../assets/1__2_-removebg-preview.png";
import Image5 from "../../assets/1-527-removebg-preview.png";

const Offer = () => {
  return (
    <section id="offer">
      <div className=" offer-container">
        <div className="offer-up-side">
          <div className="shipping">
            <h2>
              <BiSolidPlaneAlt />
            </h2>
            <div className="return-text">
              <h4>FREE SHIPPING</h4>
              <p>In Order Min $200</p>
            </div>
          </div>

          <div className="returns">
            <div className="sepa"></div>
            <div className="sep"></div>
            <h2>
              <LuClock9 />
            </h2>
            <div className="return-text">
              <h4>30-DAYS RETURNS</h4>
              <p>Money Back Guarantee</p>
            </div>
          </div>

          <div className="support">
            <h2>
              <HiSupport />
            </h2>
            <div className="return-text">
              <h4>24/7 SUPPORT</h4>
              <p>Lifetime Support</p>
            </div>
          </div>
        </div>

        <div className="offer-down-side">
          <div className="bag">
            <div className="bags">
              <div className="truser-abs bg">
                <button className="btn"> SHOP</button>
              </div>
              <img src={Image} />
            </div>
            <div className="trouser">
              <div className="truser-abs">
                <h3>DISCOUNT 30%</h3>
                <p>DRESSES</p>
                <button className="btn"> SHOP</button>
              </div>
              <img src={Image2} />
            </div>
          </div>

          <div className="full-side">
            <div className="truser-abs fu">
              <p>SPRING</p>
              <h3>COLLECTION</h3>
              <button className="btn"> SHOP</button>
            </div>
            <img src={Image3} />
          </div>

          <div className="shoe-side">
            <div className="shoes">
              <div className="truser-abs SH">
                <h3>50%</h3>
                <p>OFF</p>
                <button className="btn"> SHOP</button>
              </div>
              <img src={Image4} />
            </div>
            <div className="watch">
              <div className="truser-abs wt">
                <button className="btn"> SHOP</button>
              </div>
              <img src={Image5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
