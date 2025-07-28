import React from "react";
import { FaSearch } from "react-icons/fa";

const popularTags = ["Web Design", "WordPress", "Logo Design", "AI Services"];

const Featured = () => {
  return (
    <section className="featured bg-[#004AAD] text-white min-h-[600px] flex items-center justify-center">
      <div className="container max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Content */}
        <div className="left flex flex-col gap-8 md:flex-1">
          <h1 className="text-4xl sm:text-5xl font-poppins font-extrabold leading-tight max-w-xl">
            Find the perfect{" "}
            <span className="italic font-light">freelance</span> services for your business
          </h1>

          {/* Search Bar */}
          <div className="search flex bg-white rounded-md overflow-hidden max-w-xl shadow-lg">
            <div className="searchInput flex items-center gap-3 flex-grow px-4">
              <FaSearch className="w-5 h-5" />
              <input
                type="text"
                placeholder='Try "building mobile app"'
                className="flex-grow outline-none border-none text-gray-700 placeholder-gray-400 text-base"
              />
            </div>
            <button
              type="button"
              className="w-32 bg-[#F4B400] text-[#004AAD] font-semibold hover:bg-yellow-400 transition-colors"
            >
              Search
            </button>
          </div>

          {/* Popular Tags */}
          <div className="popular flex flex-wrap items-center gap-4 text-sm">
            <span className="font-semibold mr-2 select-none">Popular:</span>
            {popularTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className="px-4 py-1 border border-white rounded-full bg-transparent text-white hover:bg-[#F4B400] hover:text-[#004AAD] transition"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="right md:flex-1 w-full max-w-md">
          <img
            src="/ManImage.jpg"
            alt="Illustration of a person using laptop"
            className="w-full h-auto object-contain select-none"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default Featured;
