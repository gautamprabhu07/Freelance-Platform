import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Gigs from "./pages/Gigs";
import Gig from "./pages/Gig";
import Login from "./pages//Login";
import Register from "./pages/Register";
import Add from "./pages/Add";
import Orders from "./pages/Orders";
import Messages from "./pages/Messages";
import Message from "./pages/Message";
import MyGigs from "./pages/MyGigs";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#1F2937] font-roboto">
      <Navbar />
      <main className="flex-grow container max-w-[1400px] px-4 py-6 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gigs",
        element: <Gigs />,
      },
      {
        path: "/myGigs",
        element: <MyGigs />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/message/:id",
        element: <Message />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/gig/:id",
        element: <Gig />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
