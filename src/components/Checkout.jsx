import React from 'react'
import Back from './common/Back'

const Checkout = () => {
    return (
      <div>
        <Back title='Checkout'/>
        <div className='mx-5 sm:mx-16'>
          <h2 className='text-2xl font-semibold mb-6 mt-20 md:text-3xl lg:text-5xl' style={{color: '#45595b'}}>Billing details</h2>
          <div className='lg:flex lg:justify-between'>
            <form className='lg:w-10/12 lg:mr-10' action="" style={{color: '#45595b'}}>
              <div>
                <label>First Name<sup className=' relative top-2 text-4xl'>*</sup></label>
                <input className='w-full border border-gray-300 outline-green-300 rounded-lg px-2 py-2 mt-2' type="text" />
              </div>
              <div>
                <label>Last Name<sup className=' relative top-2 text-4xl'>*</sup></label>
                <input className='w-full border border-gray-300 outline-green-300 rounded-lg px-2 py-2 mt-2' type="text" />
              </div>
              <div>
                <label>Company Name<sup className=' relative top-2 text-4xl'>*</sup></label>
                <input className='w-full border border-gray-300 outline-green-300 rounded-lg px-2 py-2 mt-2' type="text" />
              </div>
              <div>
                <label>Address<sup className=' relative top-2 text-4xl'>*</sup></label>
                <input className='w-full border border-gray-300 outline-green-300 rounded-lg px-2 py-2 mt-2' type="text" placeholder='House Number Street Name'/>
              </div>
              <div>
                <label>Town/City<sup className=' relative top-2 text-4xl'>*</sup></label>
                <input className='w-full border border-gray-300 outline-green-300 rounded-lg px-2 py-2 mt-2' type="text"/>
              </div>
              <div>
                <label>Country<sup className=' relative top-2 text-4xl'>*</sup></label>
                <input className='w-full border border-gray-300 outline-green-300 rounded-lg px-2 py-2 mt-2' type="text"/>
              </div>
              <div>
                <label>Postcode/Zip<sup className=' relative top-2 text-4xl'>*</sup></label>
                <input className='w-full border border-gray-300 outline-green-300 rounded-lg px-2 py-2 mt-2' type="text"/>
              </div>
              <div>
                <label>Mobile<sup className=' relative top-2 text-4xl'>*</sup></label>
                <input className='w-full border border-gray-300 outline-green-300 rounded-lg px-2 py-2 mt-2' type="text"/>
              </div>
              <div>
                <label>Email Address<sup className=' relative top-2 text-4xl'>*</sup></label>
                <input className='w-full border border-gray-300 outline-green-300 rounded-lg px-2 py-2 mt-2' type="text"/>
              </div>
              <div className='my-4'>
                <input type="checkbox" id='account'/>
                <label className='ml-2' htmlFor='account'>Create an account?</label>
              </div>
              <hr />
              <div className='my-4'>
                <input type="checkbox" id='ship'/>
                <label className='ml-2' htmlFor='ship'>Ship to a different address?</label>
              </div>
              <textarea className='w-full border border-gray-300 outline-green-300 rounded-lg px-2 py-2 mt-2' cols="30" rows="10" placeholder='Order Notes (Optional)'></textarea>
            </form>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
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
                      </tr>
                  </thead>
                  <tbody>
                      <tr className=" border-b ">
                          <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <img className="img-cart rounded-full" src="../img/fruite-item-3.jpg" alt="" />
                          </td>
                          <td className="px-6 py-4">
                              Big Banana
                          </td>
                          <td className="px-6 py-4">
                              2.99 $
                          </td>
                          <td className="px-6 py-4">
                              2
                          </td>
                          <td className="px-6 py-4">
                              2.99 $
                          </td>
                      </tr>
                      <tr className=" border-b ">
                          <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <img className="img-cart rounded-full" src="../img/vegetable-item-5.jpg" alt="" />
                          </td>
                          <td className="px-6 py-4">
                              Potatoes
                          </td>
                          <td className="px-6 py-4">
                              2.99 $
                          </td>
                          <td className="px-6 py-4">
                              2
                          </td>
                          <td className="px-6 py-4">
                              2.99 $
                          </td>
                      </tr>
                      <tr className=" border-b ">
                          <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <img className="img-cart rounded-full" src="../img/vegetable-item-2.jpg" alt="" />
                          </td>
                          <td className="px-6 py-4">
                              Awesome Brocoli
                          </td>
                          <td className="px-6 py-4">
                              2.99 $
                          </td>
                          <td className="px-6 py-4">
                              2
                          </td>
                          <td className="px-6 py-4">
                              2.99 $
                          </td>
                      </tr>
                  </tbody>
              </table>
              <div className='flex justify-end pr-10 my-8' style={{color: '#45595b'}}>
                <h3>Subtotal</h3>
                <span className='ml-20'>$414.00</span>
              </div>
              <hr />
              <div className='flex justify-center items-center my-20' style={{color: '#45595b'}}>
                <h3>Shipping</h3>
                <div className='ml-10 sm:ml-20'>
                  <div>
                    <input type="checkbox" id='free'/>
                    <label className='ml-2' htmlFor='free'>Free Shipping</label>
                  </div>
                  <div>
                    <input type="checkbox" id='flat'/>
                    <label className='ml-2' htmlFor='flat'>Flat rate : $15.00</label>
                  </div>
                  <div>
                    <input type="checkbox" id='local'/>
                    <label className='ml-2' htmlFor='local'>Local Pickup: $8.00</label>
                  </div>
                </div>
              </div>
              <hr />
              <div className='flex justify-evenly my-16' style={{color: '#45595b'}}>
                <h3 className='uppercase'>Total</h3>
                <span>$135.00</span>
              </div>
              <hr />
              <div className='my-10 px-4' style={{color: '#45595b'}}>
                <div className='flex mb-4'>
                  <input type="checkbox" id='direct'/>
                  <label className='ml-2' htmlFor='direct'>Direct Bank Transfer</label>
                </div>
                <p className='w-10/12'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
              </div>
              <hr />
              <div className='my-6 px-4' style={{color: '#45595b'}}>
                <input type="checkbox" id='check'/>
                <label className='ml-2' htmlFor='check'>Check Payments</label>
              </div>
              <hr />
              <div className='my-6 px-4' style={{color: '#45595b'}}>
                <input type="checkbox" id='cash'/>
                <label className='ml-2' htmlFor='cash'>Cash On Delivery</label>
              </div>
              <hr />
              <div className='my-6 px-4' style={{color: '#45595b'}}>
                <input type="checkbox" id='pay'/>
                <label className='ml-2' htmlFor='pay'>Paypal</label>
              </div>
              <hr />
              <div className='px-4'>
                <button className='order uppercase px-4 py-4 border border-orange-400 rounded-lg my-6 mx-auto text-center block w-full text-md font-semibold duration-500'>place order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Checkout
