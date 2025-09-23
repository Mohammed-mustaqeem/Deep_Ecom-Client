import React from 'react'
import hero from '../assets/hero-section.jpg'
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section className="w-full ">
        <div className=" mx-auto px-6 lg:px-25 py-10 lg:py-2">
          <div className="bg-[#E5F6F6] rounded-2xl grid grid-cols-1 lg:grid-cols-2  items-center min-h-[648px]">
            {/* Left Content */}
            <div className="p lg:p-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
                Enhance Your <span className="text-[#5A3D5C]">Look</span> With{" "}
                <br />
                <span className="text-[#5A3D5C]">Glam</span> Essentials
              </h1>
              <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-lg">
                Discover premium beauty with our cosmetic collection, crafted to
                enhance your natural glow, boost confidence, and deliver
                flawless elegance every day with trusted, affordable products.
              </p>

              {/* Button */}
              <button className="mt-6 flex items-center gap-3 bg-[#5A3D5C] text-white px-6 py-3 rounded-full font-medium hover:bg-[#472f47] transition-all">
                Check Our Modern Collection
                <span className="bg-white text-[#5A3D5C] p-1 rounded-full">
                  <FaArrowRight />
                </span>
              </button>

              {/* Small Product Card */}
              <div className="mt-8 bg-white rounded-xl shadow-sm p-4 flex items-center gap-4 max-w-xs">
                <img
                  src={hero}
                  alt="Product"
                  className="w-20 h-24 object-contain rounded-md"
                />
                <p className="text-sm text-gray-700">
                  <span className="font-bold">UNLOCK</span> your best look, one
                  click at a time. Your style upgrade starts here, shop today!
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center items-center">
              <img
                src={hero}
                alt="Cosmetic Products"
                className="min-w-[648px] min-h-[648px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero
