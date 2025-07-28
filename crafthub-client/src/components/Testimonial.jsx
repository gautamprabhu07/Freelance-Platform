// src/components/Testimonial.jsx
import React, { useState } from "react";
import PropTypes from "prop-types"; // ✅ Import prop-types

const testimonials = [
  {
    name: "Ananya Deshmukh",
    service: "Logo Design",
    img: "/man.jpg",
    feedback:
      "CraftHub helped me find an amazing designer who delivered exactly what I imagined. Communication was smooth and delivery was on time.",
  },
  {
    name: "Rajesh Iyer",
    service: "Web Development",
    img: "/woman.jpg",
    feedback:
      "The developer was professional, fast, and friendly. My website now loads faster and looks modern. Great experience overall!",
  },
  {
    name: "Meena Pillai",
    service: "Content Writing",
    img: "/man.jpg",
    feedback:
      "I needed content for my business site and found the perfect writer here. She understood my brand voice and delivered exceptional content.",
  },
];

function TestimonialCard({ testimonial }) {
  const [expanded, setExpanded] = useState(false);

  const words = testimonial.feedback.split(" ");
  const isLong = words.length > 8;
  const shortText = words.slice(0, 8).join(" ");

  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-4">
      <div className="flex items-center gap-4">
        <img
          src={testimonial.img}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border border-gray-300"
          draggable="false"
        />
        <div>
          <h3 className="text-md font-semibold text-gray-900">{testimonial.name}</h3>
          <p className="text-sm text-gray-500">{testimonial.service}</p>
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">
        {expanded || !isLong ? testimonial.feedback : shortText + "..."}{" "}
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-blue-600 font-medium ml-1 hover:underline focus:outline-none"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </p>
    </div>
  );
}

// ✅ PropTypes validation
TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    name: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    feedback: PropTypes.string.isRequired,
  }).isRequired,
};

export default function TestimonialsSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-0 py-20">
      <h1 className="text-3xl font-poppins font-extrabold text-center mb-12">
        What Our Clients Say
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard key={idx} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
