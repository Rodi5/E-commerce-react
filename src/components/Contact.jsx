import React from 'react'
import Back from './common/Back'

const Contact = () => {
    return (
        <div>
            <Back title='Contact'/>
            <div className='m-auto text-center bg-gray-100 py-10 px-6 mx-4 rounded-lg sm:mx-20 md:mx-28'>
                <h1 className='text-3xl lg:text-5xl font-semibold' style={{color: '#81c408'}}>Get in touch</h1>
                <p className='my-4 w-10/12 text-center m-auto' style={{color: '#45595b'}}>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.<a className='ml-1' href="" style={{color: '#81c408'}}>Download Now.</a></p>
                <div className=" rounded w-10/12 h-96 mx-auto my-8">
                    <iframe className="rounded w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" 
                    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='lg:flex lg:justify-between mx-2 md:mx-9 xl:mx-24'>
                    <form action='' className='lg:w-6/12'>
                        <input className='w-full outline-none my-3 py-4 px-4 rounded-lg' type="text" placeholder='Your Name'/>
                        <input className='w-full outline-none my-3 py-4 px-4 rounded-lg' type="text" placeholder='Your Email'/>
                        <textarea className='w-full outline-none my-3 py-4 px-4 rounded-lg' cols="30" rows="5" placeholder='Your Message'></textarea>
                        <input className='w-full outline-none my-3 py-4 px-4 font-semibold border border-orange-400 rounded-lg bg-white duration-500 input-contact' type="submit" />
                    </form>
                    <div className='lg:w-5/12'>
                        <div className='bg-white my-4 rounded-lg flex items-center py-6 px-2'>
                            <span className='text-3xl ml-4' style={{color: '#81c408'}}><i className='fa fa-location-dot'></i></span>
                            <div className='flex flex-col items-start justify-start ml-6'>
                                <h2 className='text-xl font-semibold' style={{color: '#45595b'}}>Address</h2>
                                <span className='w-fit' style={{color: '#45595b'}}>123 Street New York.USA</span>
                            </div>
                        </div>
                        <div className='bg-white my-4 rounded-lg flex items-center py-6 px-2'>
                            <span className='text-3xl ml-4' style={{color: '#81c408'}}><i className='fa fa-envelope'></i></span>
                            <div className='flex flex-col items-start justify-start ml-6'>
                                <h2 className='text-xl font-semibold' style={{color: '#45595b'}}>Mail Us</h2>
                                <span className='w-fit' style={{color: '#45595b'}}>info@example.com</span>
                            </div>
                        </div>
                        <div className='bg-white my-4 rounded-lg flex items-center py-6 px-2'>
                            <span className='text-3xl ml-4' style={{color: '#81c408'}}><i className='fa fa-phone'></i></span>
                            <div className='flex flex-col items-start justify-start ml-6'>
                                <h2 className='text-xl font-semibold' style={{color: '#45595b'}}>Telephone</h2>
                                <span className='w-fit' style={{color: '#45595b'}}>(+012) 3456 7890</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
