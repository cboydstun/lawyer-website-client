import React from 'react'
import lawOfficeImg from "../assets/lawoffice.jpg"
const HeroSection = () => {
  return (
    <div className='hero-container flex justify-center gap-5'>
      <div>
        <img src={lawOfficeImg} alt="Law Firm Hero Image"/>
       
      </div>
      <h2>Hero Section of Website</h2>
    </div>
  )
}

export default HeroSection