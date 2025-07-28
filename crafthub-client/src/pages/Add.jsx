import React from "react";

const Add = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1400px] py-12 px-4">
        <h1 className="text-2xl text-gray-600 font-light mb-8">Add New Gig</h1>

        <div className="flex gap-16">
          {/* Left Section: Basic Info */}
          <div className="flex-1 flex flex-col gap-4">
            <label className="text-gray-600 text-lg">Title</label>
            <input
              type="text"
              placeholder="e.g. I will do something I'm really good at"
              className="p-5 border rounded-md focus:outline-none"
            />

            <label className="text-gray-600 text-lg">Category</label>
            <select className="p-5 border rounded-md focus:outline-none">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>

            <label className="text-gray-600 text-lg">Cover Image</label>
            <input type="file" className="p-2" />

            <label className="text-gray-600 text-lg">Upload Images</label>
            <input type="file" multiple className="p-2" />

            <label className="text-gray-600 text-lg">Description</label>
            <textarea
              rows={10}
              placeholder="Brief description to introduce your service to customers"
              className="p-5 border rounded-md resize-none focus:outline-none"
            ></textarea>

            <button className="mt-4 bg-green-400 text-white font-medium text-lg px-6 py-4 rounded-md hover:bg-green-900 transition">
              Create
            </button>
          </div>

          {/* Right Section: Details */}
          <div className="flex-1 flex flex-col gap-4">
            <label className="text-gray-600 text-lg">Service Title</label>
            <input
              type="text"
              placeholder="e.g. One-page web design"
              className="p-5 border rounded-md focus:outline-none"
            />

            <label className="text-gray-600 text-lg">Short Description</label>
            <textarea
              rows={6}
              placeholder="Short description of your service"
              className="p-5 border rounded-md resize-none focus:outline-none"
            ></textarea>

            <label className="text-gray-600 text-lg">Delivery Time (e.g. 3 days)</label>
            <input
              type="number"
              className="p-5 border rounded-md focus:outline-none"
            />

            <label className="text-gray-600 text-lg">Revision Number</label>
            <input
              type="number"
              className="p-5 border rounded-md focus:outline-none"
            />

            <label className="text-gray-600 text-lg">Add Features</label>
            <input
              type="text"
              placeholder="e.g. page design"
              className="p-5 border rounded-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="e.g. file uploading"
              className="p-5 border rounded-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="e.g. setting up a domain"
              className="p-5 border rounded-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="e.g. hosting"
              className="p-5 border rounded-md focus:outline-none"
            />

            <label className="text-gray-600 text-lg">Price</label>
            <input
              type="number"
              className="p-5 border rounded-md focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
