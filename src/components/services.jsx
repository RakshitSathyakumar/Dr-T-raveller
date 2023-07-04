import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/travel1.jpg";
import img2 from "../assets/travel2.png";
import img3 from "../assets/travel3.webp";

const services = () => {
  return (
    <div className="services">
      <Carousel width={"65%"} infiniteLoop autoPlay showArrows={true} showThumbs={false} interval={1400} showStatus={false} >
        <div>
          <img src={img1} alt="Item 1" />
          <p className="legend">Travel with friends</p>
        </div>
        <div>
          <img src={img2} alt="Item 1" />
          <p className="legend">Explore Different Locations</p>
        </div>
        <div>
          <img src={img3} alt="Item 1" />
          <p className="legend">Take a break!</p>
        </div>
      </Carousel>
    </div>
  );
};

export default services;
