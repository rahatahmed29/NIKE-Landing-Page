import React from 'react'

function ServiceCard({imgURL,label,subtext}) {
  return (
    <div className=' flex-1   p-7 shadow-3xl rounded-[20px] w-full sm:w-[350px] sm:min-w-[350px]  '>
      <div className=' flex justify-center items-center bg-coral-red rounded-full h-11 w-11 mb-6' >
        <img src={imgURL} alt="truck"  />
      </div>
      <h3 className='font-palanquin font-bold text-3xl mb-3'>{label}</h3>
      <p className='font-montserrat text-slate-gray  leading-normal break-words text-lg'>{subtext}</p>
    </div>
  )
}

export default ServiceCard
