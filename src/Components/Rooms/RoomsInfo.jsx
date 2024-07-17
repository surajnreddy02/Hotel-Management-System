import React from 'react'
import img1 from "../../assets/images/carouselImages/img1.jpg"
import Rating from './Rating'
import { Link } from "react-router-dom"
const RoomsInfo = () => {
    const roomId = 1
    return (
        <section className='h-auto mb-20 p-4 pb-16 bg-slate-400 mt-10'>
            <div>
                <h2 className='text-4xl font-italic text-cyan-950 underline text-center mt-10'>Crown Suite</h2>
            </div>
            <div id='mainDiv' className='mt-20 flex gap-10 lg:w-4/5 w-full mx-auto md:flex-row flex-col items-center '>
                <div id='roomImage w-1/2'>
                    <img
                        src={img1}
                        className='w-[600px] rounded-lg hover:scale-90'
                        alt="Room Image"
                    />
                </div>
                <div id='roomInfo' className='flex w-1/2 flex-col gap-4 justify-center items-center'>
                    <div id="timeSlots" className='flex lg:flex-row flex-col gap-4'>
                        <div
                            id='check-in-time'
                            className=''>
                            <label htmlFor="checkInTime" className='text-black font-italic text-[15px]'>Check-in-time: </label>
                            <input type="datetime-local"
                                className='h-12 w-full px-2 py-3 text-white bg-base-300 rounded-lg outline-none'
                                name="checkInTime"
                                id="checkInTime"
                            />
                        </div>
                        <div
                            id='check-out-time'
                            className=''>
                            <label htmlFor="checkoutTime" className='text-black font-italic text-[15px]'>Check-out-time: </label>
                            <input type="datetime-local"
                                className='h-12 w-full px-2 py-3 text-white bg-base-300 rounded-lg outline-none'
                                name="checkInTime"
                                id="checkInTime"
                            />
                        </div>
                    </div>
                    <div className='w-[400px] ml-20 '>
                        <p class="text-gray-800 leading-normal font-rubik mb-4 md:text-[16px] text-xs ml-2 w-4/5 mx-auto">
                            Experience the ultimate luxury in our spacious suite with elegant décor, stunning views, and top-notch amenities. Perfect for a lavish getaway.
                        </p>

                        <p className="text-gray-800 font-rubik lg:text-[16px] text-[15px]">1 Bedroom Suite, 1 King</p>
                        <p className="text-gray-800 font-rubik lg:text-[16px] text-[15px] mb-2">&#8377; 1800 per night</p>
                        <p className="text-gray-800 font-italic text-xl font-bold "><Rating /></p>

                        <Link
                            // take the roomId from the params
                            to={`/rooms/${roomId}/payment`}
                            // to={"/rooms/success"}
                            className='btn w-4/6 hover:scale-x-105 hover:bg-black hover:text-white mt-5'
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RoomsInfo
