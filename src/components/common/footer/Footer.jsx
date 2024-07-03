import React from 'react'

const Footer = () => {
    return (
        <div className='mt-40 px-6 py-10 sm:px-20 md:px-24 lg:px-16 xl:px-20' style={{backgroundColor: '#45595b'}}>
            <div className='py-10 lg:grid lg:grid-cols-3 lg:items-center xl:flex xl:justify-between '>
                <div>
                    <h1 className='text-3xl font-semibold lg:text-4xl lg:grid-cols-1' style={{color: '#81c408'}}>Fruitables</h1>
                    <p className='text-md' style={{color: '#ffb524'}}>Fresh products</p>
                </div>
                <div className='relative box-border w-full xl:mx-28 my-10 lg:grid-cols-2'>
                    <input className='border-gray-100 outline-none relative w-full rounded-full pl-4 py-3 px-4' type="email" placeholder='Your Email'/>
                    <button className='subscribe duration-500 text-white absolute py-3 right-0 top-0 px-6 rounded-full font-semibold text-md' type="submit">Subscribe Now</button>
                </div>
                <ul className='flex justify-end'>
                    <li className='mx-1'><i className='fab fa-twitter py-3 px-3 social rounded-full border border-orange-400'></i></li>
                    <li className='mx-1'><i className='fab fa-facebook-f  py-3 px-4 social rounded-full border border-orange-400'></i></li>
                    <li className='mx-1'><i className='fab fa-youtube py-3 px-3 social rounded-full border border-orange-400'></i></li>
                    <li className='mx-1'><i className='fab fa-linkedin-in py-3 px-3 social rounded-full border border-orange-400'></i></li>
                </ul>
            </div>
            <hr className='w-10/12 lg:w-full m-auto h-0.5 mb-6'/>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-y-8 lg:grid-cols-4'>
                <div>
                    <h3 className='footer-head lg:w-40 xl:w-auto'>Why People Like us!</h3>
                    <p className='footer-contact mt-4 md:w-60 lg:w-44 xl:w-56'>typesetting, remaining essentially unchanged. It was popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                    <button className='read duration-500 relative py-2 mt-6 right-0 top-0 px-6 border border-orange-400 rounded-full font-semibold text-md' type="submit">Read More</button>
                </div>
                <div>
                    <h3 className='footer-head'>Shop Info</h3>
                    <ul className='mt-5 '>
                        <li className='footer-body'>About Us</li>
                        <li className='footer-body'>Contact Us</li>
                        <li className='footer-body'>Privacy Policy</li>
                        <li className='footer-body'>Terms & Condition</li>
                        <li className='footer-body'>Return Policy</li>
                        <li className='footer-body'>FAQs & Help</li>
                    </ul>
                </div>
                <div>
                    <h3 className='footer-head'>Account</h3>
                    <ul className='mt-5'>
                        <li className='footer-body'>My Account</li>
                        <li className='footer-body'>Shop details</li>
                        <li className='footer-body'>Shopping Cart</li>
                        <li className='footer-body'>Wishlist</li>
                        <li className='footer-body'>Order History</li>
                        <li className='footer-body'>International Orders</li>
                    </ul>
                </div>
                <div>
                    <h3 className='footer-head'>Contact</h3>
                    <div className='mt-5'>
                        <p className='footer-contact'>Address: 1429 Netus Rd, NY 48247</p>
                        <p className='footer-contact'>Email: Example@gmail.com</p>
                        <p className='footer-contact'>Phone: +0123 4567 8910</p>
                        <p className='footer-contact'>Payment Accepted</p>
                        <img className='mt-4' src="../img/payment.png" alt="" />
                    </div>
                </div>
            </div>
            <hr className=' my-6'/>
            <div className='m-auto text-center'>
                <p className='font-medium' style={{color: '#ffffff80'}}><strong style={{color: '#ffb524'}}>&copy;Vegetables Ecommerce, </strong>All Right Reserved by Rodi Shammout</p>
            </div>
        </div>
    )
}

export default Footer
