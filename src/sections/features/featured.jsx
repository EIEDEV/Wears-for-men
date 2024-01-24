import React, { useState } from "react";
import { motion } from "framer-motion";
import "./featured.css";
import featureData from "./data";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillCartFill, BsCart } from "react-icons/bs";

const Featured = () => {
  const [alldata, setalldata] = useState(featureData);

  const filtar = (itemass) => {
    setalldata(featureData.filter((item) => item.ass === itemass));
  };

  const [likee, setlikee] = useState([]);
  const [cart, setcart] = useState([]);

  const lol = (itemid) => {
    if (likee.includes(itemid)) {
      setlikee(likee.filter((id) => id !== itemid));
    } else {
      setlikee([...likee, itemid]);
    }
  };

  const lolo = (itemid) => {
    if (cart.includes(itemid)) {
      setcart(cart.filter((id) => id !== itemid));
    } else {
      setcart([...cart, itemid]);
    }
  };

  return (
    <div id="featured">
      <div className=" features">
        <div className="container select">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="div"
            onClick={() => setalldata(featureData)}
          >
            All
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="div"
            onClick={() => filtar("Bags")}
          >
            Bags
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="div"
            onClick={() => filtar("Caps")}
          >
            Caps
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="div"
            onClick={() => filtar("Hoodies")}
          >
            Hoodies
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="div"
            onClick={() => filtar("Jackets")}
          >
            Jackets
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="div"
            onClick={() => filtar("Matching")}
          >
            Matching
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="div"
            onClick={() => filtar("Shirts")}
          >
            Shirts
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="div"
            onClick={() => filtar("Trousers")}
          >
            Trousers
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="div"
            onClick={() => filtar("Watches")}
          >
            Watches
          </motion.button>
        </div>

        <motion.div
          className="send"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          {alldata.map((item) => (
            <div className="feature-pic" key={item.id}>
              <div className="feature-img">
                <img src={item.i} />
              </div>
              <div className="cart-like">
                <p onClick={() => lol(item.id)}>
                  {likee.includes(item.id) ? (
                    <AiFillHeart style={{ color: "red", fontSize: "2rem" }} />
                  ) : (
                    <AiOutlineHeart style={{ color: "black" }} />
                  )}
                </p>
                <h3>$ {item.owo}</h3>
                <p onClick={() => lolo(item.id)}>
                  {cart.includes(item.id) ? (
                    <BsFillCartFill style={{ fontSize: "2rem" }} />
                  ) : (
                    <BsCart />
                  )}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Featured;
// // style={{ color: likee ? "inherit" : "red" }}
// <p onClick={lol}>{likee ? <AiOutlineHeart /> : <AiFillHeart />}</p>;
