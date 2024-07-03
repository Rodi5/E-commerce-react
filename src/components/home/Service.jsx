import React from 'react'

const Service = () => {
    return (
        <div className='mt-40 mx-4 md:grid md:grid-cols-2 md:mx-24 grid gap-4 sm:grid sm:mx-20 lg:grid-cols-3 lg:mx-24 xl:mx-40'>
            <div className='box-service border-2 border-orange-400 rounded-xl relative'>
                <div className='relative max-w-full z-10'>
                    <img src="../img/featur-1.jpg" className='w-full rounded-t-xl'  alt="" />
                    <div className='info-service relative bottom-20 py-8 px-12 w-9/12 sm:w-7/12 md:w-9/12  max-w-full rounded-lg text-center' style={{backgroundColor: '#81c408'}}>
                        <h4 className='text-white text-xl font-semibold'>Fresh Apples</h4>
                        <p className='text-lg lg:text-2xl lg:font-semibold' style={{color: '#45595b'}}>20% OFF</p>
                    </div>
                </div>
                <div className='w-full h-64 absolute bottom-0 rounded-xl'style={{backgroundColor: '#ffb524'}}></div>
            </div>
            <div className='box-service border-2 border-orange-400 rounded-xl relative'>
                <div className='relative max-w-full z-10'>
                    <img src="../img/featur-2.jpg" className='w-full rounded-t-xl'  alt="" />
                    <div className='info-service relative bottom-20 py-8 px-12 w-9/12 sm:w-7/12 md:w-9/12  max-w-full rounded-lg text-center' style={{backgroundColor: '#f4f6f8 '}}>
                        <h4 className='text-white text-xl font-semibold' style={{color: '#81c408'}}>Tasty Fruits</h4>
                        <p className='text-lg lg:text-2xl lg:font-semibold' style={{color: '#45595b'}}>Free delivery</p>
                    </div>
                </div>
                <div className='w-full h-64 absolute bottom-0 rounded-xl'style={{backgroundColor: '#45595b '}}></div>
            </div>
            <div className='box-service border-2 border-orange-400 rounded-xl relative'>
                <div className='relative max-w-full z-10'>
                    <img src="../img/featur-3.jpg" className='w-full rounded-t-xl '  alt="" />
                    <div className='info-service relative bottom-20 py-8 px-12 w-9/12 sm:w-7/12 md:w-9/12 md:px-6 max-w-full rounded-lg text-center' style={{backgroundColor: '#ffb524'}}>
                        <h4 className='text-white text-xl font-semibold'>Exotic vegitable</h4>
                        <p className='text-lg lg:text-2xl lg:font-semibold' style={{color: '#45595b'}}>Discount 30$</p>
                    </div>
                </div>
                <div className='w-full h-64 absolute bottom-0 rounded-xl'style={{backgroundColor: '#81c408'}}></div>
            </div>
        </div>
    )
}

export default Service
