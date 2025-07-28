import React from "react";
import Featured from "../components/Featured"; 
import Slide from "../components/Slide";
import CatCard from "../components/Catcard";
import ProjectCard from "../components/Projectcard";
import TestimonialsSection from "../components/Testimonial.jsx";
import { cards, projects } from "../data.js";
import { FiCheckCircle } from "react-icons/fi";

const featuresData = [
  {
    title: "The best for every budget",
    description:
      "Find high-quality services at every price point. No hourly rates, just project-based pricing.",
  },
  {
    title: "Quality work done quickly",
    description:
      "Find the right freelancer to begin working on your project within minutes.",
  },
  {
    title: "Protected payments, every time",
    description:
      "Always know what you'll pay upfront. Your payment isn't released until you approve the work.",
  },
  {
    title: "24/7 support",
    description:
      "Find high-quality services at every price point. No hourly rates, just project-based pricing.",
  },
];

const businessFeatures = [
  "Connect to freelancers with proven business experience",
  "Get matched with the perfect talent by a customer success manager",
  "Manage teamwork and boost productivity with one powerful workspace",
];

const marketplaceCategories = [
  { name: "Graphics & Design", src: "/graphics.jpg" },
  { name: "Digital Marketing", src: "/digital.jpg" },
  { name: "Writing & Translation", src: "/writing.jpg" },
  { name: "Video & Animation", src: "/video.jpg" },
  { name: "Music & Audio", src: "/music.jpg" },
  { name: "Programming & Tech", src: "/programming.jpg" },
  { name: "Business", src: "/business.jpg" },
  { name: "Lifestyle", src: "/lifestyle.jpg" },
  { name: "Data", src: "/data.jpg" },
  { name: "Photography", src: "/potography.jpg" },
];

function Home() {
  return (
    <div className="home bg-background font-roboto text-textMain">
      <Featured />

      {/* Cards slider */}
      <div className="my-12">
        <Slide slidesToShow={5}>
          {cards.map((card) => (
            <CatCard key={card.id} card={card} />
          ))}
        </Slide>
      </div>

      {/* Features Section */}
      <section className="features max-w-[1400px] mx-auto px-6 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Left: Features List */}
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-poppins font-extrabold">
            A whole world of freelance talent at your fingertips
          </h1>
          {featuresData.map(({ title, description }, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-2">
                <FiCheckCircle className="w-6 h-6 select-none text-green-600"/>
                <h2 className="font-semibold text-lg">{title}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="w-full h-full flex items-center justify-center">
  <img
    src="/About.png"
    alt="About CraftHub"
    className="w-full h-full object-contain max-h-[450px] rounded-lg"
    draggable="false"
  />
</div>
      </section>

      {/* Explore Marketplace */}
      <section className="explore max-w-[1400px] mx-auto px-6 lg:px-0 mb-16">
        <h1 className="text-3xl font-poppins font-extrabold mb-8">
          Explore the marketplace
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {marketplaceCategories.map(({ name, src }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-3 cursor-pointer group"
            >
              <img
  src={src}
  alt={name}
  className="w-20 h-20 object-cover rounded-full border-2 border-gray-200 group-hover:scale-110 transition-transform duration-300 shadow-md"
  draggable="false"
/>

              <div className="w-14 h-1 bg-primary rounded mt-1 group-hover:bg-accent transition-colors"></div>
              <span className="text-center text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </section>

      <TestimonialsSection />

      {/* Projects Slider */}
      <div className="mb-16">
        <Slide slidesToShow={4}>
          {projects.map((card) => (
            <ProjectCard key={card.id} card={card} />
          ))}
        </Slide>
      </div>

      
    </div>
  );
}

export default Home;
