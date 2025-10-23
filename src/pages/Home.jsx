import React from "react";
import Hero from "../components/Hero";
import Features from "../context/Features";
import NewArrivals from "../components/NewArrivals";
import PopularProduct from "../components/PopularProduct";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <NewArrivals />
      <PopularProduct />
      <div className="hidden sm:block  max-padd-container mt-28 bg-[url('/src/assets/banner.jpg')] bg-cover bg-center bg-no-repeat h-[300px]" />
      <Testimonial />
    </div>
  );
};

export default Home;
