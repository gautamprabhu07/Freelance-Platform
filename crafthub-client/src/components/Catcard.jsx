import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CatCard({ card }) {
  const category = card.cat || card.title?.toLowerCase().replace(/\s+/g, "") || "design";

  return (
    <Link to={`/gigs?cat=${category}`} aria-label={`Browse gigs in ${card.title}`}>
      <div className="relative w-64 h-80 rounded-lg overflow-hidden cursor-pointer group shadow-lg transition-transform hover:scale-[1.03]">
        {/* Background Image */}
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover"
          draggable={false}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-70 group-hover:opacity-80 transition-opacity"></div>

        {/* Text Content */}
        <div className="absolute top-4 left-4 text-white">
          <span className="block text-sm font-light mb-1">{card.desc}</span>
          <span className="block text-xl font-semibold">{card.title}</span>
        </div>
      </div>
    </Link>
  );
}

// ✅ PropTypes validation
CatCard.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    cat: PropTypes.string, // Optional
  }).isRequired,
};

export default CatCard;
