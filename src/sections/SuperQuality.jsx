import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'
function SuperQuality() {
  return (
    <section id='about-us' className='w-full flex max-lg:flex-col items-center justify-between gap-10 max-container mt-14'>
      <div className='flex flex-col flex-1 '>
        <h1 className='font-palanquin font-bold text-4xl    mb-6'>We Provide You <span className='text-coral-red '>Super <br />
        Quality</span> Shoes
        </h1>
        <p className='font-montserrat text-lg text-slate-gray mb-6 leading-7 lg:max-w-lg'>Ensuring premium comfort and style, our meticulasly crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance</p>
        <p className='font-montserrat text-slate-gray text-lg leading-7 lg:max-w-lg mb-14'>Our dedication to detail and excellaence ensures your satusfaction</p>
        <div className='flex max-lg:justify-center '><Button label='View Details'/></div>
      </div>
      <div className='flex flex-1 object-contain'>
        <img src={shoe8} alt="shoe8" width={570} height={522} />
      </div>
    </section>
  )
}

export default SuperQuality
