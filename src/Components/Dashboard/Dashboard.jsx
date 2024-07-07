import React from 'react'
// import dashboardImg from '../../assets/images/dashboardImage.jpg'
import dashboardImg1 from '../../assets/images/dashboradImage/dboradImage.jpg'
import { Carousel } from "../../index"
import { NavLink, Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";

import img1 from "../../assets/images/offerCardImages/img1.avif"
import img2 from "../../assets/images/offerCardImages/img2.avif"
import img3 from "../../assets/images/offerCardImages/img3.avif"
import dimg1 from "../../assets/images/diningImages/dimg1.jpeg"
import dimg2 from "../../assets/images/diningImages/dimg2.jpeg"
import dimg3 from "../../assets/images/diningImages/dimg3.webp"
import imgx from "../../assets/images/dashboradImage/imgx.jpeg"
function Dashboard() {
    return (

        <section id='dashboard' className='overflow-x-hidden'>
            <div className=''>

                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: `url(${dashboardImg1})`,
                        objectFit: "cover"
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    {/* do not remove the above line it is providing the opacity to the image and the text */}
                    <div className="hero-content text-neutral-content text-center">
                        <div className="w-10/12">
                            <h1 className="mb-5 md:text-5xl text-2xl font-bold text-white font-italic  ">Welcome to The Sapphire Retreat
                            </h1>
                            <p className="mb-5 text-white text-[15px] font-normal font-rubik">
                                Manage all aspects of your hotel operations from a single, intuitive platform. Whether you are handling reservations, guest check-ins, or room service requests, our system simplifies and streamlines your workflow.
                            </p>

                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* IMAGE Carousel*/}
            <section id='Carousel' className='w-screen md:m-0 mt-5 bg-slate-300 md:p-6 '>
                <div className='rounded-lg'>
                    <h1 className='text-center text-3xl text-gray-950 font-italic mb-5 font-rubik mt-10'>ROOMS & SUITES</h1>
                    <div id='carousel-item ' className='md:w-screen '>
                        <Carousel />
                    </div>
                    <div className='w-3/4 flex flex-col mx-auto mt-10 mb-10 pt-5 pb-5'>
                        <div className="upperLine bg-red-950 h-[1px] "></div>
                        <div className="content w-2/3 text-center mx-auto">
                            <h2 className='md:text-2xl text-xl  font-semibold text-gray-950 font-italic m-2'>Elite Exclusive offer: Stay, Dine, and Earn!</h2>
                            <p className='text-[12px] text-gray-950 font-rubik'>Enjoy 2,500 extra Bonvoy points per night, daily breakfast and a major meal, room upgrade, 30-min spa experience, 25% off on group dining, and more.
                            </p>
                        </div>
                        <div className="lowerLine bg-red-950 h-[1px]"></div>
                    </div>
                </div>
            </section>

            {/* OFFERS SECTION */}
            <section id='offers' className='mb-10 bg-slate-300 p-4'>
                <h1 className='text-center text-3xl text-gray-950 font-italic mb-5'>OFFERS AND PACKAGES</h1>
                <div className="offerCards flex lg:flex-row lg:gap-4 flex-wrap md:gap-1 md:items-center justify-center md:ml-16">
                    {/* card1 */}
                    <div className="card1 lg:w-1/3  md:w-2/3 p-4 rounded-lg ">
                        <div className="image">
                            <img src={img1} alt=""
                                className="w-96 h-full object-cover rounded-md" />
                        </div>
                        <div className='md:ml-0 ml-6'>
                            <div className="heading mb-1 mt-1">
                                <h1 className='text-xl text-gray-950 font-bold font-rubik'>Member Rates - Elite Exclusive Offer</h1>
                            </div>
                            <div className="para"><p className='text-xs text-cyan-900'>AVAILABLE: JUNE 26, 2024 — AUGUST 31, 2024</p></div>
                            <div className="para"><p className='text-[16px] text-cyan-950 w-96'>Stay, Dine, and Earn! Enjoy 2,500 bonus points per night, daily breakfast and a major meal, room upgrade, 30-min spa experience, 25% off group dining, and more.</p></div>
                        </div>
                    </div>
                    {/* card1 */}
                    <div className="card1 lg:w-1/3 md:w-2/3  p-4 rounded-lg">
                        <div className="image">
                            <img src={img2} alt=""
                                className="w-96 rounded-md h-full object-cover" />
                        </div>
                        <div className='md:ml-0 ml-6'>
                            <div className="heading mb-1 mt-1">
                                <h1 className='text-xl text-gray-950 font-bold font-rubik'>Luxury Suite Life Indulgence</h1>
                            </div>
                            <div className="para"><p className='text-xs text-cyan-900'>AVAILABLE: JUNE 6, 2024 — SEPTEMBER 29, 2024</p></div>
                            <div className="para"><p className='text-[16px] text-cyan-950 w-96'>Luxuriate at The Ritz-Carlton, Bangalore located in the heart of the city with a 30 minute spa therapy, lavish breakfast and dinner, stay and dine for kids upto 12 years and more.</p></div>
                        </div>
                    </div>
                    {/* card1 */}
                    <div className="card1 lg:w-1/3 md:w-2/3 p-4 rounded-lg">
                        <div className="image">
                            <img src={img3} alt=""
                                className="w-96 h-full object-cover rounded-md" />
                        </div>
                        <div className='md:ml-0 ml-6'>
                            <div className="heading mb-1 mt-1">
                                <h1 className='text-xl text-gray-950 font-bold font-rubik'>Cash + Points</h1>
                            </div>
                            <div className="para"><p className='text-xs text-cyan-900'>AVAILABLE: NOVEMBER 10, 2023 — NOVEMBER 9, 2024</p></div>
                            <div className="para"><p className='text-[16px] text-cyan-950 w-96'>Stretch your point value even further. Now stay at the hotel and resort of your choice by redeeming part of your points and paying part in cash.</p></div>
                        </div>
                    </div>



                </div>
            </section>
            <section id='dining' className='mt-5 mb-10'>
                <div>
                    <div id='heading' className='md:ml-16 m-3'>
                        <h3 className='text-3xl font-italic mb-4 text-gray-950'>Bangalore's</h3>
                        <h1 className='text-5xl font-serif text-gray-950 '>LUXURY DINING...</h1>
                    </div>
                </div>
                <div className='bg-slate-300 w-auto p-10'>
                    <div className='flex md:flex-row-reverse mb-14 gap-8 justify-center items-center flex-col'>
                        <div className=''>
                            <img src={imgx} alt="the image" className='md:w-[600px] h-full rounded-lg' />
                        </div>
                        <div className='mt-5'>
                            <h1 className='md:text-3xl sm:text-2xl text-cyan-950 font-semibold'>Marriott Bonvoy on Wheels</h1>
                            <p className='md:text-[15px] text-cyan-900 mt-4'>Relish exquisite flavors at home, as we deliver signature delicacies from our award-winning restaurants, delivered right at your doorstep</p>
                        </div>
                    </div>
                    {/* new card/////////////////////////// */}
                    <div className='flex md:flex-row mb-14 gap-8 justify-center items-center flex-col'>
                        <div className=''>
                            <img src={dimg2} alt="" className='md:w-[1000px]  h-full rounded-lg' />
                        </div>
                        <div className='mt-5'>
                            <h1 className='md:text-3xl sm:text-2xl text-cyan-950 font-semibold'>Luxurious Dining: Culinary Excellence in Upscale Hotels</h1>
                            <p className='md:text-[15px] text-cyan-900 mt-4'>Luxurious hotel dining combines elegance, culinary mastery, and impeccable service. Featuring exquisite dishes crafted with premium ingredients, these experiences blend cultural diversity and meticulous presentation. </p>
                        </div>
                    </div>
                    {/* asdssssssssssssssssssssssssssssssss */}
                    <div className='flex md:flex-row-reverse mb-14 gap-8 justify-center items-center flex-col'>
                        <div className=''>
                            <img src={dimg3} alt="" className='md:w-[1000px]  h-full rounded-lg' />
                        </div>
                        <div className='mt-5'>
                            <h1 className='md:text-3xl sm:text-2xl text-cyan-950 font-semibold'>"Refined Bar Experience: Crafted Cocktails and Fine Spirits</h1>
                            <p className='md:text-[15px] text-cyan-900 mt-4'>Savor handcrafted cocktails and rare spirits at our sophisticated bar. With a curated selection of fine wines, artisanal beers, and signature drinks, enjoy a relaxed ambiance and impeccable service.  </p>
                        </div>
                    </div>
                </div>
            </section>


            <section id='FAQ' className='md:m-8 mb-10'>
                <div className='flex flex-col gap-4'>
                    <div className="collapse collapse-plus bg-slate-300">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium text-cyan-950">What are the check-in time and check-out time at The Sapphire Retreat's </div>
                        <div className="collapse-content text-cyan-950">
                            <p>The check-in time is 2:00pm and the check-out time is 12:00pm</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-slate-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium  text-cyan-950">Does the The Sapphire Retreat's allow pets</div>
                        <div className="collapse-content  text-cyan-950">
                            <p>Pets are not allowed (No pets allowed)</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-slate-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium  text-cyan-950">what are the parking options at The Sapphire Retreat's </div>
                        <div className="collapse-content  text-cyan-950">
                            <p>
                                <ul>
                                    <li>complementary on-site parking</li>
                                    <li>complementary valet parking</li>
                                    <li>Long term parking</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-slate-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium  text-cyan-950">Does The Sapphire Retreat's have free wifi</div>
                        <div className="collapse-content  text-cyan-950">
                            <p>
                                Yes,The Sapphire Retreat's have free wifi for their Guest's
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-slate-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium  text-cyan-950">what are the amenities are available at The Sapphire Retreat's  </div>
                        <div className="collapse-content  text-cyan-950">
                            <div className='flex gap-14'>
                                <ul>
                                    <li>Restaurant</li>
                                    <li>Fitness center</li>
                                    <li>Hot tub</li>
                                    <li>Daily house keeping</li>
                                    <li>Meeting space</li>
                                </ul>
                                <ul>
                                    <li>Spa</li>
                                    <li>outdoor pool</li>
                                    <li>24 hour Room service</li>
                                    <li>Dry cleaning service</li>
                                    <li>Free wifi</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </section>
    )
}

export default Dashboard
