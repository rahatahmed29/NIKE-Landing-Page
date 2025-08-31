import React from 'react'
import Button from '../components/Button'
function Subscribe() {
  return (
    <section id='contact-us' className='flex justify-around items-center max-container  max-lg:flex-col gap-10 max-lg:items-start'>
      <div>
        <h2 className='text-4xl font-palanquin font-bold '>Sign Up for <span className='text-coral-red '>Updates <br /></span>
        & Newslatter
        </h2>
      </div>
      <div className='flex  items-center rounded-full w-full lg:max-w-[40%]  gap-5 p-2 max-sm:flex-col sm:border sm:border-slate-gray'>
        <input type="text" className='input max-sm:text-center  border-none ' placeholder='rahatmohammad104@gmail.com'/>
        <div className='flex max-sm:justify-center items-center max-sm:w-full'>
          <Button label='Sign Up' fullWidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe
