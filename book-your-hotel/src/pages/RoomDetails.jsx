import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';
import StarRating from '../components/StartRating';



const RoomDetails = () => {

const {id} = useParams()
const [room, setRoom] = useState(null)
const [mainImage, setMainImage] = useState(null)


useEffect (()=>{
    const room = roomsDummyData.find(room => room._id === id)
room && setRoom(room)
room && setMainImage(room.images[3])

}, [])
    return room && (                                 //here we use room && for when the room data is available than onli this div will be mounted
        <div className='px-4 md:px-16 py-28 md:py-35 lg:px-24 xl:px-32 ' >

            {/* RoomDetails */}

            <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
            
            <h1 className='font-playfair text-3xl md:text-4xl'>{room.hotel.name} <span className='font-inner text-sm'>({room.roomType})</span></h1>
            <p className='bg-orange-500 font-inner text-xs text-white px-3 py-1.5 rounded-full'>20% OFF</p>
            
            </div>
            
            {/* RATING */}

            <div className='flex items-center gap-1 mt-2'>
                <StarRating />
                <p className='ml-2'>200+ reviews</p>
            </div>

            {/* ROOM-ADDRESS */}
            <div className='flex items-center text-gray-500 mt-2 gap-1'>
                <img src={assets.locationIcon} alt="location-icon" />
               <span> {room.hotel.address} </span>
            </div>


            {/* Room-Images */}

            <div className='flex flex-col lg:flex-row mt-6  gap-6'>

                <div className='lg:w-1/2 w-full'>

                    <img src={mainImage} alt="Room Image" className='w-full shadow-md object-cover rounded-xl' />
                </div>

                <div className='grid grid-cols-2 gap-4 items-center lg:w-1/2 w-full'>
                    { room?.images.length > 1 && room.images.map( (image, index) =>
                        <img onClick={() =>setMainImage (image)} src={image} alt="Room Image" className={`w-full rounded-xl shadow-md object-cover cursor-pointer
                    ${mainImage === image && 'outline-3 outline-orange-500'}`} />

                    // ${mainImage === image && 'outline-3 outline-orange-500'} this template literals code is used for outline border
                    ) }
                </div>
            </div>

            <div className='flex flex-col md:flex-row md:justify-between gap-4 mt-10'>

            

                <div className='flex flex-col' >
                    <h1 className='font-playfair text-3xl md:text-4xl'> Experience Luxury Like Never Before </h1> 
                

                {/* amenities */}

                <div className='flex flex-wrap items-center gap-4 mt-3 mb-6 '>
                    {room.amenities.map( (item, index) => (

                         <div key={index} className='flex items-center gap-2 bg-gray-100 rounded-lg py-2 px-3 '>
                            <img src={facilityIcons[item]} alt="[item]" className='w-5 h-5' />
                            <p className='text-xs'>{item}</p>
                            

                    </div> 
                ) )}
                </div>
                </div>
                {/* roopricepernight */}
                <p className='font-semibold text-xl'> ${room.pricePerNight} /night</p>
            </div>


            {/* CHECK-IN CHECK-OUT-FORM */}


            <form className='flex flex-col md:flex-row items-start md:items-center  justify-between 
             bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>

                <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-1 md:gap-8 text-gray-500'>
                    
                <div className='flex flex-col' >

                    <label htmlFor="checkInDate" className='font-medium'>Check-In</label>
                    <input type="date" id="checkInDate" placeholder='Check-In'
                     className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5
                      outline-none' required />

                </div>

                <div className='w-px h-15 bg-gray-300/70'></div>

                <div className='flex flex-col'>

                    <label htmlFor="checkOutDate" className='font-medium'> Check-Out</label>
                    <input type="date" id='checkOutDate' placeholder='Check-Iut' 
                    className='w-full px-3 py-2 mt-1.5 rounded border border-gray-300
                     outline-none' required/>
                </div>

                {/* verticle-line */}

                <div className='w-px h-15 bg-gray-300/70 max:md-hidden'></div>

                <div className='flex flex-col'>

                    <label htmlFor="Guests" className='font-medium'>Guests</label>
                    <input min={1} max={4} type="number"   id="guests" placeholder='0' className='max-w-20 px-3 py-2 mt-1.5 rounded border border-gray-300 outline-none'  required />
                </div>
                
                </div>


                <button type='submit' className='rounded-md bg-blue-400 hover:bg-primary-dull active:scale-95 transition-all
                 max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-white text-base cursor-pointer '>Check Availability</button>
            </form>

            {/* COMMON-SPECIFICATION */}

            <div className='space-y-4 mt-25'>

                {
                    roomCommonData.map( (specification, index) => (
                        
                        <div key={index} className='flex items-start gap-2'>

                            
                            <img src={specification.icon} alt="roomicon" />
                            <div>
                                <h1 className='text-base'>{specification.title}</h1>
                            <p className='text-gray-500'>{specification.description}</p> 
                            </div>


                        </div>
                     
                     )) }
            </div>

            <div className='my-15 text-gray-500 max-w-3xl border-y border-gray-300 py-10'>
                <p>
                    Guests will be allocated on the ground floor according to availability. You get a comfortable Two
                     bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot
                      please mark the number of guests to get the exact price for groups. The Guests will be
                       allocated ground floor according to availability. You get the comfortable two bedroom
                        apartment that has a true city feeling.
                </p>
            </div>

            {/* HOSTED-BY */}

   <div className='flex  flex-col items-start gap-4' >

            <div className='flex gap-4'>
                <img src={room.hotel.owner.image} alt="Host" className='h-14 w-14 md:h-18 md:w-18 rounded-full' />

                   <div className='flex flex-col gap-2 '>
                          <p className='md:text-xl text-lg'>
                               Hosted By {room.hotel.name}            
                          </p>
                               <div className='flex items-center mt-1'>
                                   <StarRating /> 
                                   <p className='ml-2'>200+ reviews</p>
                             </div>
                   </div> 
            </div>
            <div>
                <button className=' bg-blue-500 rounded px-6 py-2.5 mt-2  text-white '> Contact Now </button>
            </div>

            

</div>


        </div>

        
    )

}


export default RoomDetails