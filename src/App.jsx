import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Collection from './pages/Collection'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
