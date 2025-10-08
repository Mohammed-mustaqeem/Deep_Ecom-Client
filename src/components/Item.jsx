import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'


const Item = ({product}) => {

    const{navigate, currency}= useAppContext();
    const [hovered, setHovered] = useState(false);
    const [size, setSize] = useState(product.sizes[0]);



  return (
    <div>
      <div className="overflow-hidden">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flexCenter h-[120px] w-full transition-all duration-300 rounded-xl group relative "
        />
        <img
          src={
            product.images.length > 1 && hovered
              ? product.images[1]
              : product.images[0]
          }
          alt=""
          height={144}
          width={144}
        />

        <div>
          <button
            onClick={() => {
              navigate(`/product/${product.id}`);
              scrollTo(0, 0);
            }}
            className="btn-secondary !py-2 !px-0 w-full !text-xs "
          >
            Quick View
          </button>
          <p className="absolute  top-2 right-2 ring-2 ring-slate-900/10 px-5 bg-white/50 rounded-full">
            {product.type}
          </p>
        </div>
        <div className="pt-3 p-1">
          <h5>{product.title}</h5>
          <p>
            {currency}
            {product.price[size]}.00
          </p>
        </div>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default Item
