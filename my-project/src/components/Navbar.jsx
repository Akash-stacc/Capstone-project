import React from 'react';
//import {logo} from '../assets'

const Navbar = () => {
  return (
    <div className='w-full h-[80px] bg-white border-b'>
        <div className='max-w-[1480px] m-auto w-full h-full flex justify-between items-center'>
        
        
        <div className='flex items-center'>
          <ul className='flex gap-4'>
            <li>Home</li>
            <li>Reach Us</li>
            <li>Doner</li>
            <li>Contacts</li>
            <li>Profile</li>
            <li>Volenteur</li>
          </ul>
        </div>
          <div>
              <button>Login</button>
              <button className='px-8 py-3 rounded-md bg-[#20B486]'>Sign up for free</button>
          </div>


        </div>
    
        

 </div>
  )
}

export default Navbar