import React from 'react'
import Slider from "react-slick";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const Hero = () => {
    return (
        <>
            <div>
                <div className='overlay'>
                    <div className='md:container md:mx-auto flex flex-col justify-between lg:flex-row'>
                        <div className='ml-5 my-20 flex flex-col lg:grid-cols-7 mx-auto md:mx-auto lg:my-32 lg:w-7/12 '>
                            <h4 className='text-xl lg:text-2xl font-semibold' style={{color: '#ffb524'}}>100% Organic Foods</h4>
                            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-10 lg:w-9/12' style={{color: '#81c408'}}>Organic Veggies & Fruits Foods</h1>
                            <div className='relative box-border w-full'>
                                <input className='border border-orange-400 relative w-8/12 rounded-full  pl-4 py-4 ' type="text" placeholder='Search'/>
                                <button className='text-white absolute py-4 right-1/3 top-0 px-6 border border-orange-400 rounded-full font-semibold text-md' style={{backgroundColor: '#81c408'}} type="submit">Submit Now</button>
                            </div>
                        </div>
                        <div className='w-10/12 md:w-9/12 md:mx-auto m-auto lg:w-4/12 lg:h-4/12'>
                            <Slider {...settings}>
                                <div className='w-10/12 h-10/12 relative z-0'>
                                    <img className='border rounded-md w-full h-full' src="../img/hero-img-1.png" alt="" />
                                    <span className='img absolute top-2/4 left-2/4 py-3 text-2xl font-bold px-10 text-white'>Fruits</span>
                                </div>
                                <div className='w-full h-full relative'>
                                    <img className='border rounded-md w-full h-full' src="../img/hero-img-2.jpg" alt="" />
                                    <span className='img absolute top-2/4 left-2/4 py-3 text-2xl font-bold px-10 text-white'>Vesitables</span>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
