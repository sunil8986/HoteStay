import React from 'react'
import Hero from './components/Hero'
import FeaturedHotel from './components/FeaturedHotel.jsx'
import ExclusiveOffers from './components/ExclusiveOffers.jsx'
import Testimonials from './components/Testimonials.jsx'
import Subscribe from './components/Subscribe.jsx'
import Faq from '../../components/Faq.jsx'

const Home = () => {
  return (
    <>
        <Hero />
        <FeaturedHotel />
        <ExclusiveOffers />
        <Faq />
        <Testimonials />
        <Subscribe />
    </>
  )
}

export default Home