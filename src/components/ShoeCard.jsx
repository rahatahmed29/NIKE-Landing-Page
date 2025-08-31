import React from 'react'

function ShoeCard({imgURL,bigShoeImg, changeBigShoeImg}) {
    const handleClick=()=>{
        if (bigShoeImg!==imgURL.bigShoe) {
changeBigShoeImg(imgURL.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-lg ${
    bigShoeImg===imgURL.bigShoe?'border-coral-red':'bg-transparent'}
    cursor-pointer bg-card bg-center bg-cover`} 

onClick={handleClick}>

      <img src={imgURL.thumbnail} alt="shoe collection" className='object-contain ' />
    </div>
  )
}

export default ShoeCard
