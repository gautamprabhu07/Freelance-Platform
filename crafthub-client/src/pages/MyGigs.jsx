import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const MyGigs = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const gigs = [
    {
      id: 1,
      title: "Stunning concept art",
      price: 59.99,
      sales: 13,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      title: "AI generated concept art",
      price: 120.99,
      sales: 41,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      title: "High quality digital character",
      price: 79.99,
      sales: 55,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      title: "Illustration hyper realistic painting",
      price: 119.99,
      sales: 29,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 5,
      title: "Original AI generated digital art",
      price: 59.99,
      sales: 34,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 6,
      title: "Text based AI generated art",
      price: 110.99,
      sales: 16,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div className="flex justify-center text-gray-700">
      <div className="w-[1400px] py-12 px-4">
        {/* Title Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">
            {currentUser.isSeller ? "Gigs" : "Orders"}
          </h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button className="bg-primary hover:bg-green-600 text-white font-medium px-4 py-2 rounded transition">
                Add New Gig
              </button>
            </Link>
          )}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500 uppercase text-xs">
                <th className="py-3">Image</th>
                <th className="py-3">Title</th>
                <th className="py-3">Price</th>
                <th className="py-3">Sales</th>
                <th className="py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {gigs.map((gig, index) => (
                <tr
                  key={gig.id}
                  className={index % 2 === 1 ? "bg-green-50" : ""}
                >
                  <td className="py-3">
                    <img
                      src={gig.image}
                      alt="gig"
                      className="w-[50px] h-[25px] object-cover"
                    />
                  </td>
                  <td className="py-3">{gig.title}</td>
                  <td className="py-3">
                    ${Math.floor(gig.price)}.
                    <sup className="text-xs">
                      {Math.round((gig.price % 1) * 100)
                        .toString()
                        .padStart(2, "0")}
                    </sup>
                  </td>
                  <td className="py-3">{gig.sales}</td>
                  <td className="py-3">
                    <button className="text-red-500 hover:text-red-700">
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyGigs;
