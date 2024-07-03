import React from 'react'
import { fact } from '../../data/Data'

const Fact = () => {
    return (
        <div className='mt-40 mx-4 p-10 text-center rounded-lg sm:mx-20 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-4' style={{backgroundColor: '#f4f6f8 '}}>
            {fact.map((val) => {
                return (
                    <div className='py-10 rounded-lg' style={{backgroundColor: '#fff'}} key={val.id}>
                        <span className='text-5xl' style={{color: '#ffb524'}}>{val.icon}</span>
                        <h1 className='text-2xl w-52 sm:w-auto md:w-52 m-auto uppercase font-semibold my-6' style={{color: '#81c408'}}>{val.name}</h1>
                        <p className='text-3xl font-semibold' style={{color: '#45595b'}}>{val.num}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Fact
