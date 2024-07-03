import React from "react";
import Back from './common/Back'
import { shop_feature ,fruits } from '../data/Data'
import Slider from '@mui/material/Slider';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

const Shop = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <Back title='Shop'/>
            <div className='sm:mx-20 lg:flex 2xl:mx-40'>
                <div className='mx-6'>
                    <h1 className='text-2xl font-semibold' style={{color: '#45595b'}}>Fresh fruits shop</h1>
                    <div className='w-full relative mx-auto my-6'>
                        <input className='w-full py-3 px-3 border border-gray-200 rounded-lg outline-none' type="text" placeholder='Keywords' />
                        <span className='py-3 px-4 border absolute top-0 right-0 bg-gray-200  rounded-lg' style={{color: '#45595b'}}><i className='fa fa-search'></i></span>
                    </div>
                    <div>
                        <div className='bg-gray-100 w-full py-3 px-4 flex justify-between rounded-lg my-8'>
                            <label style={{color:'#45595b'}} for="filter">Default Sorting:</label>
                            <select className='bg-gray-100' name="filter" id="filter">
                                <option value="nothing">Nothing</option>
                                <option value="popularity">Popularity</option>
                                <option value="organic">Organic</option>
                                <option value="fantastic">Fantastic</option>
                            </select>
                        </div>
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
                        <div className='my-8'>
                            <h2 className='text-xl font-semibold' style={{color: '#45595b'}}>Price</h2>
                            <div>
                                <Slider style={{color: '#81c408'}} defaultValue={0} aria-label="Default" min={0} max={500} valueLabelDisplay="auto" />
                            </div>
                        </div>
                        <h2 className='text-xl font-semibold mb-4' style={{color: '#45595b'}}>Additional</h2>
                        <div className='leading-8'>
                            <div>
                                <input type="radio" name="radio" id="" />
                                <span className='ml-3' style={{color: '#45595b'}}>Organic</span>
                            </div>
                            <div>
                                <input type="radio" name="radio" id="" />
                                <span className='ml-3' style={{color: '#45595b'}}>Fresh</span>
                            </div>
                            <div>
                                <input type="radio" name="radio" id="" />
                                <span className='ml-3' style={{color: '#45595b'}}>Sales</span>
                            </div>
                            <div>
                                <input type="radio" name="radio" id="" />
                                <span className='ml-3' style={{color: '#45595b'}}>Discount</span>
                            </div>
                            <div>
                                <input type="radio" name="radio" id="" />
                                <span className='ml-3' style={{color: '#45595b'}}>Expired</span>
                            </div>
                        </div>
                        <h2 className='text-xl font-semibold mt-6' style={{color: '#45595b'}}>Featured products</h2>
                        <div>
                            {shop_feature.slice(0,3).map((val) => {
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
                <div className='grid grid-cols-1 gap-2 mx-5 mt-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-3 xl:gap-y-0'>
                    {fruits.map((val) => {
                        return (
                            <div key={val.id} className='box border rounded-lg border-orange-400 mx-auto mb-6 xl:mb-16 w-full'>
                                <div className='w-full relative overflow-clip'>
                                    <img className='hover:scale-150 duration-500 w-full rounded-lg' src={val.img} alt="" />
                                    <span className='absolute top-3 left-3 text-white text-lg py-1 px-4 rounded-xl' style={{backgroundColor: '#ffb524'}}>Fruits</span>
                                </div>
                                <div className='text-center'>
                                    <h3 className='text-2xl mt-5 font-semibold' style={{color: '#45595b'}}>{val.name}</h3>
                                    <p className='leading-normal font-normal my-4 w-10/12 mx-auto' style={{color: '#020e1ccf'}}>{val.desc}</p>
                                </div>
                                <div className='flex justify-between items-center mb-8 mx-6 lg:flex-col xl:flex-row xl:-mb-6 lg:mx-2 xl:mx-3 '>
                                    <p className='font-semibold text-lg lg:my-2' style={{color: '#0c363b'}}>${val.price} / kg</p>
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
            <ul className='flex justify-center items-center mx-4 mt-20 next'>
                <li className='py-2 px-4 mx-1 border border-orange-400 rounded-lg' style={{color: '#45595b'}}>&#8656;</li>
                <li className='py-2 px-4 mx-1 border border-orange-400 rounded-lg' style={{color: '#45595b', backgroundColor: '#81c408'}}>1</li>
                <li className='py-2 px-4 mx-1 border border-orange-400 rounded-lg' style={{color: '#45595b'}}>2</li>
                <li className='py-2 px-4 mx-1 border border-orange-400 rounded-lg' style={{color: '#45595b'}}>3</li>
                <li className='py-2 px-4 mx-1 border border-orange-400 rounded-lg' style={{color: '#45595b'}}>4</li>
                <li className='py-2 px-4 mx-1 border border-orange-400 rounded-lg' style={{color: '#45595b'}}>5</li>
                <li className='py-2 px-4 mx-1 border border-orange-400 rounded-lg' style={{color: '#45595b'}}>&#8658;</li>
            </ul>
        </div>
    )
}

export default Shop
