import React from "react";
import Slider from "infinite-react-carousel";
import PropTypes from "prop-types";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slide = ({ children, slidesToShow }) => {
  return (
    <section className="slide py-24 flex justify-center">
      <div className="container max-w-[1400px] w-full relative">
        <Slider
          slidesToShow={slidesToShow}
          arrowsScroll={3}               // ✅ Scroll 3 per click
          autoplay={true}               // ✅ Auto play
          autoplayScroll={3}            // ✅ Auto scroll 3 as well
          autoplaySpeed={2500}          // ✅ Speed
          pauseOnHover={true}           // ✅ Pause on hover
          arrows={true}                 // ✅ Enable arrows
          adaptiveHeight={true}
          className="relative"
          prevArrow={
            <button
              aria-label="Previous Slide"
              className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-red-600 hover:bg-red-400 flex items-center justify-center text-gray-700 shadow-md z-20 transition"
            >
              <FaArrowCircleLeft
                className="w-6 h-6 bg-red-600 hover:bg-red-400 rounded-full text-white"
              >
                <path d="M15 18l-6-6 6-6" />
              </FaArrowCircleLeft>
            </button>
          }
          nextArrow={
            <button
              aria-label="Next Slide"
              className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-red-500 hover:bg-red-400 flex items-center justify-center text-gray-700 shadow-md z-20 transition"
            >
              <FaArrowCircleRight
                className="w-6 h-6 bg-red-600 hover:bg-red-400 rounded-full text-white"
              />
                
            </button>
          }
        >
          {children}
        </Slider>
      </div>
    </section>
  );
};

// ✅ PropTypes validation
Slide.propTypes = {
  children: PropTypes.node.isRequired,
  slidesToShow: PropTypes.number.isRequired,
};

export default Slide;
