import React from "react";
import { Link } from "react-router-dom";

const Message = () => {
  const userMsg = "https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600";
  const otherMsg = "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600";

  const sampleText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure mollitia perspiciatis officiis voluptate? Sequi quae officia possimus, iusto labore alias mollitia eveniet nemo placeat laboriosam nisi animi! Error, tenetur!";

  const messages = [
    { id: 1, from: "other", text: sampleText },
    { id: 2, from: "user", text: sampleText },
    { id: 3, from: "other", text: sampleText },
    { id: 4, from: "user", text: sampleText },
    { id: 5, from: "other", text: sampleText },
    { id: 6, from: "user", text: sampleText },
    { id: 7, from: "other", text: sampleText },
    { id: 8, from: "user", text: sampleText },
    { id: 9, from: "other", text: sampleText },
    { id: 10, from: "user", text: sampleText },
    { id: 11, from: "other", text: sampleText },
    { id: 12, from: "other", text: sampleText },
    { id: 13, from: "user", text: sampleText },
    { id: 14, from: "user", text: sampleText },
    { id: 15, from: "other", text: sampleText },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-[1200px] my-12 px-4">
        {/* Breadcrumbs */}
        <span className="text-sm font-light text-gray-600">
          <Link to="/messages" className="hover:underline">Messages</Link> &gt; John Doe &gt;
        </span>

        {/* Messages List */}
        <div className="flex flex-col gap-5 my-8 p-6 h-[500px] overflow-y-scroll border rounded-md">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-4 max-w-[600px] text-base ${
                msg.from === "user" ? "flex-row-reverse self-end" : ""
              }`}
            >
              <img
                src={msg.from === "user" ? userMsg : otherMsg}
                alt="profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <p
                className={`p-5 font-light text-sm max-w-[500px] rounded-2xl ${
                  msg.from === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-100 text-gray-700 rounded-bl-none"
                }`}
              >
                {msg.text}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-200 mb-6" />

        {/* Message Input */}
        <div className="flex items-center justify-between gap-4">
          <textarea
            placeholder="Write a message..."
            className="w-full h-28 border border-gray-300 rounded-xl p-3 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="min-w-[100px] bg-primary text-white py-3 px-6 rounded-xl font-medium hover:bg-green-600 transition">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
