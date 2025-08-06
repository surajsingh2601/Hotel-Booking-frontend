import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'
import StarRating from './StartRating'


const Testimonials = () => {
    return (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20  pb-30'>

            {/* <div className='flex flex-col md:flex-row justify-center items-center font-playfair w-full '> */}
                      <Title title={"What Our Guests Say"} subTitle={"Discover why discerning travelers choose QuickStay for their luxury accommodations around the world."} />
              {/* </div> */}

              <div className='flex flex-col md:flex-row gap-6 justify-center items-center mt-20 '>

              {
                 testimonials.map( (testimonial, index) => (

                <div  className="bg-white p-6 rounded-xl shadow ">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt="" />
                            <div>
                                <p className="font-playfair text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.address}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            <StarRating />
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4">"{testimonial.review}"</p>
                    </div>
                 )) }

              </div>
              </div>

       
    )
}


export default Testimonials