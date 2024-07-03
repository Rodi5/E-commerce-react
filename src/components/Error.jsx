import React from 'react'
import Back from './common/Back'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <Back title='404 Error'/>
                <div className="error m-auto text-center">
                    <span className='text-7xl'><i class="fa fa-exclamation-triangle" style={{color: '#ffb524'}}></i></span>
                    <h2 className='font-bold text-7xl my-6' style={{color: '#45595b'}}>404</h2>
                    <h1 className='font-semibold text-4xl' style={{color: '#45595b'}}>Page Not Found</h1>
                    <p className='my-6 w-8/12 m-auto' style={{color: '#45595b'}}>We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                    <div className='w-fit m-auto border border-orange-400 rounded-full py-4 px-10 btn-error duration-500 font-semibold'><Link to='/'>Go Back To Home</Link></div>
                </div>
        </div>
    )
}

export default Error
