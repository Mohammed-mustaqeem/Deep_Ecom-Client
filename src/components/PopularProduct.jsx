import React, { useEffect, useState } from "react";
import Title from "./Title";
import Item from "./Item";
import { useAppContext } from "../context/AppContext";
const PopularProduct = () => {

  const [popularProducts, setPopularProducts] = useState([]);
  const { product } = useAppContext();

  useEffect(() => {
    const data = product.filter((item) => item.popular && item.inStock);
    setPopularProducts(data.slice(0, 4));
  }, [product]);


  return (
    <section className="max-padd-container mt-28">
      <Title title1={"Popular"} title2={"Products"} titleStyles={"pb-10"} />
      {/* Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {popularProducts.map((product) => (
          <div key={product._id}>
            <Item product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
