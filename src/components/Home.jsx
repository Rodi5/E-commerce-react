import React from 'react'
import Hero from './home/Hero'
import Featured from './home/Featured'
import Fruits from './home/Fruits'
import Service from './home/Service'
import Vegetables from './home/Vegetables'
import Banner from './home/Banner'
import Bestseller from './home/Bestseller'
import Fact from './home/Fact'
import Testimonial from './testimonial/Testimonial'


const Home = () => {
    return (
        <>
            <Hero />
            <Featured />
            <Fruits />
            <Service />
            <Vegetables />
            <Banner />
            <Bestseller />
            <Fact />
            <Testimonial />
        </>
    )
}

export default Home
