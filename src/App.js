import React from 'react'
import Navbar from './components/Nav'
import Hero from './components/Hero';
import Gift from './components/Gift';
import Products from './components/Products';
import Start from './components/CTA';
import Blog from './components/Blog';
import Newsletter from './components/newsletter';
import Footer from './components/footer';
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Gift />
      <Products />
      <Start />
      <Blog />
      <Newsletter />
      <Footer />
    </>

  )
}

export default App