import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = ({containerStyle}) => {

     const [activeRoute, setActiveRoute] = useState("Home");
    const routes = [
      { name: "Home", path: "/" },
      { name: "Collection", path: "/collection" },
      { name: "Blog", path: "/blog" },
      { name: "Contact", path: "/contact" },
    ];
  return (
    <>
      <nav className={`${containerStyle} `}>
        {routes.map((route) => (
          <NavLink
            key={route.name}
            to={route.path}
            onClick={() => setActiveRoute(route.name)}
            className={`px-5 py-2.5 text-sm font-medium  rounded-full transition-all duration-200 ease-in-out ${
              activeRoute === route.name
                ? "bg-[#41334E] text-white"
                : "text-black hover:text-[#000000] hover:bg-gray-200"
            }`}
          >
            {route.name}
          </NavLink>
        ))}
      </nav>
    </>
  );
}

export default Navbar
