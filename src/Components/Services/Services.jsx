import React from 'react';
import simg1 from "../../assets/images/servicesImages/spa.avif";
import simg2 from "../../assets/images/servicesImages/gym.webp";
import simg3 from "../../assets/images/servicesImages/pool.jpg";

const Services = () => {
    return (
        <section id="services" className='mt-10 mb-20 h-min overflow-x-hidden'>
            <div id="main" className=''>
                <div id='heading' className='flex flex-col items-center mb-10 ml-5'>
                    <h1 className='text-3xl font-italic text-cyan-950 text-center font-semibold mb-4'>Discover India’s Past and Present Near This 5-Star Bangalore Hotel</h1>
                    <h1 className='text-3xl text-center font-italic underline text-cyan-950 mb-5'>EXPERIENCES</h1>
                    <p className='text-[16px] font-italic w-4/5 text-center text-cyan-950'>Home to Manyata Tech Park, Embassy GolfLinks Business Park and UB City, Bangalore is known as India’s Silicon Valley. But it also has another name: Garden City. Bangalore has lush parks like Cubbon Park and beautiful gardens framing palaces, art museums and theaters. Our 5-star hotel near Chowdiah Memorial Hall and Visvesvaraya Industrial and Technological Museum offers the ideal destination for discovery</p>
                </div>
                <div id="services" className='bg-slate-400 rounded-lg'>
                    <div id="serviceCards" className='md:ml-5 ml-0 p-10 flex flex-col gap-14'>
                        <div className="card flex md:flex-row gap-3 m-2 md:w-11/12 flex-shrink-0 justify-center items-center">
                            <div className="image w-screen md:w-1/2">
                                <img src={simg1} className='rounded-lg w-full h-full' alt="spa" />
                            </div>
                            <div className="content text-cyan-950 w-screen md:w-1/2 md:ml-20 flex flex-col gap-2">
                                <h1 className='text-3xl font-italic mb-2 font-bold underline'>The Sapphire Retreat's Spa</h1>
                                <p>The Sapphire Retreat's Spa, Bangalore is more than a day spa; it is a destination. This 17,000 sq.ft. wellness retreat offers luxury spa and massage treatments drawing from Indian and Western healing traditions with 10 treatment rooms include a VIP Suite.</p>
                                <p>Phone: <span>+91 8147146317</span></p>
                                <p>Everyday: 8:00 AM-11:00 PM</p>
                                <div className="btn mt-2 hover:bg-black hover:text-white">
                                    <button className=' text-white p-2 rounded'>Book now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card flex md:flex-row-reverse gap-10 w-11/12 flex-shrink-0 items-center justify-around m-3">
                            <div className="image w-screen md:w-1/2">
                                <img src={simg2} className='rounded-lg w-full h-full' alt="gym" />
                            </div>
                            <div className="content text-cyan-950 w-screen md:w-1/2 flex flex-col gap-2">
                                <h1 className='text-3xl font-italic mb-2 font-bold underline'>Fitness Center</h1>
                                <p>The Ritz-Carlton Fitness Studio is open 24 hrs a day with full complement of Technogym equipment.</p>
                                <p>Phone: <span>+91 8147146317</span></p>
                                <p>Open 7 days a week, 24 hours a day</p>
                                <div className="btn mt-2 hover:bg-black hover:text-white">
                                    <button className=' text-white p-2 rounded'>Book now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card flex md:flex-row gap-3 m-2 md:w-11/12 flex-shrink-0 justify-center items-center">
                            <div className="image w-screen md:w-1/2">
                                <img src={simg3} className='rounded-lg w-full h-full' alt="pool" />
                            </div>
                            <div className="content text-cyan-950 w-screen md:w-1/2 md:ml-20 flex flex-col gap-2">
                                <h1 className='text-3xl font-italic mb-2 font-bold underline'>Swimming</h1>
                                <p className='mb-2'>OUTDOOR POOL</p>
                                <p className='mb-2'>Mon-Sun: 7:00 AM-7:00 PM</p>
                                <p className='mb-2'>WHIRLPOOL</p>
                                <div className="collapse bg-base-100 text-[13px] mt-2 text-white">
                                    <input type="checkbox" />
                                    <div className="collapse-title text-[15px] text-white font-medium">More Details</div>
                                    <div className="collapse-content flex gap-10">
                                        <ul className='flex flex-col gap-1'>
                                            <h4 className='text-white font-italic'>Outdoor pool</h4>
                                            <li>Outdoor</li>
                                            <li>Towels provided</li>
                                            <li>Children's Pool</li>
                                        </ul>
                                        <ul>
                                            <h4 className='font-italic'>Whirlpool</h4>
                                            <li>Indoor</li>
                                            <li>Towels provided</li>
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;
