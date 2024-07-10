import React from 'react'
import img1 from "../../assets/images/carouselImages/img1.jpg"
import Rating from './Rating'
import { Link } from "react-router-dom"
const RoomsInfo = () => {
    return (
        <section className='h-auto mb-20 p-4 pb-16 bg-slate-400 mt-10'>
            <div>
                <h2 className='text-4xl font-italic text-cyan-950 underline text-center mt-10'>Crown Suite</h2>
            </div>
            <div id='mainDiv' className='mt-20 flex gap-10 w-4/5 mx-auto'>
                <div id='roomImage w-1/2'>
                    <img
                        src={img1}
                        className='w-[600px] rounded-lg hover:scale-90'
                        alt="Room Image"
                    />
                </div>
                <div id='roomInfo' className='flex w-1/2 flex-col gap-4 justify-center items-center'>
                    <p class="text-black font-italic mb-4 text-xl">
                        Experience the ultimate luxury in our spacious suite with elegant décor, stunning views, and top-notch amenities. Perfect for a lavish getaway.
                    </p>

                    <p className="text-black font-italic text-2xl">1 Bedroom Suite, 1 King</p>
                    <p className="text-black font-italic text-2xl">&#8377; 1800 per night</p>
                    <p className="text-black font-italic text-xl font-bold "><Rating /></p>

                    <Link
                        // take the roomId from the params
                        to="/rooms/:roomId/payment"
                        className='btn w-full hover:scale-x-105 hover:bg-black hover:text-white'
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default RoomsInfo
