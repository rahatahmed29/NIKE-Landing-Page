import React from 'react'

function CustomerReview({imgURL,customerName,rating,feedback,star}) {
  return (
   <div className='flex flex-col gap-4 items-center w-[25%] '>
     <div>
      <img src={imgURL} alt="customer" height={100}
      width={100} className='rounded-full' />
    </div>
    <p className='text-lg  text-slate-gray
    font-montserrat text-center min-w-[200px]'>{feedback}</p>
    <div className='flex gap-3 items-center '>
        <img src={star} alt="rating" width={24}height={24} />
        <p className='font-montserrat text-lg text-slate-gray'>({rating})</p>
    </div>
    <h2 className='text-2xl text-center font-montserrat font-bold'>{customerName}</h2>
   </div>

  )
}

export default CustomerReview
