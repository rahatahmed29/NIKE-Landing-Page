import React from 'react'
import { arrowRight } from '../assets/icons'

function Button({label,iconURL}) {
  return (

    <button className='flex items-center justify-center gap-4 border border-coral-red bg-coral-red rounded-full  px-7 py-4 text-white text-lg leading-none font-montserrat '>
        {label}
        {iconURL&& <img src={iconURL} alt="" className='w-5 h-5 rounded-full '  />}
    </button>
 
  )
}

export default Button
