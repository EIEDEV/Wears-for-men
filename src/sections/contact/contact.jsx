import React from "react";
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { BsPinterest, BsWifi } from "react-icons/bs";
import "./contac.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container contact-container">
        <div className="products">
          <h5>Product</h5>
          <ul>
            <li>Men</li>
            <li>Shoes</li>
            <li>Kid's</li>
            <li>Accessories</li>
            <li>Sale for Special Offer</li>
          </ul>
        </div>

        <div className="about">
          <h5>About Us</h5>
          <ul>
            <li>Company</li>
            <li>Customer Service</li>
            <li>New Collection</li>
            <li>Public Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>

        <div className="contact">
          <h5>Contact</h5>
          <ul>
            <li>Support</li>
            <li>Payment Options</li>
            <li>Shipping & Delivery</li>
            <li>Orders</li>
            <li>Returns</li>
          </ul>
        </div>

        <div className="social">
          <div className="socialmedia">
            <p>
              <BiLogoFacebook />
              <BiLogoTwitter />
              <BsPinterest />
              <p>
                <BsWifi />
              </p>
            </p>
          </div>

          <div className="search">
            <input type="text" placeholder="Enter Your Email" />
            <div className="sub">Subscribe</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
