import React from 'react'
import achievement from '../../src/assets/Achievement.png'


const Achievement = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 md:max-w-[600px] '>


            <div className='flex flex-col justify-start gap-4'>
              <h1 className='md:leading-[72px] py-2 text-3xl font-bold'>Our <span className='text-[#20B486]'>Achievements</span></h1>
              <p className='py-2 text-lg text-gray-600'>Actions speak louder than words! Give today</p>
                          </div>

              

                    <img src={achievement} className="m-auto md:order-last order-first"/>

                 
            

        </div>



    </div>
  )
}

export default Achievement