import React from 'react'
import companyLogo1 from '../../src/assets/companyLogo1.png'
import companyLogo2 from '../../src/assets/companyLogo2.png'
import companyLogo3 from '../../src/assets/companyLogo3.png'
import companyLogo4 from '../../src/assets/companyLogo4.png'

const Companies = () => {
  return (
    <div className='w-full bg-white py-[50px]'>
        <div className='md:max-w-[1480px] m-auto  md:max-w-[600px] '>
            <h1 className='text-center text-2xl font-bold text-[#536E96]'>Trusted by over 25,000 people around the world.</h1>
            <p className='text-center text-[#536E96] text-xl'>Leading companies also help those people which is help there mind fresh.</p>
             <div className='flex justify-center py-8 md:gap-8'>
                <img src={companyLogo1}  />
                <img src={companyLogo2}  />
                <img src={companyLogo3}  />
                <img src={companyLogo4}  />
                </div>   
        
        </div>
    </div>
  )
}

export default Companies