import React, { useState, useEffect } from 'react';
import logo from "../../assets/Logo/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import successGif from "../../assets/Success/paymetSuccess.gif";
import { TiTick } from "react-icons/ti";
import { FaRupeeSign } from "react-icons/fa";

const Success = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
        //NOTE: in react it is mandatory to return clearTimeOut so keep in mind
        // In React, it's important to handle cleanup for side effects such as timers, subscriptions, or any asynchronous tasks initiated inside components to avoid memory leaks and unexpected behavior. 
    }, []);

    return (
        <section className='h-screen lg:ml-16 ml-1 mt-20 bg-slate-100 overflow-x-hidden'>
            <div id='mainDiv' className='flex lg:flex-row flex-col-reverse lg:gap-0 gap-10 '>
                <div id="left" className='flex flex-col lg:w-1/2 w-screen ml-4'>
                    <div className="logo">
                        <img src={logo} className='w-32' alt="Logo" />
                    </div>
                    <div className="heading ml-4">
                        <h1 className='text-3xl text-black font-bold font-rubik'>Booking confirmed </h1>
                        <h1 className='text-3xl text-black font-bold mt-1 font-rubik'>Successfully!</h1>
                    </div>
                    <div className="para lg:w-2/3 w-4/5 mt-4 text-gray-700">
                        <p>Thank you for choosing The Sapphire's Retreat! Your reservation is confirmed. If there's anything you need before your arrival, please don't hesitate to reach out to your host.</p>
                    </div>
                    <div className='navigate'>
                        <Link to={"/dashboard"} className='text-[15px] underline font-rubik mt-5 text-black text-center'>Go back to home</Link>
                    </div>
                </div>
                <div id="rights" className='lg:w-1/2 lg:mr-10 flex gap-5 flex-col'>
                    {loading ? (
                        <div className="flex justify-center items-center w-full h-full">
                            <p className="text-3xl font-bold text-black">Loading...</p>
                        </div>
                    ) : (
                        <>
                            <div id="amount">
                                <div className='bg-white p-5 h-32 lg:w-[500px] w-screen flex items-center justify-between rounded-lg'>
                                    <div id='amountInfo' className=''>
                                        <div className='flex flex-row items-center justify-center gap-2'>
                                            <p className='text-3xl font-bold text-black font-rubik'><FaRupeeSign /></p>
                                            <h1 className='text-3xl font-bold text-black font-rubik'>5400</h1>
                                        </div>
                                        <p className='text-gray-500 text-xs'>Payment Success...!</p>
                                    </div>
                                    <div id='successGif'>
                                        <img
                                            className='w-28'
                                            src={successGif}
                                            alt="Success GIF" />
                                    </div>
                                </div>
                            </div>
                            <div id="paymentDetails" className='bg-white p-5 h-auto lg:w-[500px] w-screen rounded-lg'>
                                <h1 className='text-[18px] text-black font-rubik font-semibold'>Payment details</h1>
                                <div id="paymentInfo" className='mt-5 flex flex-col gap-6 text-xs'>
                                    <div id="date" className='flex flex-row justify-between'>
                                        <p className='text-gray-500 text-xs'>Date</p>
                                        <p className='text-black font-bold'>12/07/2004</p>
                                    </div>
                                    <div id="refNo" className='flex flex-row justify-between'>
                                        <p className='text-gray-500 text-xs'>Reference Number</p>
                                        <p className='text-black font-bold'>123456789</p>
                                    </div>
                                    <div id="amount" className='flex flex-row justify-between'>
                                        <p className='text-gray-500 text-xs'>Amount</p>
                                        <div className='flex flex-row items-center justify-center gap-2 text-black font-bold'>
                                            <span><FaRupeeSign /></span>
                                            <p>5000</p>
                                        </div>
                                    </div>
                                    <div id="paymentMethod" className='flex flex-row justify-between'>
                                        <p className='text-gray-500 text-xs'>Payment Method</p>
                                        <p className='text-black text-xs font-bold'>Credit-card</p>
                                    </div>
                                    <div id="paymentStatus" className='flex flex-row justify-between'>
                                        <p className='text-gray-500 text-xs'>Payment Status</p>
                                        <div className='flex flex-row items-center justify-center gap-2 text-black font-bold'>
                                            <p>Success</p>
                                            <span><TiTick /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Success;
