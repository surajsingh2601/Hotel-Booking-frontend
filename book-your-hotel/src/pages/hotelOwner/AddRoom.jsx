
import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'



const AddRoom = () => {

    const [images, setImages] = useState({
        1: null,
        2: null,
        3: null,
        4: null
    })

    const [inputs, setInputs] = useState({
        roomType: '',
        pricePerNight: 0,
        amenities: {
          'Free  WiFi': false,
           'Free Breakfast': false ,
           'Room Service': false,
           'Mountain View': false,
           'Pool Access'  : false


        }
    })
    return (
        <form>
            <Title align="left" font-family="outfit" title="Add Room"
             subTitle="Fill in the details carefully and accurate room details, pricing, and amenities,
              to enhance the user booking experience." />

              {/* upload areas for images */}

              <p className='mt-10 text-gray-800'>Images</p>

              <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>

                { Object.keys(images).map((key)=> (
                <label htmlFor={`roomImage${key}`} key={key}>
                    <img className='cursor-pointer max-h-13 opacity-80' 
                    src={images[key] ? URL.createObjectURL(images[key]) : 
                    assets.uploadArea} alt="" />
                    <input type="file" accept='image/*' id={`roomImage${key}`}  hidden
                    onChange={e=> setImages({...images, [key] : e.target.files[0]})} />
                </label>
                ))}
              </div>

              <div className='w-full mt-6 flex max-sm:flex-col gap-4 sm:gap-4'>
                <div className='flex-1 max-w-48'>
                    <p className='text-gray-800'>Room Type</p>
                    <select onChange={e=> setInputs({...inputs, roomType : e.target.value})} value={inputs.roomType} className='w-full opacity-70 mt-1 border border-gray-300 p-2 rounded'>

                        <option value="">Select Room Type</option>
                        <option value="Single Bed">Single Bed</option>
                        <option value="Double Bed">Double Bed</option>
                        <option value="Luxury Room">Luxury Room</option>
                        <option value="Family Suite">Family Suite</option>
                    </select>

                </div>
                <div className='flex-1 max-w-25'>
                    <p className='text-gray-800 font-medium'>Price<span className='text-xs text-gray-800'> /night</span></p>
                    <input value={inputs.pricePerNight} onChange={e=> setInputs({...inputs, pricePerNight : e.target.value})} type="number" placeholder='0'  className='w-full opacity-70 border border-gray-300 rounded p-2 mt-1'/>
                </div>
              </div>


              <p className='mt-4 text-gray-800'>Amenities</p>

              <div className='flex flex-col flex-wrap text-gray-600 mt-1 max-w-sm'>
                {
                    Object.keys(inputs.amenities).map( (amenity, index) => (
                        
                        <div key={index}>
                            <input type="checkbox" name={inputs.name} id={`amenities${index+1}`} checked={inputs.amenities[amenity]}
                            onChange={e=>setInputs({...inputs, amenities : {...inputs.amenities, [amenity] : !inputs.amenities[amenity] } }) } />

                            <label htmlFor={`amenities${index+1}`}> {amenity}</label>

                        </div>

                    ))
                }

              </div>

              <button className='py-2 px-8 mt-5 bg-blue-800 cursor-pointer text-white rounded'>Add Room</button>

       
        </form>
    )
}



export default AddRoom 