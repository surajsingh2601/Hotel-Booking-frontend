import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router'
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import About from './pages/About';
// import Hotels from './pages/Hotels';
import Footer from './components/Footer';
import AllRoom from './pages/AllRoom';
import RoomDetails from './pages/RoomDetails';
import MyBookings from './pages/MyBookings';
import HotelReg from './components/HotelReg';
import Layout from './pages/hotelOwner/Layout';
import Dashboard from './pages/hotelOwner/Dashboard';
import AddRoom from './pages/hotelOwner/AddRoom';
import ListRoom from './pages/hotelOwner/ListRoom';



const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
      { ! isOwnerPath && <Navbar />}

  {false && <HotelReg />}


      <div className='min-h-[70vh]'>
       
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/rooms' element={<AllRoom />} />
        <Route path='/rooms/:id' element={<RoomDetails /> } />
        <Route path='/my-bookings' element={<MyBookings />} />
        {/* <Route path='/experiences' element={<Experiences/>} /> */}
        {/* <Route path='/about' element={<About />} /> */}
        {/* <Route path='/rooms/:id' element={<RoomDetails />}/> */}


        <Route path='/owner' element={<Layout />} >
             <Route index element={<Dashboard />} />
             <Route path='add-room' element={<AddRoom />} />
             <Route path='list-room' element={<ListRoom />} />

        </Route>

        {/* </Route> */}
       </Routes>

      </div>
      <Footer />
    </div>
  )
}

export default App
