import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'



const Dashboard = () => {

    const [dashboardData, setDashboardData] = useState(dashboardDummyData);
    return (

        <div>
            <Title align="left" font='outfit' title="Dashboard" subTitle="Monitor your room listings, track bookings and analyze revenue—all
             in one place. Stay updated with real-time insights to ensure smooth operations."  />


             <div className='flex gap-4 my-8'>
                {/* ----------total-bookings------- */}

                <div className='bg-blue-50 border border-blue-100  rounded flex p-4 pr-8 '>
                <img src={assets.totalBookingIcon} alt="total-bookings-icons" className='max-sm:hidden h-10' />
                
                <div className='flex flex-col sm:ml-4 font-medium'>

                <p className='text-blue-500 text-lg'>Total Bookings</p>
                <p className='text-gray-500'>{dashboardData.totalBookings}</p>


                </div>

                </div>

                {/* -----total-revenue--- */}
                
                    <div className='border border-blue-100 bg-blue-50 rounded flex p-4 pr-8'>
                                 <img src={assets.totalRevenueIcon} alt="total-revenue-icon" className='max-sm:hidden h-10'/>

                                     <div className='flex flex-col sm:ml-4 font-medium'>

                                                   <p className='text-blue-500 text-lg'>Total Revenue</p>
                                                <p className='text-gray-500'>$ {dashboardData.totalBookings}</p>
                                     </div>
                    </div>

                </div>

                {/*-----------Recent-bookings------------ */}

                    

                        <h2 className=' font-medium text-xl text-gray-600 mb-5'>Recent Bookings</h2>
                        
                        <div className='w-full max-w-3xl max-h-80 text-left border  border-gray-300 rounded-lg overflow-y-scroll'>

                            <table className='w-full'>
                                <thead className='bg-gray-50'>
                                    <tr>
                                        <th className='px-4 py-3 text-gray-800 font-medium'>User Name</th>
                                        <th className='px-4 py-3 text-gray-800 font-medium max:sm-hidden'>Room Name</th>
                                        <th className='px-4 pyy-3 text-gray-800 font-medium text-center'>Total Amount</th>
                                        <th className='px-4 py-3 text-gray-800 font-medium text-center'>Payment Status</th>
                                    </tr>
                                </thead>

                                <tbody className='text-sm'>

                                   { dashboardData.bookings.map((recentbooking, index) => (
                                   
    <tr key={index}>      
                <td className='px-4 py-3 text-gray-700 border-t border-gray-300'>{recentbooking.user.username}</td>
                <td className='px-4 py-3 text-gray-700 border-t border-gray-300 max:sm-hidden'>{recentbooking.room.roomType}</td>
                <td className='px-4 py-3 text-gray-700 text-center border-t border-gray-300'> ${recentbooking.totalPrice}</td>

           <td className='px-4 py-3 text-gray-700 text-center border-t border-gray-300 '>
                 <button className={`px-3 py-1 text-xm rounded-full mx-auto ${ recentbooking.isPaid ? 'bg-green-200 text-green-600' : 'bg-yellow-200 text-yellow-600' }`}>

                 {recentbooking.isPaid ? "completed" : "Pending"}</button></td> 

                
    </tr>
                                   
                                   ))} 
                                </tbody>
                            </table>
                    </div>
             </div>
        

        
    )
}


export default Dashboard