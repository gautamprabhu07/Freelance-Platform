import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

export default function GigCard({ item }) {
  return (
    <Link
      to={`/gig/${item.id || 123}`}
      className="block w-[324px] h-[400px] border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition overflow-hidden bg-white"
    >
      {/* Gig Image */}
      <img
        src={item.img}
        alt={item.title || "Gig image"}
        className="w-full h-[50%] object-cover"
        draggable="false"
      />

      {/* Gig Info */}
      <div className="p-4 flex flex-col gap-2">
        {/* User Row */}
        <div className="flex items-center gap-3">
          <img
            src={item.pp}
            alt={item.username}
            className="w-7 h-7 rounded-full object-cover border"
            draggable="false"
          />
          <span className="text-sm font-medium text-gray-700">{item.username}</span>
        </div>

        {/* Description */}
        <p className="text-gray-800 text-sm line-clamp-2">{item.desc}</p>

        {/* Star Rating */}
        <div className="flex items-center gap-1">
          <FaStar className="w-4 h-4 text-yellow-300" />
          <span className="text-yellow-500 font-semibold text-sm">{item.star}</span>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Bottom Row */}
      <div className="flex justify-between items-center px-4 py-3">
        <FaRegHeart
          className="w-4 h-4 cursor-pointer text-red-700"
          draggable="false"
        />
        <div className="text-end">
          <span className="text-xs text-gray-500">STARTING AT</span>
          <h2 className="text-md font-semibold text-gray-700">
            $ {item.price}
            <sup className="text-xs font-light">99</sup>
          </h2>
        </div>
      </div>
    </Link>
  );
}

GigCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    img: PropTypes.string.isRequired,
    pp: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    star: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
  }).isRequired,
};
