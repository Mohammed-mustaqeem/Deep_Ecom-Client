import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'


const Item = ({product}) => {

    const{navigate, currency}= useAppContext();
    const [hovered, setHovered] = useState(false);
    const [size, setSize] = useState(product.sizes[0]);

    const colors = ['#f2f2f2', '#f6f9f6', '#f6f9fe'];
  const bgColor =
    colors[(parseInt(product._id?.slice(-4) || "0", 16)) % colors.length];


  return (
    <div>
      <div className="overflow-hidden">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flexCenter h-[192px] w-full transition-all duration-300 rounded-xl group relative "
          style={{ backgroundColor: bgColor }}
        >
          
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
       {/* </div> */}
        <div className='absolute bottom-1 left-1 right-1 hidden group-hover:block'>
          <button
            onClick={() => {
              navigate(`/product/${product.id}`);
              scrollTo(0, 0);
            }}
            className="btn-secondary !py-2 !px-0 w-full !text-xs"
          >
            Quick View
          </button>
        </div>
          <p className="absolute  top-2 right-2 ring-2 ring-slate-900/10 px-5 bg-white/50 rounded-full">
            {product.type}
          </p>
         </div>
        <div className="pt-3 p-1">
          <div className='flexBetween'>

          <h5 className='h5 uppercase line-clamp-1'>{product.title}</h5>
          <p className='uppercase font-semibold'>
            {currency}
            {product.price[size]}.00
          </p>
        </div>
        <p>{product.description}</p>
          </div>
      </div>
    </div>
  );
}

export default Item
