import React from "react";
import "./collect.css";
import CollectCard from "./card/card";
import collectData from "./DATA.JSX";
import Slider from "react-slick";

const Collect = () => {
  const set = {
    className: "slided",
    dots: true,
    Infinite: true,
    speed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1, dots: true },
      },
      {
        breakpoint: 801,
        settings: { slidesToShow: 2, slidesToScroll: 2, dots: true },
      },
    ],
  };

  return (
    <section id="latest">
      <h2>Trending</h2>
      <p>Be the First To Know About New And Trending Fashion Styles</p>
      <div className="container latest-container">
        <Slider {...set} classname="lolcontainer">
          {collectData.map((item) => (
            <CollectCard classname="last">
              <img src={item.ima} />
            </CollectCard>
          ))}
        </Slider>
      </div>
      <p>Elevate Your Look With Our Trending Quality Top Collections</p>
    </section>
  );
};

export default Collect;
