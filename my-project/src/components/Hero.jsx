import React from 'react'
import donaTion from '../../src/assets/donaTion.png'
import searchIcon from '../../src/assets/searchIcon.png'

const Hero = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 md:max-w-[600px] '>


            <div className='flex flex-col justify-start gap-4'>
              <p className='py-2 text-2xl text-[#20B486] font-medium'>WANT TO BE HAPPY SO HELP THEM</p>
              <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'>Access To <span className='text-[#20B486]'>5000+</span> people
                  for donating your foods with the help of <span className='text-[#20B486]'>300+</span>
                  Communities</h1>
              <p className='py-2 text-lg text-gray-600'>Actions speak louder than words! Give today</p>
              <form className='bg-white border max-w-[700px] py-4 input-bx-shadow rounded-md'>
                <input 
                  className='bg-white '
                  type="text"
                  placeholder='What do you want help?'
                />
                <button>
                    <searchIcon 
                        size={20}
                        className="icon"
                        style={{color:'#000'}} 

                    />

                </button>
              </form>
            </div>


            <img src={donaTion} className="md:order-last order-first"/>

        </div>



    </div>
  )
}

export default Hero