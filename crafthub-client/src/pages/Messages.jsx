import React from "react";
import { Link } from "react-router-dom";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat.`;

  const messages = [
    { id: 1, name: "Charley Sharp", date: "1 hour ago", unread: true },
    { id: 2, name: "John Doe", date: "2 hours ago", unread: true },
    { id: 3, name: "Elinor Good", date: "1 day ago", unread: false },
    { id: 4, name: "Garner David", date: "2 days ago", unread: false },
    { id: 5, name: "Troy Oliver", date: "1 week ago", unread: false, plainText: true },
  ];

  return (
    <div className="flex justify-center text-gray-800">
      <div className="w-[1400px] py-12 px-4">
        {/* Title */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Messages</h1>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr className="text-gray-500 uppercase text-xs border-b">
                <th className="py-3 text-left">{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                <th className="py-3 text-left">Last Message</th>
                <th className="py-3 text-left">Date</th>
                <th className="py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((m) => (
                <tr
                  key={m.id}
                  className={`${m.unread ? "bg-green-50" : ""} border-b last:border-none h-24`}
                >
                  <td className="px-2 font-medium">{m.name}</td>
                  <td className="px-2 text-gray-600">
                    {m.plainText ? (
                      <span>{message.substring(0, 100)}</span>
                    ) : (
                      <Link to={`/message/${m.id}`} className="text-blue-600 hover:underline">
                        {message.substring(0, 100)}...
                      </Link>
                    )}
                  </td>
                  <td className="px-2 text-gray-500">{m.date}</td>
                  <td className="px-2">
                    {m.unread && (
                      <button className="bg-green-500 text-white px-3 py-2 rounded text-sm hover:bg-green-900">
                        Mark as Read
                      </button>
                    )}
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

export default Messages;
