import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./index.scss";

const slides = [
  {
    big: (
      <>
        Sparking a Whole New World of <br />
        Custom Software and Blockchain Solutions
      </>
    ),
    small: "Empower. Innovate. Succeed!",
  },
  {
    big: (
      <>
        Shaping the Digital Future of <br />
        SMB's and Enterprises
      </>
    ),
    small: "Empower. Innovate. Succeed!",
  },
  {
    big: (
      <>
        Design, Build and Develop <br />
        Custom Software Solutions
      </>
    ),
    small: "Empower. Innovate. Succeed!",
  },
  {
    big: (
      <>
        Envision the World Where Automation and <br />
        Robotics is a Reality
      </>
    ),
    small: "Empower. Innovate. Succeed!",
  },
  {
    big: (
      <>
        Creating Goal-Oriented & <br />
        Long-Lasting Business Value
      </>
    ),
    small: "Empower. Innovate. Succeed!",
  },
];

export default () => {
  return (
    <div className="carousel-wrapper">
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        transitionTime={500}
        showStatus={false}
        emulateTouch={true}
      >
        {slides.map((slide, key) => (
          <div className={`slide background${key + 1}`}>
            <h1>{slide.big}</h1>
            <h3>{slide.small}</h3>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
