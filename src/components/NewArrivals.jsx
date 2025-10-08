import React, { useEffect, useState } from "react";
import Title from "./Title";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useAppContext } from "../context/AppContext";
import Item from "./Item";


const NewArrivals = () => {

  const { product } = useAppContext();
  const [newArrival, setNewArrival] = useState([]);

  useEffect(() => {
    const data = product.filter((item) => item.inStock).slice(0, 10);
    setNewArrival(data);
  }, [product]);

  return (
    <section className="max-padd-container mt-28">
      <Title
        title1="New"
        title2="Arrivals"
        titleStyle="pb-10"
        // para="Check out our latest collection..."  // ← add if needed
        para={
          "Discover our latest collection of modern furniture and home decor, designed to elevate your living space with style and comfort."
        }
      />
      {
        <Swiper
          spaceBetween={30}
          // centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            555: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            1022: {
              slidesPerView: 3,
            },
            1350: {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay]}
          className="min-h-[399px]"
        >
         {newArrival.map((product) => (
           <SwiperSlide key={product.id}>
            <Item product={product} />

           </SwiperSlide>
         ))}
        </Swiper>
      }
    </section>
  );
};

export default NewArrivals;
