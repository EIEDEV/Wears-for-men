import React from "react";
import Image from "../../assets/ea3383dc7dd8fb4f7ff95fa53194e582-removebg-preview.png";
import "./header.css";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <motion.div
          className="l-side"
          animate={{
            scale: [1, 1.5, 1.5, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        >
          <h1>
            All <span>Collections</span>
          </h1>
          <h6>Available Now</h6>
        </motion.div>
        <motion.div
          className="r-side"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={Image} />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;

{
  /* <div className="l-side">
  <h1>
    All <span>Collections</span>
  </h1>
  <h6>Available Now</h6>
</div>; */
}
