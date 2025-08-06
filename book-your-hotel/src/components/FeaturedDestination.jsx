import React from 'react';
import { roomsDummyData } from '../assets/assets'
import Hotelcard from './Hotelcard'
import Title from './Title'
import { useNavigate } from 'react-router'


const FeaturedDestination = () => {
const navigate = useNavigate()

    return (

        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>

            <Title title={'Featured Destination'} subTitle={"Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences"} /> 
            {/* passing title and subtitle props through this file to title component */}


            <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>

            {roomsDummyData.slice(0, 8).map( (room, index )=> (

              <Hotelcard key={room._id} room={room} index={index}/>

            ) )}
</div>

<button onClick={()=>{navigate('/rooms'); scrollTo(0, 0)}} className='my-16 px-4 py-2 text-sm font-md border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer '> View All Hotels</button>
        </div>
    )
}


export default FeaturedDestination

