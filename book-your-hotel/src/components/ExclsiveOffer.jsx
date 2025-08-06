import React from "react";
import Title from "./Title";
import { assets, exclusiveOffers } from "../assets/assets";

const ExclusiveOffer = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30">

      <div className="flex flex-col md:flex-row justify-between items-center w-full">

        <Title
          align="left"
          title={"Exclusive Offers"}
          subTitle={
            "Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
          }
        />

        <button className="group flex justify-center items-center gap-2 font-sm text-black/60 cursor-pointer max-md:mt-12">
          View All Offers
          <img src={assets.arrowIcon} alt="arrowIcon" className="group-hover:translate-x-1 transition-all "/>
        </button>
      </div>




      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">


        { exclusiveOffers.map( (items) =>(
            <div key={items._id} className=" hover:-translate-y-0.5 transition duration-300 group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4
      rounded-xl text-white bg-no-repeat bg-cover bg-center" style={{backgroundImage:`url(${items.image})`}}>

        <p className="px-3 py-1 absolute top-2 right-4 text-xs bg-white text-gray-800 rounded-full font-medium text-black" > {items.priceOff}% OFF</p>

        <div >
            <p className="text-xl font-medium font-playfair">{items.title}</p>
        <p>{items.description}</p>
        <p className="text-xs text-white/65 mt-3">Expires {items.expiryDate}</p>
        </div>

        <button className="flex items-center gap-2 cursor-pointer font-medium mb-2">
            View Offers 
            <img src={assets.arrowIcon} alt="" className="invert group-hover:translate-x-1 transition-all" />
        </button>



            </div>
        ) )}
      </div>
    </div>
  );
};

export default ExclusiveOffer;
