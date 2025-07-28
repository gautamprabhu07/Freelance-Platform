import React from "react";
import PropTypes from "prop-types";

function ProjectCard({ card }) {
  return (
    <div
      className="project-card w-72 sm:w-72 md:w-72 lg:w-72 h-[300px] border border-gray-300 rounded-lg overflow-hidden cursor-pointer transition-shadow hover:shadow-lg bg-white"
      role="group"
      tabIndex={0}
      aria-label={`${card.username}'s project in category ${card.cat}`}
    >
      {/* Project main image */}
      <img
        src={card.img}
        alt={`${card.cat} project`}
        className="w-full h-[70%] object-cover select-none"
        draggable={false}
      />

      {/* Info section */}
      <div className="info flex items-center gap-4 px-4 py-3">
        {/* Profile picture */}
        <img
          src={card.pp}
          alt={`${card.username} profile`}
          className="w-10 h-10 rounded-full object-cover select-none"
          draggable={false}
        />

        {/* Texts */}
        <div className="texts truncate">
          <h2 className="text-sm font-semibold text-[#004AAD] truncate capitalize">
            {card.cat}
          </h2>
          <span className="text-sm font-light text-gray-600 truncate">
            {card.username}
          </span>
        </div>
      </div>
    </div>
  );
}

// ✅ PropTypes validation
ProjectCard.propTypes = {
  card: PropTypes.shape({
    img: PropTypes.string.isRequired,
    pp: PropTypes.string.isRequired,
    cat: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
