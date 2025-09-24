import React from "react";
import hero from "../assets/hero-section.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-24 py-10 lg:py-2">
        <div
          className="bg-[#E5F6F6] rounded-2xl flex flex-col lg:flex-row items-center min-h-[648px] relative overflow-hidden"
          style={{
            backgroundImage: `url(${hero})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Left Content */}
          <div className="w-full p-6 sm:p-10 lg:p-5 bg-opacity-80 rounded-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl text-gray-900 leading-snug">
              Enhance Your{" "}
              <span className="text-[#41334E] font-bold">Look</span> With <br />
              <span className="text-[#41334E] font-bold">Glam</span> Essentials
            </h1>

            <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-3xl">
              Discover premium beauty with our cosmetic collection, crafted to
              enhance your natural glow, boost confidence, and deliver flawless
              elegance every day with trusted, affordable products.
            </p>

           
            {/* Button */}
            <Link
              to="/collection"
              className="mt-8 sm:mt-10 lg:w-fit flex items-center justify-center sm:justify-start gap-3 
             bg-[#41334E] text-white px-4 py-3 rounded-full font-bold text-xs sm:text-sm 
             hover:bg-[#472f47] transition-all w-full sm:w-auto group"
            >
              Check Our Modern Collection
              <span
                className="bg-white text-[#41334E] p-2 rounded-full flex items-center justify-center 
               transform transition-transform duration-300 group-hover:translate-x-1.5"
              >
                <FaArrowRight />
              </span>
            </Link>

            {/* Small Product Card */}
            <div className="mt-10 sm:mt-20 bg-white rounded-xl shadow-md p-4 w-full sm:w-[249px] h-auto sm:h-[210.7px] flex flex-col justify-between">
              {/* Product Image Container */}
              <div className="w-full h-[130px] flex justify-center items-center rounded-lg overflow-hidden">
                <img
                  src={hero} // Replace with actual product image
                  alt="Lip Serum"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Text */}
              <div className="mt-2">
                <p className="text-xs sm:text-sm text-gray-400 leading-tight">
                  <span className="font-semibold text-gray-600">UNLOCK</span>{" "}
                  your best look, one click at a time. Your style upgrade starts
                  here
                </p>
              </div>
            </div>
          </div>

          {/* Right Side (empty since background handles image) */}
          <div className="hidden lg:block w-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
