import React, { useState } from 'react'
import { assets, facilityIcons, roomsDummyData, } from '../assets/assets'
import { useNavigate } from 'react-router'
import StarRating from '../components/StartRating';


const CheckBox = ( {label, selected = false, onChange = ()=>{} }) => {

    const handleChange = e=> {}
    return (
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
            <input type="checkbox" checked={selected} onChange={(e)=> onchange(e.target.checked, label)} />
            <span className='font-light select-none'> {label} </span>
        </label>
    )

}

const RadioButton = ({ label, selected = false, onChange = () => { } })=> {
    return (
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
            <input type="radio" name='sortOption' checked={selected} onChange={() => onChange(label)} />
            <span className='font-light selected-none'>{label}</span>
        </label>
    )
}



const AllRoom = () => {
   const navigate = useNavigate(); //to open new-page
   const [openFilters, setOpenFilters] = useState(false);
   
   const roomTypes = [
    "single Bed",
    "Double Bed",
    "Luxury Room",
    "Family Suite"
   ];

   const priceRange =[
    "0 To 500",
    " 500 To 1000",
    "1000 To 1500",
    "1500 To 2000",
    "2000 To 3000",
     "3000 To 4000",
   ];

   const sortByprice =[
    "Price Low to High",
    "Price High to Low",
    "Newest First"
   ];


    return (
        <div className='flex flex-col-reverse lg:flex-row justify-between items-start pt-25 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        
        <div >

            <div className='flex flex-col items-start text-left'>
                <h1 className='font-playfair text-4xl md:text-[40px]'>
                    Hotel Rooms
                </h1>
                <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>
                    Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
                </p>
            </div>

            {
                roomsDummyData.map( (room) => (

                    <div key={room._id} className='py-10 flex flex-col md:flex-row items-start gap-8 border-b border-gray-300 last:pb-30 last:border-0' >
                        <img onClick={ () => {navigate(`/rooms/${room._id}`); scrollTo(0, 0) } } src={room.images[0]} alt="hotel-img" title='view room details'
                        className='max-h-65 md:w-1/2  rounded-xl shadow-lg object-cover cursor-pointer' />

                        <div className='md:w-1/2 flex flex-col gap-2'>
                            <p className='text-gray-500'> {room.hotel.city}</p>

                            <p onClick={ () => {navigate(`/rooms/${room._id}`); scrollTo(0, 0) } } 
                            className='font-playfair text-gray-800 text-3xl cursor-pointer'>{room.hotel.name}
                            </p>
                        <div className='flex items-center'>
                             <StarRating />
                             <p className='ml-2'>200+ reviews </p>
                       </div>   

                       <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                        <img src={assets.locationIcon} alt="location-icon" />
                        <span>{room.hotel.address}</span>
                       </div>

                       {/*facility-icons or room amenities */}


                       <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                        {
                           room.amenities.map ( (item, index ) => (

                                <div key={index} className='flex items-center px-2 py-2 gap-2 rounded-lg bg-[#F5F5FF]/70'>

                                    <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                                    <p className='text-xs'>{item}</p>
                                </div>

                             )) }
                       </div>

                       {/* {room-price-per-night} */}
                                    <p className=' font-medium text-2xl text-gray-700'>$ {room.pricePerNight} /day</p>

                        </div>
                    </div>
                ))}
        </div>

        {/* filters */}

        <div className='bg-white w-60 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-8'>
        
        <div className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${openFilters && "border-b"} `}>
            <p className='text-lg text-black'>FILTER</p>
            <div className='text-sm cursor-pointer'>

                <span onClick={() => setOpenFilters(!openFilters)} className='lg:hidden '>
                {openFilters ? 'HIDE' : 'SHOW'}   </span>
                <span className='hidden lg:block'> CLEAR </span>
            </div>
            </div>

            <div className={`${openFilters ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-700`}>
                <div className='px-5 pt-5'>
                    <p className='font-medium text-gray-800 pb-2'>
                        Popular filters </p>
                        {
                            roomTypes.map( (room, index) => (
                                <CheckBox key={index} label={room} />
                            )) }

                </div>

                <div className='px-5 pt-5'>

                    <p className='font-medium text-gray-800 pb-2'>
                        Price</p>

                        {
                            priceRange.map( ( price, index) => (
                                <CheckBox key={index} label={price} />

                 )) }
                         </div>

                         <div className='px-5 pt-5 pb-8'>
                            <p className='font-medium text-gray-800 pb-2'>
                                 Sort By </p>

                                 {
                                    sortByprice.map( (option,index ) => (
                                        <RadioButton key={index} label={option} />
                                    ))
                                 }

                         </div>

            </div>


        </div>
        </div>
    )
}

export default AllRoom