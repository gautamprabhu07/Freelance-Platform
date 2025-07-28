import React from "react";
import { FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { IoLanguageSharp } from "react-icons/io5";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaPerson } from "react-icons/fa6";




const footerLinks = [
  {
    title: "Categories",
    items: [
      "Graphics & Design",
      "Digital Marketing",
      "Writing & Translation",
      "Video & Animation",
      "Music & Audio",
      "Programming & Tech",
      "Data",
      "Business",
      "Lifestyle",
      "Photography",
      "Sitemap",
    ],
  },
  {
    title: "About",
    items: [
      "Press & News",
      "Partnerships",
      "Privacy Policy",
      "Terms of Service",
      "Intellectual Property Claims",
      "Investor Relations",
      "Contact Sales",
    ],
  },
  {
    title: "Support",
    items: [
      "Help & Support",
      "Trust & Safety",
      "Selling on CraftHub",
      "Buying on CraftHub",
    ],
  },
  {
    title: "Community",
    items: [
      "Customer Success Stories",
      "Community hub",
      "Forum",
      "Events",
      "Blog",
      "Influencers",
      "Affiliates",
      "Podcast",
      "Invite a Friend",
      "Become a Seller",
      "Community Standards",
    ],
  },
  {
    title: "More From CraftHub",
    items: [
      "CraftHub Business",
      "CraftHub Pro",
      "Logo Maker",
      "Guides",
      "Get Inspired",
      "CraftHub Select",
      "ClearVoice",
      "CraftHub Workspace",
      "Learn",
      "Working Not Working",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="text-gray-600 py-16 px-4 md:px-0">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 mb-12">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-800">{section.title}</h2>
              {section.items.map((item, i) => (
                <p key={i} className="text-sm font-light cursor-pointer hover:underline">
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>

        <hr className="border-t border-gray-200 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          {/* Left */}
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-gray-800">CraftHub</h2>
            <span>© CraftHub International Ltd. 2025</span>
          </div>

          {/* Right */}
          <div className="flex flex-wrap items-center gap-6">
            {/* Social Icons */}
            <div className="flex gap-4">
              <FaTwitter className="w-5 h-5" />
              <FaFacebook className="w-5 h-5" />
              <ImLinkedin className="w-5 h-5" />
              <FaPinterest className="w-5 h-5" />
              <AiFillInstagram className="w-5 h-5" />
            </div>

            {/* Language & Currency */}
            <div className="flex items-center gap-2">
              <IoLanguageSharp className="w-5 h-5" />
              <span>English</span>
            </div>
            <div className="flex items-center gap-2">
              <BsCurrencyExchange className="w-5 h-5" />
              <span>USD</span>
            </div>

            {/* Accessibility */}
            <FaPerson className="w-5 h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
