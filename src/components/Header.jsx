import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { FaCartPlus, FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useClerk, UserButton } from "@clerk/clerk-react";
import { useAppContext } from "../context/AppContext";

/**
 * Header.jsx
 * - Preserves your desktop design (Navbar usage unchanged)
 * - Fixes mobile routing, accessibility and responsive issues
 * - Mobile drawer slides from the right, overlay uses #41334E
 */

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const { openSignIn } = useClerk();
  const { navigate, user } = useAppContext();

  const Navroutes = [
    { name: "Home", path: "/" },
    { name: "Collection", path: "/collection" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  // prevent body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isMenuOpen]);

  const OrderIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
        <path
          d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );

  return (
    <>
      <header className="sticky top-1 z-50 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 px-4 md:px-16">
            {/* Logo */}
            <NavLink to="/" className="font-bold flex items-end gap-2">
              <img src={logo} alt="Deep Curtains Logo" className="h-16" />
              <span className="text-gray-800 mb-2">curtains</span>
            </NavLink>

            {/* Desktop Navigation (unchanged) */}
            <div>
              <Navbar
                containerStyle={`hidden md:flex items-center space-x-8 bg-gray-200 rounded-full p-1`}
              />
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-3">
              {/* Cart Icon */}
              <button
                type="button"
                aria-label="Open cart"
                className="relative p-2 rounded-full hover:bg-gray-100 transition"
              >
                <FaCartPlus className="h-6 w-6 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Login Button (visible on all sizes; text hidden on very small screens) */}
              {user ? (
                <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: {
                      width: 40,
                      height: 40,
                    }
                  }
                }}
                >
                  <UserButton.MenuItems>
                    <UserButton.Action
                      label="My Orders"
                      labelIcon={<OrderIcon />}
                      onClick={() => navigate("/my-orders")}
                    />
                  </UserButton.MenuItems>
                </UserButton>
              ) : (
                <NavLink
                  to="/login"
                  onClick={openSignIn}
                  className="flex items-center gap-2 px-4 py-2 bg-[#41334E] text-white rounded-full hover:bg-[#2e2538] transition-colors duration-200 text-sm font-medium"
                >
                  <FaUser className="h-4 w-4" />
                  <span className="hidden sm:inline">Login</span>
                </NavLink>
              )}

              {/* Hamburger (mobile only) */}
              <button
                onClick={() => setIsMenuOpen((p) => !p)}
                className="md:hidden text-gray-700 focus:outline-none p-2 rounded-full hover:bg-gray-100 transition"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Overlay (brand color #41334E) */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-opacity-60 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}

        {/* Mobile Menu (Slide from Right) */}
        <aside
          className={`fixed inset-y-0 right-0 z-50 w-64 max-w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="p-5 flex flex-col h-full">
            {/* Header inside drawer */}
            <div className="flex items-center justify-between">
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <img src={logo} alt="Deep Curtains Logo" className="h-16" />
                <span className="text-gray-800 font-semibold">curtains</span>
              </NavLink>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-2">
              {Navroutes.map((route) => (
                <NavLink
                  key={route.name}
                  to={route.path}
                  end={route.path === "/"}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `w-full text-left px-5 py-3 rounded-full text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#41334E] text-white"
                        : "text-gray-700 hover:bg-gray-200 hover:text-[#41334E]"
                    }`
                  }
                >
                  {route.name}
                </NavLink>
              ))}
            </nav>

            <div className="mt-auto text-center text-xs text-gray-500">
              © {new Date().getFullYear()} Deep Curtains
            </div>
          </div>
        </aside>
      </header>
    </>
  );
};

export default Header;
