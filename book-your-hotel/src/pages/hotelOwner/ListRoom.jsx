import React, { useState } from 'react'
import Title from '../../components/Title'
import { roomsDummyData } from '../../assets/assets'



const ListRoom = () => {

    const[rooms, setRooms] = useState(roomsDummyData);
    return (
    <div>
       
       <Title align='left' font='outfit' title="Room Listings"
        subTitle="View, edit, or manage all listed rooms. Keep the information 
        up-to-date to provide the best experience for users." />


        <p className='text-gray-500 mt-7'>Total Hotels</p>

        <div className='mt-4 w-full max-w-3xl max-h-80 text-left border border-gray-300 rounded-lg overflow-y-scroll'>
            <table className='w-full'>
                <thead className=' bg-gray-50'>
                    <tr>
                        <th className='py-3 px-4 text-gray-800 font-medium'>Name</th>
                        <th className='py-3 px-4 text-gray-800 max-sm:hidden font-medium'>Facility</th>
                        <th className='px-4 py-3 text-gray-800 text-center font-medium'>Price/ night</th>
                        <th className='px-4 py-3 text-gray-800 text-center font-medium'>Actions</th>
                    </tr>
                </thead>

                <tbody className='text-sm'>


                    { rooms.map( ( item , index) => (
                        <tr key={index}>
                            <td className='border-t border-gray-300 px-4 py-3 '> {item.roomType}</td>
                            <td className='border-t border-gray-300 px-4 py-3 max-sm:hidden'>{item.amenities.join(', ')}</td>
                            <td className='border-t border-gray-300 px-4 py-3 text-center'>$ {item.pricePerNight}</td>
                            <td className='border-t border-gray-300 px-4 py-3 text-sm text-red-500 text-center'>
                                <label htmlFor="" className='relative inline-flex items-center cursor-pointer gap-3'>
                                    <input type="checkbox" className='sr-only peer' checked={item.isAvailable}/>
                                             <div className='w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200'>
                                              </div>
                                              <span className='dot absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5'></span>
                                </label>
                            </td>
                        </tr>
                    ))}


                    
                </tbody>
            </table>
        </div>
     </div>
)}

export default ListRoom