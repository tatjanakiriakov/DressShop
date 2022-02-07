import React, { useState } from "react";
import { CarouselData } from "./CarouselData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "../styles/ImageSlider.css";
import backgroundvideo from "../assets/backgroundvideo.mp4";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      <div className="container-slider">
        <p>Check out our new Summer2022 Collection!</p>

        <section className="slider">
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

          {CarouselData.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img
                    src={slide.image}
                    alt="dress collection"
                    className="image"
                  />
                )}
                {index === current && (
                  <p className="caption">{slide.caption}</p>
                )}
                {index === current && <p className="count">{slide.count}</p>}
              </div>
            );
          })}
        </section>
      </div>

      <div className="home-info">
        <video className="backgroundvideo" autoPlay loop>
          <source src={backgroundvideo} type="video/mp4" />
        </video>
        <div className="centered">
          <p>Shop Designer Dresses on Sale from all over the world. </p>

          <button className="buttons">Winter2022</button>
          <button className="buttons">Summer2022</button>
          <button className="buttons">Short Dresses</button>
          <button className="buttons">Long Dresses</button>
          <br />
          <br />
          <br />

          <a className="inspo" href="/inspo">
            Get inspired by our dresses in action!
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
