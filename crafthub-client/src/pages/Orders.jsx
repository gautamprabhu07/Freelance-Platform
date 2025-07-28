import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const orders = [
    {
      id: 1,
      title: "Stunning concept art",
      price: 59.99,
      user: "Maria Anders",
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      title: "AI generated concept art",
      price: 79.99,
      user: "Francisco Chang",
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      title: "High quality digital character",
      price: 110.99,
      user: "Roland Mendel",
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      title: "Illustration hyper realistic painting",
      price: 39.99,
      user: "Helen Bennett",
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 5,
      title: "Original AI generated digital art",
      price: 119.99,
      user: "Yoshi Tannamuri",
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 6,
      title: "Text based AI generated art",
      price: 49.99,
      user: "Giovanni Rovelli",
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div className="flex justify-center text-gray-700">
      <div className="w-[1400px] py-12 px-4">
        {/* Title */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Orders</h1>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500 uppercase text-xs">
                <th className="py-3">Image</th>
                <th className="py-3">Title</th>
                <th className="py-3">Price</th>
                <th className="py-3">
                  {currentUser.isSeller ? "Buyer" : "Seller"}
                </th>
                <th className="py-3">Contact</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={order.id}
                  className={index % 2 === 1 ? "bg-green-50" : ""}
                >
                  <td className="py-3">
                    <img
                      src={order.image}
                      alt="Order"
                      className="w-[50px] h-[25px] object-cover"
                    />
                  </td>
                  <td className="py-3">{order.title}</td>
                  <td className="py-3">
                    ${Math.floor(order.price)}.
                    <sup className="text-xs">
                      {Math.round((order.price % 1) * 100)
                        .toString()
                        .padStart(2, "0")}
                    </sup>
                  </td>
                  <td className="py-3">{order.user}</td>
                  <td className="py-3">
                    <button className="text-green-600 hover:text-green-800">
                      <FaEnvelope className="w-5 h-5" />
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

export default Orders;
