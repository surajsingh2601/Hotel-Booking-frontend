import React from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/FeaturedDestination";
import ExclusiveOffer from "../components/ExclsiveOffer";
import Testimonials from "../components/Testimonials";
import NewsLetter from "../components/NewsLetter";
// import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedDestination />
            <ExclusiveOffer />
            <Testimonials />
            <NewsLetter />
            {/* <Footer /> */}
        </>
    )
} 

export default Home