import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FAQ from "./FAQ";
function Collection() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    autoplay: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, // show 1 slide at 800px
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1, // show 1 slide at 800px
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  const imageNames = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <div className="collection">
      <section>
        <h1>Find your favourite character</h1>
        <div className="sliderDiv">
          <Slider {...settings} ref={sliderRef}>
            {imageNames.map((imageName) => (
              <div key={imageName} className="imgContainer">
                <img
                  src={`./images/nfts/${imageName}.png`}
                  alt={`NFT ${imageName}`}
                />
              </div>
            ))}
          </Slider>
          <div className="navigationRow">
            <div className="navigationDots">
              {[...Array(20)].map((_, index) => (
                <li
                  key={index}
                  className={currentSlide === index ? "active" : ""}
                  onClick={() => goToSlide(index)}
                ></li>
              ))}
            </div>
            <div className="navigationContainer">
              <span
                className="navigation"
                onClick={() => goToSlide(currentSlide - 1)}
              >
                &#8592;
              </span>
              <span
                className="navigation"
                onClick={() => goToSlide(currentSlide + 1)}
              >
                &#8594;
              </span>
            </div>
          </div>
        </div>
        <div className="faq">
          <section>
            <div>
              <p>Your questions, answered.</p>
            </div>
            <FAQ />
          </section>
        </div>
      </section>
    </div>
  );
}

export default Collection;
