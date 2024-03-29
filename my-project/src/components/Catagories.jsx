import React from 'react'
import CatagoryCard from './CatagoryCard'
import {BsVectorPen} from 'react-icons/bs'
import {TiHtml5} from 'react-icons/ti'


const Catagories = () => {
  return (
    <div className='w-full bg-[#F0FBF7] py-24'>
        <div className='md:max-w-[2080px] m-auto  md:max-w-[600px] '>
        <h1 className='md:leading-[72px] text-3xl font-bold'>Most<span className='text-[#20B486]'>Popular Categories</span></h1>
              <p className='text-lg text-gray-600'>Various versions have evolved over the years, sometimes by accident,</p>
                
                <div className='grid lg:grid-cols-4 grid-cols-2 py-12 gap-4'>
                    <CatagoryCard
                       icons={<BsVectorPen size={30} />}
                       title={'Design'}
                     />
                      <CatagoryCard
                       icons={<TiHtml5 size={30} />}
                       title={'Development'}
                     />

                    <CatagoryCard />
                    <CatagoryCard />    

                    <CatagoryCard />
                    <CatagoryCard />
                    <CatagoryCard />
                    <CatagoryCard />    

                    <CatagoryCard />
                    <CatagoryCard />
                    <CatagoryCard />
                    <CatagoryCard />    

                </div>



            </div>
      </div>
  )
}

export default Catagories