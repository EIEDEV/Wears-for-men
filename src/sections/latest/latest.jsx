import "./latest.css";
import latestData from "./data";

import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Latest = () => {
  return (
    <section id="new">
      <h2>Latest Collections</h2>
      <p>
        Lorem ipsum dolor sit amet , consectetur adipiscing eit. Phartellus sit
        amet massa et tue non vulputate
      </p>
      <div className="container latest">
        {latestData.map((items) => (
          <div className="main-div">
            <div className="image" key={items.id}>
              <img src={items.image} />
            </div>
            <div className="p">
              <p>
                Dicover the latest fashion trend and stand out with our unique
                latest collection.
              </p>
              <h2>
                <BsArrowRight />
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Latest;
