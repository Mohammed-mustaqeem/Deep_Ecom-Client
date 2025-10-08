import React from 'react'
import Hero from '../components/Hero'
import Features from '../context/Features'
import NewArrivals from '../components/NewArrivals'
import PopularProduct from '../components/PopularProduct'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <NewArrivals/>
      {/* <PopularProduct/> */}

    </div>
  )
}

export default Home
