import React from 'react'
import { truckFast } from '../assets/icons'
import ServiceCard from '../components/ServiceCard'
import { services } from '../constants'
 
function Services() {
  return (
    <section className='flex flex-wrap  max-sm:flex-col gap-9 justify-center items-center max-container mt-14'>
     {services.map((serviceObj)=>(
      <ServiceCard key={serviceObj.label} {...serviceObj} />
     ))}
    </section>
  )
}

export default Services
