import React from "react";
import { useParams } from "react-router-dom";
import { gigs } from "../data"; // or fetch from backend later
import Slide from "../components/Slide";
import { FaStar } from "react-icons/fa6";
import { BiRevision } from "react-icons/bi";
import { FaClock } from "react-icons/fa6";
import { TbChecks } from "react-icons/tb";



const Gig = () => {
  const { id } = useParams();
  const gig = gigs.find((g) => g.id === parseInt(id)) || gigs[0]; // fallback for now

  return (
    <div className="gig flex justify-center bg-white text-gray-800">
      <div className="max-w-[1400px] w-full flex flex-col lg:flex-row gap-8 p-6 lg:p-10">
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          {/* Breadcrumbs */}
          <span className="text-sm uppercase text-gray-500">CraftHub &gt; {gig.category || "Graphics & Design"} &gt;</span>

          {/* Title */}
          <h1 className="text-2xl font-semibold">{gig.title}</h1>

          {/* Seller Info */}
          <div className="flex items-center gap-3">
            <img src={gig.pp} alt="Seller" className="w-8 h-8 rounded-full object-cover border" />
            <span className="text-sm font-medium">{gig.username}</span>
            <div className="flex items-center gap-1 ml-2 text-yellow-500 text-sm">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-4 h-4" />
              ))}
              <span className="font-semibold">{gig.star}</span>
            </div>
          </div>

          {/* Image Carousel using Slide component */}
{Array.isArray(gig.images) && gig.images.length > 0 ? (
  <div className="bg-gray-100 rounded-lg">
    <Slide slidesToShow={1}>
      {gig.images.map((src, i) => (
        <div key={i} className="flex justify-center">
          <img
            src={src}
            alt={`slide-${i}`}
            className="max-h-[500px] object-contain mx-auto"
            draggable="false"
          />
        </div>
      ))}
    </Slide>
  </div>
) : (
  <div className="bg-gray-100 rounded-lg p-10 text-center text-gray-500 border">
    No images available for this gig.
  </div>
)}

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold mt-6">About This Gig</h2>
            <p className="mt-2 text-gray-700 leading-relaxed">{gig.description}</p>
          </div>

          {/* Seller Details */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">About the Seller</h2>
            <div className="flex gap-6 items-center mb-6">
              <img src={gig.pp} alt="Seller" className="w-24 h-24 rounded-full object-cover border" />
              <div>
                <h3 className="text-lg font-semibold">{gig.username}</h3>
                <div className="flex items-center gap-2 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4" />
                  ))}
                  <span className="font-semibold">{gig.star}</span>
                </div>
                <button className="mt-2 px-4 py-2 border rounded hover:bg-gray-50 text-sm font-medium">Contact Me</button>
              </div>
            </div>

            {/* Seller Info Box */}
            <div className="border p-5 rounded-lg space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-600">
                <div><span className="font-medium">From:</span> USA</div>
                <div><span className="font-medium">Member since:</span> Aug 2022</div>
                <div><span className="font-medium">Avg. response time:</span> 4 hours</div>
                <div><span className="font-medium">Last delivery:</span> 1 day</div>
                <div><span className="font-medium">Languages:</span> English</div>
              </div>
              <hr />
              <p className="text-gray-700">
                My name is Anna, I enjoy creating AI generated art in my spare time. I have a lot of experience using the AI program and that means I know what to prompt the AI with to get a great and incredibly detailed result.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (Sticky Offer Box) */}
        <div className="flex-1 max-w-sm h-max sticky top-24 border rounded-lg shadow-sm p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-gray-700">1 AI generated image</h3>
            <h2 className="text-xl font-semibold text-gray-800">$59.99</h2>
          </div>
          <p className="text-gray-600 text-sm">
            I will create a unique high quality AI generated image based on a description that you give me
          </p>
          <div className="flex justify-between text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <FaClock className="w-4 h-4" />
              <span>2 Days Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <BiRevision className="w-4 h-4" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            {["Prompt writing", "Artwork delivery", "Image upscaling", "Additional design"].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <TbChecks className="w-4 h-4" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <button className="w-full py-2 bg-primary text-white rounded font-semibold hover:bg-green-600 transition">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
