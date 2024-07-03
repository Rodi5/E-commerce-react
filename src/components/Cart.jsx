import React from "react";
import Back from "./common/Back";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart,  removeFromCart ,clearItem ,clearCart  } from '../redux/CartSlice';

export default function Cart() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const subtotal = useSelector(state => state.cart.subtotal);
    const total = useSelector(state => state.cart.total);

    const emptyCartMsg = (
        <h4 className="container mx-auto text-center py-4 text-2xl font-semibold" style={{color: '#45595b'}}>Your Cart is Empty</h4>
    );

    return (
        <>
        <Back title='Cart'/>
        {items.length === 0 ? (
            emptyCartMsg
        ) : (
            <div className=" mx-10 lg:mx-24">
                <button onClick={() => dispatch(clearCart())} className="mb-6 text-right border border-red-500 rounded-lg px-6 py-3 duration-500 font-semibold text-gray-700 hover:bg-red-500 hover:text-white">Clear Cart</button>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Products
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Handle
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr key={item.id} className="border-b">
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img className="img-cart rounded-full" src={item.img} alt={item.name} />
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        ${item.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <button onClick={() => dispatch(removeFromCart(item))} className="bg-gray-100 rounded-full px-3 py-2">
                                                <i className="fa fa-minus"></i>
                                            </button>
                                            <p className="w-6 text-center mx-2">{item.quantity}</p>
                                            <button onClick={() => dispatch(addToCart(item))} className="bg-gray-100 rounded-full px-3 py-2">
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        ${parseFloat(item.price * item.quantity).toFixed(2)}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={() => dispatch(clearItem(item))} className="bg-gray-100 px-3 py-2 rounded-full">
                                            <i className="fa fa-times" style={{ color: '#dc3545' }}></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-16 flex flex-col sm:flex-row ">
                    <input className="w-44 py-4 px-2 border-b-2 border-gray-200 rounded-lg" type="text" placeholder="Coupon Code"/>
                    <button className="w-fit px-6 py-4 font-semibold sm:mx-6 my-6 sm:my-0 border border-orange-400 rounded-full duration-500 coupon">Apply Coupon</button>
                </div>
                <div className="flex">
                    <div className="sm:w-10/12 lg:w-6/12 xl:w-8/12"></div>
                    <div className="mt-12 bg-gray-100 p-6 rounded-lg justify-end w-full lg:w-6/12">
                        <div style={{color: '#45595b'}}>
                            <h1 className="text-3xl font-bold">Cart Total</h1>
                            <div className="flex justify-between my-4">
                                <h2 className="text-xl font-semibold">Subtotal:</h2>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mt-2 mb-6">
                                <h2 className="text-xl font-semibold">Shipping</h2>
                                <div>
                                    <span>Flat rate : </span>
                                    <span>$3.00</span>
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-between my-4">
                                <h2 className="font-semibold text-lg">Total</h2>
                                <span>${(total + 3).toFixed(2)}</span>
                            </div>
                            <hr />
                        </div>
                        <button className="w-fit px-6 py-4 font-semibold mt-4 border border-orange-400 rounded-full uppercase duration-500 checkout">Proceed Checkout</button>
                    </div>
                </div>
            </div>
        )} 
        </>
  );
}