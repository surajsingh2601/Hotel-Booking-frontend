import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'



const MyBookings = () => {

    const [ bookings, setBookings] = useState(userBookingsDummyData);
    return (
        <div className='px-4 md:px-16 lg:px-24 xl:px-32 py-28 md:py-12 md:pt-32 md:pb-35'>

            <Title title='My Bookings' subTitle='Easily manage your past, current, and upcoming
             hotel reservations in one place. Plan your trips seamlessly with just a few clicks' align='left'/>

             <div className='max-w-6xl w-full mt-8 text-gray-800'>
                  <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-3
                   font-medium text-base'>
                      <div className='w-1/3'> Hotels </div>
                         <div className='w-1/3'> Date & Timings</div>
                           <div className='w-1/3'>Payments</div>
                  </div>
                  
                  
                  {
                bookings.map( ( booking) =>(

                    <div key={booking._id} className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t'>

                        {/* Hotels-Details */}

                        <div className='flex flex-col md:flex-row'>

                            <img src={booking.room.images[0]} alt=""  className=' min-md:w-44 object-cover shadow rounded '/>

                            <div className='flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4'>
                              <p className='font-playfair text-2xl'>  {booking.hotel.name}
                              <span className='font-inner text-sm'>({booking.room.roomType})</span>
                              </p>

                              {/* hotelicon & address */}
                                <div className='flex items-center gap-1 text-sm text-gray-500'>
                                           <img src={assets.locationIcon} alt="" className=' w-5 h-5' />  
                                          <span>  {booking.hotel.address}</span>
                                </div>

                                {/* guests */}
                                <div className='flex items-center gap-1 text-sm text-gray-500 '>
                                    <img src={assets.guestsIcon} alt="guestsicon" />
                                    <span> Guests: {booking.guests}</span>
                                </div>

                                {/* price */}
                                     <p className='text-base'>Total: ${booking.totalPrice}</p>

                            </div>
                        </div>

                        {/* Date & Time */}
                        <div className='flex flex-row md:items-center md:gap-12 gap-8 mt-3'>
                            <div>
                                <p className='text-md text-gray-600'> Check In: </p>
                                    <p> {new Date(booking.checkInDate).toDateString()}</p>
                        </div>


                        <div>

                          <p className='font-medium flex flex-col'> Check-Out</p> 
                          <p>{new Date(booking.checkOutDate).toDateString()}</p>

                        </div>

                            
                          
                        </div>

                        {/* Payments */}
                        <div className='flex flex-col items-start justify-center pt-3'>

                       
                        <div className='flex items-center gap-2'>
                            <div className={`w-3 h-3 rounded-full ${booking.isPaid ? 'bg-green-500' : 'bg-red-500'}`}></div>

                                  <p className={`text-sm ${booking.isPaid ? "text-green-500" : "text-red-500"}`}> 
                                    {booking.isPaid ? ' Paid ' : 'Unpaid'} </p>
                       </div>
                       { !booking.isPaid && (
                        <button className=' mt-4 py-1.5 px-4 text-xs text-gray-400 rounded-full hover:bg-gray-50 transition-all 
                         border border-gray-500 cursor-pointer'>Pay Now</button>
                       )}
                         </div>

                    </div>
                ) )
             }


                   </div>
                 </div>
    )
}


export default MyBookings