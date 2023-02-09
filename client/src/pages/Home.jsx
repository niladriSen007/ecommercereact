import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Trusted from '../components/Trusted'

const Home = () => {

  const data = {
    name:"Niladri's Store"
  }
  return (
    <div>
      <Hero myData={data}/>
      <FeaturedProducts />
      <Services />
      <Trusted />
    </div>
  )
}

export default Home