import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const categories = [
  "Graphics & Design",
  "Video & Animation",
  "Writing & Translation",
  "AI Services",
  "Digital Marketing",
  "Music & Audio",
  "Programming & Tech",
  "Business",
  "Lifestyle",
];

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // for mobile main menu
  const [userMenuOpen, setUserMenuOpen] = useState(false); // user dropdown (desktop and mobile)
  const { pathname } = useLocation();

  // Mock user data (replace with real auth later)
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  useEffect(() => {
    const onScroll = () => {
      setActive(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Navbar background/text classes switch on scroll or route
  const navbarClass = active || pathname !== "/"
    ? "bg-white text-[#1F2937] shadow-md border-b border-gray-300"
    : "bg-[#004AAD] text-white";

  return (
    <header className={`${navbarClass} sticky top-0 z-50 transition-colors duration-300`}>
      <div className="container max-w-[1400px] mx-auto px-4 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center text-3xl font-bold font-poppins select-none">
          <span>CraftHub</span>
          <span className="text-[#F4B400] ml-1 font-extrabold">.</span>
        </Link>

        {/* Desktop navigation links */}
        <nav className="hidden md:flex items-center space-x-6 font-roboto font-medium select-none">
          <span className="cursor-pointer hover:text-[#F4B400]">CraftHub Business</span>
          <span className="cursor-pointer hover:text-[#F4B400]">Explore</span>
          <span className="cursor-pointer hover:text-[#F4B400]">English</span>

          {!currentUser?.isSeller && (
            <span className="cursor-pointer hover:text-[#F4B400]">Become a Seller</span>
          )}

          {currentUser ? (
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setUserMenuOpen(true)}
              onMouseLeave={() => setUserMenuOpen(false)}
              tabIndex={0}
              aria-haspopup="true"
              aria-expanded={userMenuOpen}
            >
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span>{currentUser.username}</span>
              </div>
              {userMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-52 bg-white rounded-lg shadow-soft border border-gray-200 flex flex-col gap-2 p-4 text-gray-600 font-light z-50">
                  {currentUser.isSeller && (
                    <>
                      <Link to="/myGigs" className="hover:text-[#004AAD]">Gigs</Link>
                      <Link to="/add" className="hover:text-[#004AAD]">Add New Gig</Link>
                    </>
                  )}
                  <Link to="/orders" className="hover:text-[#004AAD]">Orders</Link>
                  <Link to="/messages" className="hover:text-[#004AAD]">Messages</Link>
                  <Link to="/" className="hover:text-[#004AAD]">Logout</Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <span className="cursor-pointer hover:text-[#F4B400]">Sign in</span>
              <Link to="/register">
                <button className="ml-3 px-4 py-2 rounded-md border border-white bg-transparent text-white hover:bg-[#F4B400] hover:text-[#004AAD] transition">
                  Join
                </button>
              </Link>
            </>
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6 text-current" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-current" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-white border-t border-gray-200 shadow-soft px-6 py-5 font-roboto text-gray-700"
          onClick={() => setUserMenuOpen(false)} // close user dropdown if open
        >
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer hover:text-[#004AAD]">CraftHub Business</li>
            <li className="cursor-pointer hover:text-[#004AAD]">Explore</li>
            <li className="cursor-pointer hover:text-[#004AAD]">English</li>
            {!currentUser?.isSeller && (
              <li className="cursor-pointer hover:text-[#004AAD]">Become a Seller</li>
            )}

            {currentUser ? (
              <>
                {currentUser.isSeller && (
                  <>
                    <li>
                      <Link to="/myGigs" className="block hover:text-[#004AAD]">Gigs</Link>
                    </li>
                    <li>
                      <Link to="/add" className="block hover:text-[#004AAD]">Add New Gig</Link>
                    </li>
                  </>
                )}
                <li>
                  <Link to="/orders" className="block hover:text-[#004AAD]">Orders</Link>
                </li>
                <li>
                  <Link to="/messages" className="block hover:text-[#004AAD]">Messages</Link>
                </li>
                <li>
                  <Link to="/" className="block hover:text-[#004AAD]">Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li className="cursor-pointer hover:text-[#004AAD]">Sign in</li>
                <li>
                  <Link to="/register">
                    <button className="w-full mt-2 px-4 py-2 rounded-md border border-[#004AAD] bg-[#004AAD] text-white hover:bg-[#00337A] transition">
                      Join
                    </button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}

      {/* Bottom menu shown only on scroll or non-homepage */}
      {(active || pathname !== "/") && (
        <>
          <hr className="border-gray-300 w-full max-w-[1400px] mx-auto" />
          <nav className="max-w-[1400px] w-full px-4 flex flex-wrap justify-between gap-4 font-light text-gray-500 py-3 font-roboto select-none mx-auto">
            {categories.map((category) => (
              <Link key={category} to="/" className="whitespace-nowrap hover:text-[#004AAD]">
                {category}
              </Link>
            ))}
          </nav>
          <hr className="border-gray-300 w-full max-w-[1400px] mx-auto" />
        </>
      )}
    </header>
  );
};

export default Navbar;
