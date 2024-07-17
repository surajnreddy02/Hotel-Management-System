import React from 'react'
import { Link } from "react-router-dom"
import failed from "../../assets/Failed/failed.jpg"
import { MdReportGmailerrorred } from "react-icons/md";
const Failure = () => {
    return (
        <section className='overflow-x-hidden h-screen bg-red-700'>
            <div id="mainDiv">
                <div id="left" className='flex justify-center items-center h-screen '>
                    <div className="container w-96 h-96 bg-white  rounded-[25px] p-5">
                        <div className='text-7xl text-black'>
                            <MdReportGmailerrorred />
                        </div>
                        <div className='failedInfo'>
                            <h1 className='text-3xl font-bold font-rubik mt-3 mb-4 text-black'>Payment Failed....</h1>
                            <p className='text-[16px] text-black'>Hey there. We tried to charge your card but, something went wrong.Please update your payment below to continue</p>
                        </div>
                        <div id='navigationBtn'>
                            <Link to='/payment' className='btn btn-black text-white mt-5'>Update Payment</Link>
                        </div>
                        <div className='flex flex-row mt-4'>
                            <p className='text-black font-semibold'>Have a question?  </p>
                            <Link to='/contact' className='text-primary font-semibold pl-2'>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Failure
