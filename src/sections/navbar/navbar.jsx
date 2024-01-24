import "./navbar.css";
import { BiBell, BiSearch } from "react-icons/bi";
import React, { useState } from "react";
import { BsBag } from "react-icons/bs";
import Navdata from "./data";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [open, setopen] = useState(true);

  const whyopen = () => {
    setopen((open) => !open);
  };

  return (
    <nav id="nav">
      <div className="nav-container">
        <div className="company-name">
          <h2>
            Easy<span>Shop</span>
          </h2>
          <p>Collections</p>
        </div>
        <div className="links" style={{ display: open ? "inherit" : "none" }}>
          {Navdata.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href={item.link}> {item.title}</a>
            </motion.button>
          ))}
        </div>
        <div className="login">
          <BiSearch />
          <BsBag />
          <BiBell />
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Login
          </motion.button>
        </div>
        <h3>
          <FaBars onClick={whyopen} />
        </h3>
      </div>
    </nav>
  );
};

export default Navbar;
