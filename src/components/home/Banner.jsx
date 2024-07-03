import React from 'react'

const Banner = () => {
    return (
        <div className='mt-40 py-20' style={{backgroundColor: '#ffb524'}}>
            <div className='mx-10 lg:flex lg:justify-between lg:items-center xl:mx-24'>
                <div className='mx-auto'>
                    <h1 className='text-4xl lg:text-6xl text-white font-bold'>Fresh Exotic Fruits</h1>
                    <h2 className='text-4xl lg:text-6xl font-semibold my-5' style={{color: '#45595b'}}>in Our Store</h2>
                    <p className='md:text-lg' style={{color: '#45595b'}}>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                    <div className='buy py-3 px-12 border-2 rounded-full w-fit font-semibold duration-300 mt-4 mb-10' style={{color: '#45595b'}}><a href=''>BUY</a></div>
                </div>
                <div className='relative md:mx-20'>
                    <div className='w-fit lg:w-96 xl:w-auto'>
                        <img className='w-full' src="../img/baner-1.png" alt="" />
                    </div>
                    <div className='absolute top-0 left-0 bg-white rounded-full w-32 h-32 flex justify-center items-center'>
                        <span className='text-8xl font-bold' style={{color: '#45595b'}}>1</span>
                        <div className='flex flex-col py-10'>
                            <span className='text-2xl font-bold' style={{color: '#45595b'}}>50$</span>
                            <span className='text-lg font-semibold' style={{color: '#45595b'}}>Kg</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
