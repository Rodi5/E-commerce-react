import React from 'react'
import { featured } from '../../data/Data'

const Featured = () => {
    return (
        <div className='container mx-auto mt-32'>
            <div className='mx-6 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4'>
                {
                    featured.map((val) => {
                        return (
                            <div className='text-center border rounded-lg my-6 md:my-0 py-4' style={{backgroundColor: '#f4f6f8 '}} key={val.id}>
                                <div className='relative after pb-10 pt-4 flex justify-center items-center'>
                                    <span className='text-white py-8 px-8 w-32 h-32 felx  border' style={{backgroundColor: '#ffb524', borderRadius: '50%'}}>{val.icon}</span>
                                </div>
                                <h5 className='py-2 text-xl'>{val.name}</h5>
                                <p className='pb-2 text-base' style={{color: '#747d88'}}>{val.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Featured
