import React from 'react'
import { testimonial } from '../../data/Data'

const Testimonial = () => {
    return (
        <div className='mt-40 mx-4 sm:mx-20'>
            <p className='text-center font-semibold text-xl lg:text-2xl' style={{color: '#81c408'}}>Our Testimonial</p>
            <h1 className='text-center font-bold text-3xl mt-2 md:text-4xl lg:text-5xl' style={{color: '#45595b'}}>Our Client Saying!</h1>
            <div className='grid grid-cols-1 gap-4 mt-10 lg:grid-cols-2'>
            {
                testimonial.map((val) => {
                    return (
                        <div key={val.id} className='rounded-lg' style={{backgroundColor: '#f4f6f8'}}>
                            <p className='p-5' style={{color: '#45595b'}}>{val.desc}</p>
                            <hr className='w-10/12 m-auto h-0.5 xl:h-1 my-3' style={{backgroundColor: '#ffb524'}}/>
                            <div className='flex justify-between my-6'>
                                <div className='flex mx-4'>
                                    <img className='rounded-lg' style={{width: '100px', height: '100px'}} src={val.img} alt="" />
                                    <div className='flex flex-col justify-center ml-6'>
                                        <h3 className='text-xl font-semibold' style={{color: '#45595b'}}>{val.name}</h3>
                                        <p className='my-3' style={{color: '#45595b'}}>{val.prof}</p>
                                        <ul>
                                            <span style={{color: '#81c408'}}>{val.star}</span>
                                            <span style={{color: '#81c408'}}>{val.star}</span>
                                            <span style={{color: '#81c408'}}>{val.star}</span>
                                            <span style={{color: '#81c408'}}>{val.star}</span>
                                            <span style={{color: '#45595b'}}>{val.star}</span>
                                        </ul>
                                    </div>
                                </div>
                                <span className='relative right-5 flex justify-center items-center'>{val.icon}</span>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Testimonial
