import React from 'react'
import { reviews } from '../constants'
import CustomerReview from '../components/CustomerReview'
import { star } from '../assets/icons'

function CustomerReviews() {
  return (
    <section className='flex flex-col   gap-14 max-container w-full '>
      <div className='flex flex-col items-center'>
        <h2 className='text-4xl font-palanquin font-bold mb-4 '>What Our <span className='text-coral-red'>Customer </span>Say</h2>
        <p className='text-lg font-montserrat leading-normal text-slate-gray text-center'>Here genuine stories from our satisfied customers about <br />their exceptional experiences with us.</p>
      </div>
      <div className='flex flex-col  items-center justify-center gap-32 lg:flex-row'>
      {reviews.map((review)=>(
         
          <CustomerReview {...review} star={star}/>
         
      ))}
      </div>
   
    </section>
  )
}

export default CustomerReviews
