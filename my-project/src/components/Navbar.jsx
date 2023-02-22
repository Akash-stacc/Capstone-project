import React from 'react';
import lock  from '../../src/assets/lock.svg'
import hamburgerMenu from '../../src/assets/hamburgerMenu.svg'

const Navbar = () => {
  return (
    <div className='w-full h-[80px] bg-white border-b'>
        <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center'>
        
        
        <div className='hidden md:flex items-center '>
          <ul className='flex gap-4'>
            <li>Home</li>
            <li>Reach Us</li>
            <li>Doner</li>
            <li>Contacts</li>
            <li>Profile</li>
            <li>Volenteur</li>
          </ul>
        </div>
          <div className='hidden md:flex'>
              <button className='flex justify-between items-center bg-transparent px-6 gap-2'>
                <img src={lock}/>
                Login
                </button>
              <button className='px-8 py-3 rounded-md bg-[#20B486] text-white font-bold '>Sign up for free</button>
          </div>



          <div className='md:hidden'>
              <img src={hamburgerMenu} />
          </div>



        </div>
    
        

 </div>
  )
}

export default Navbar