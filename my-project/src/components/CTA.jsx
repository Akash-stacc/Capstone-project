import React from 'react'
import cta from '../../src/assets/cta.png'
const CTA = () => {
  return (
    <div className='w-full bg-[#E9F8F3B2] py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 md:max-w-[600px] items-center '>
           
            <img src={cta} className="w-[650px] mx-auto" />

            <div>
              <h1 className='py-2 text-3xl font-semibold'>Join <span className='text-[#20B486]'>World's largest</span> helping platform today</h1>
              <p className='py-2 text-lg text-gray-600'>Start helping registering for free</p>
              <button className='max-[780px] w-full my-4 px-8 py-5 rounded-md bg-[#20B486] text-white font-bold '>Sign up for free</button>
            </div>


        </div>



    </div>
  )
}

export default CTA