import React from 'react'
import sofa from "../assets/sofa2.png";

const Features = () => {
  return (
    <section className='max-padd-container my-10 xl:my-22'>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-10 gap-y-12 items-center rounded-xl">
        <div>
          <img
            src={sofa}
            alt="Sofa"
            height={77}
            width={222}
            className="rounded-full"
          />
        </div>
        <div>
          <img
            src={sofa}
            alt="Sofa"
            height={77}
            width={222}
            className="rounded-full"
          />
        </div>
        <div className="p-4">
          <h4 className="h4 capitalize">Quality Product</h4>
          <p>long-lasting and durable</p>
        </div>
        <div className="p-4">
          <h4 className="h4 capitalize">Fast Delivery</h4>
          <p>long-lasting and durable</p>
        </div>
        <div className="p-4">
          <h4 className="h4 capitalize">Secure Payment</h4>
          <p>long-lasting and durable</p>
        </div>
      </div>
    </section>
  );
}

export default Features
