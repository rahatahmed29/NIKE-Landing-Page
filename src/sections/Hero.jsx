import React, { useState } from 'react'
import { arrowRight } from '../assets/icons'
import Button from '../components/Button'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'

function Hero() {
  const[bigShoeImg,setbigShoeImg]=useState(bigShoe1)
  return (
    <section className='w-full flex flex-col xl:flex-row min-h-screen gap-8 max-container'>
      <div className='pt-28 max-xl:padding-x flex  flex-col items-start justify-center relative w-full xl:w-2/5'>
        <p className='text-lg font-montserrat text-coral-red '>Our Summer Collection</p>
        <h1 className='mt-10 text-8xl max-sm:text-[72px] max-sm:leading[22px] font-palanquin font-bold'>
          <span className='xl:bg-white relative z-10 xl:whitespace-nowrap'>The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='text-slate-gray font-montserrat mt-6 mb-14 text-lg leading-8 sm:max-w-sm'>Discover stylishNike arrivals, quality comfort, and innovation for your active life</p>
       <div className=' max-sm:m-auto max-sm:mb-10'> <Button label='Shop Now' iconURL={arrowRight}/></div>
        <div className='flex flex-wrap justify-start items-start mt-20 gap-16 max-sm:m-auto max-sm:justify-center '> 
          
            {statistics.map((stat)=>(
            <div>
              <p className='font-palanquin font-bold text-4xl '>
                {stat.value}
              </p>
              <p className='font-montserrat text-slate-gray leading-7'>{stat.label}</p>
            </div>
            ))}
          
        </div>
      </div>
      <div className='relative  flex flex-1 items-center justify-center bg-hero bg-center bg-primary bg-cover max-xl:py-40 '>
        <img src={bigShoeImg} alt="shoe collection" width={610} height={500} className='object-contain' />
        <div className='flex flex-1 gap-4 absolute -bottom-[5%]'>
          {
            shoes.map((shoe)=>(
              <ShoeCard key={shoe} imgURL={shoe} bigShoeImg={bigShoeImg} 
              changeBigShoeImg={(cshoe)=>{
                setbigShoeImg(cshoe)
              }}
              />

            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Hero
