import React from 'react'
import Back from './common/Back'
import { shop_feature, vegetables } from '../data/Data'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

const ShopDetail = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <Back title='Shop Detail'/>
            <div className='sm:mx-20 lg:flex 2xl:mx-40'>
                <div className='grid grid-cols-1 gap-2 mx-5 mt-0 xl:gap-x-3 xl:gap-y-0'>
                    <div>
                        <div className='lg:flex'>
                            <div className='lg:mr-4'>
                                <img className='w-full' src="../img/single-item.jpg" alt="" />
                            </div>
                            <div>
                                <h2 className='text-xl font-bold my-4' style={{color: '#45595b'}}>Brocoli</h2>
                                <p style={{color: '#45595b'}}>Category: Vegetables</p>
                                <p className='font-bold text-xl my-4' style={{color: '#45595b'}}>3,35 $</p>
                                <ul>
                                    <li className='fa fa-star' style={{color: '#ffb524'}}></li>
                                    <li className='fa fa-star' style={{color: '#ffb524'}}></li>
                                    <li className='fa fa-star' style={{color: '#ffb524'}}></li>
                                    <li className='fa fa-star' style={{color: '#ffb524'}}></li>
                                    <li className='fa fa-star' style={{color: '#45595b'}}></li>
                                </ul>
                                <p className='my-5' style={{color: '#45595b'}}>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc</p>
                                <p style={{color: '#45595b'}}>Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish</p>
                                <div className='my-6'>
                                    <button className='bg-gray-100 rounded-full px-4 py-3'><i className='fa fa-minus'></i></button>
                                    <input className='w-16 text-center outline-none' type="text" value={4} />
                                    <button className='bg-gray-100 rounded-full px-4 py-3'><i className='fa fa-plus'></i></button>
                                </div>
                                <div className='border rounded-full border-orange-400 w-44 text-center py-2 px-4 lg:px-2 '>
                                    <span className='pr-4 lg:pr-1 ' style={{color: '#81c408'}}><i className='fa fa-shopping-bag'></i></span>
                                    <button className='font-semibold' style={{color: '#81c408'}}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
                                    <li className="me-2" role="presentation">
                                        <button className="inline-block p-4 border-b-2 border-orange-400 rounded-t-lg" style={{color: '#45595b'}} id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Description</button>
                                    </li>
                                    <li className="me-2" role="presentation">
                                        <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Reviews</button>
                                    </li>
                                </ul>
                            </div>
                            <div id="default-styled-tab-content">
                                <div className=" p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish filefish Antarctic icefish goldeye aholehole trumpetfish pilot fish airbreathing catfish, electric ray sweeper.</p>
                                    <div className="relative overflow-x-auto my-4">
                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <tbody>
                                                <tr className="bg-white  dark:bg-gray-800">
                                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                                        Weight :
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        1 Kg
                                                    </td>
                                                </tr>
                                                <tr className="bg-white  dark:bg-gray-800">
                                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                                        Country of Origin :
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        Agro Farm
                                                    </td>
                                                </tr>
                                                <tr className="bg-white dark:bg-gray-800">
                                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                                        Quality :
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        Organic
                                                    </td>
                                                </tr>
                                                <tr className="bg-white dark:bg-gray-800">
                                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                                        Check :
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        Healthy
                                                    </td>
                                                </tr>
                                                <tr className="bg-white dark:bg-gray-800">
                                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                                        Min Weight :
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        250 Kg
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold my-6' style={{color: '#45595b'}}>Leave a Reply</h2>
                        <form action="">
                            <div className='mt-8 flex flex-col lg:flex-row'>
                                <input className='border-b-2 outline-none border-gray-200 w-full rounded-b-md px-2 ' type="text" placeholder='Your Name' />
                                <input className='border-b-2 outline-none border-gray-200 w-full rounded-b-md px-2 my-6 lg:my-0 lg:ml-4' type="email" placeholder='Your Email' />
                            </div>
                            <textarea className='w-full mt-4 border-b-2 outline-none border-gray-200 px-2 rounded-b-md' name="" id="" placeholder='Your Review' cols="30" rows="10"></textarea>
                        </form>
                        <div className='my-10'>
                            <div className='flex justify-between'>
                                <span className='text-lg' style={{color: '#45595b'}}>Please rate:</span>
                                <ul>
                                    <li className='fa fa-star text-sm' style={{color: '#45595b'}}></li>
                                    <li className='fa fa-star text-sm' style={{color: '#45595b'}}></li>
                                    <li className='fa fa-star text-sm' style={{color: '#45595b'}}></li>
                                    <li className='fa fa-star text-sm' style={{color: '#45595b'}}></li>
                                    <li className='fa fa-star text-sm' style={{color: '#45595b'}}></li>
                                </ul>
                            </div>
                            <div className='border rounded-full border-orange-400 w-44 text-center mt-4 py-2 px-4 lg:px-2 post duration-500'>
                                <button className='font-semibold duration-500'>Post Comment</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-6'>
                    <div className='w-full relative mx-auto my-6'>
                        <input className='w-full py-3 px-3 border border-gray-200 rounded-lg outline-none' type="text" placeholder='Keywords' />
                        <span className='py-3 px-4 border absolute top-0 right-0 bg-gray-200  rounded-lg' style={{color: '#45595b'}}><i className='fa fa-search'></i></span>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold' style={{color: '#45595b'}}>Categories</h2>
                        <ul className='flex flex-col'>
                            <div className='flex justify-between leading-10'>
                                <li className='apple duration-500'><i className='fas fa-apple-alt'></i><span className='ml-2'>Apples</span></li>
                                <span>(3)</span>
                            </div>
                            <div className='flex justify-between leading-10'>
                                <li className='apple duration-500'><i className='fas fa-apple-alt'></i><span className='ml-2'>Oranges</span></li>
                                <span>(5)</span>
                            </div>
                            <div className='flex justify-between leading-10'>
                                <li className='apple duration-500'><i className='fas fa-apple-alt'></i><span className='ml-2'>Strawbery</span></li>
                                <span>(2)</span>
                            </div>
                            <div className='flex justify-between leading-10'>
                                <li className='apple duration-500'><i className='fas fa-apple-alt'></i><span className='ml-2'>Banana</span></li>
                                <span>(8)</span>
                            </div>
                            <div className='flex justify-between leading-10'>
                                <li className='apple duration-500'><i className='fas fa-apple-alt'></i><span className='ml-2'>Pumpkin</span></li>
                                <span>(5)</span>
                            </div>
                        </ul>
                        <h2 className='text-xl font-semibold mt-6' style={{color: '#45595b'}}>Featured products</h2>
                        <div>
                            {shop_feature.map((val) => {
                                return (
                                    <div className='flex flex-start items-center my-3' key={val.id}>
                                        <div>
                                            <img className='w-28 h-24' src={val.img} alt="" />
                                        </div>
                                        <div className='ml-4 justify-center items-center'>
                                            <h4 className='text-md font-semibold' style={{color: '#45595b'}}>{val.name}</h4>
                                            <ul className='flex'>
                                                <li style={{color: '#ffb524'}}>{val.star}</li>
                                                <li style={{color: '#ffb524'}}>{val.star}</li>
                                                <li style={{color: '#ffb524'}}>{val.star}</li>
                                                <li style={{color: '#ffb524'}}>{val.star}</li>
                                                <li style={{color: '#45595b'}}>{val.star}</li>
                                            </ul>
                                            <div className='lg:flex lg:flex-col'>
                                                <span className='text-xl font-bold' style={{color: '#45595b'}}>{val.price}</span>
                                                <span className='text-xl font-bold ml-2 line-through' style={{color: '#dc3545 '}}>{val.delete}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <button className='text-lg font-medium py-3 px-20 w-full mt-4 mb-10 duration-500 border border-orange-400 rounded-full btn-view lg:px-10'>View More</button>
                        <div className='relative w-96 max-w-full md:w-full'>
                            <div className='relative'>
                                <img className='w-full relative' src='../img/banner-fruits.jpg' alt="" />
                            </div>
                            <div className='absolute top-2/4 -translate-y-1/2 -right-4 font-bold text-xl md:text-3xl lg:text-xl md:right-6 lg:-right-5 w-24'>
                                <h3 className='' style={{color: '#ffb524'}}>Fresh Fruits Banner</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:mx-20'>
                <h2 className='mx-5 text-3xl font-bold mt-10 mb-4' style={{color: '#45595b'}}>Related products</h2>
                <div className='grid grid-cols-1 gap-2 mx-5 mt-10 md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-3 xl:gap-y-0 '>
                    {vegetables.slice(0,4).map((val) => {
                        return (
                            <div key={val.id} className='box border rounded-lg border-orange-400 mx-auto mb-6 xl:mb-16 w-full'>
                                <div className='w-full relative overflow-clip'>
                                    <img className='hover:scale-150 duration-500 w-full rounded-lg' src={val.img} alt="" />
                                    <span className='absolute top-3 left-3 text-white text-lg py-1 px-4 rounded-xl' style={{backgroundColor: '#81c408'}}>Vegetables</span>
                                </div>
                                <div className='text-center'>
                                    <h3 className='text-2xl mt-5 font-semibold' style={{color: '#45595b'}}>{val.name}</h3>
                                    <p className='leading-normal font-normal my-4 w-10/12 mx-auto' style={{color: '#020e1ccf'}}>{val.desc}</p>
                                </div>
                                <div className='flex justify-between items-center mb-8 mx-6 lg:flex-col xl:flex-row lg:mx-2 xl:mx-3 '>
                                    <p className='font-semibold text-lg lg:my-2' style={{color: '#0c363b'}}>${val.price} / Kg</p>
                                    <div className='border rounded-full border-orange-400 py-2 px-4 lg:px-2 '>
                                        <span className='pr-4 lg:pr-1 ' style={{color: '#81c408'}}>{val.icon}</span>
                                        <button onClick={() => dispatch(addToCart(val))} className='font-semibold' style={{color: '#81c408'}}>{val.cart}</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ShopDetail
