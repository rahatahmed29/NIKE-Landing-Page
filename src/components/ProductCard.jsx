import React from 'react'
import { star } from '../assets/icons'

function ProductCard({product}) {
  return (
    <div >
      
        <img src={product.imgURL} alt="shoe" height={280} width={280} className='' />
      
      <div className='flex gap-2.5 mt-8 '>
        <img src={star} alt="rating" height={24} width={24} />
        <p className='font-montserrat text-slate-gray'>(4.5)</p>
      </div>
      <p className='mt-2 font-palanquin font-semibold text-2xl leading-normal'>{product.name}</p>
      <p className='font-montserrat font-semibold text-coral-red mt-2 leading-normal text-2xl'>{product.price}</p>
    </div>
  )
}

export default ProductCard
