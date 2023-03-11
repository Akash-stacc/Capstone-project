import React from 'react'
import Card from './Card'
import Slider from "react-slick";
import { courses } from './data/Courses';


const Meals = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };

  return (
    <div className='w-full bg-[#E9F8F3B2] py-24'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px] '>
            <Slider {...settings}>
                {courses.map(course=><Card course={course}  />) }
            
           
            </Slider>
            

        </div>
    </div>

  )
}

export default Meals