import React from 'react'
import Rating, { } from "../Rooms/Rating"

const Reviews = () => {
    const generateReview = (n) => {
        const card = [];
        for (let i = 0; i < n; i++) {
            card.push(
                <div className='reviewBox w-96 h-72 bg-slate-400 rounded-lg  p-4 pt-5 flex flex-col flex-shrink-0 overflow-y-scroll ' key={i}>
                    <div className="name"><h2 className='text-xl font-italic font-bold underline'>Uttam Seervi</h2></div>
                    <div className="rating mt-2 mb-2">
                        <Rating /> {/* Assuming Rating is a valid component */}
                    </div>
                    <div className="content ">
                        <p>The Sapphire's Retreat is a hidden gem of tranquility, offering a blend of luxury and serenity. With its picturesque views and attentive service, it promises a delightful escape. Whether indulging in gourmet dining or relaxing in plush accommodations, guests are guaranteed a memorable stay at The Sapphire's Retreat.</p>
                        
                    </div>
                </div>
            );
        }
        return card;
    };


    return (
        <section className='mt-10 ml-5 h-min mb-10 overflow-x-hidden'>
            <div id="mainDiv">
                <div className='m-5'>
                    <h1 className='text-4xl text-cyan-950 text-center font-italic underline mb-20'> Discover What Guests Are Saying</h1>
                </div>
                <div id='reviewBoxes' className='text-cyan-950 flex flex-row gap-2 overflow-x-scroll w-screen'>
                    {generateReview(11)}
                </div>
                <div id="reviewForm" className='mt-10'>
                    <div className='text-cyan-950'>
                        <h1 className='text-xl md:text-4xl font-italic font-semibold '>Share your feedback and help us improve.</h1>
                        <h3 className='text-[16px] font-italic mt-4 mb-5'>We Want to Hear from You!</h3>
                    </div>
                    <div className="form">
                        <form action="#">
                            <div className='flex flex-col gap-5 sm:w-2/3 p-3 lg:w-1/3 mx-auto'>
                                <input type="text" className='p-2 pl-4 h-16 rounded-lg outline-none' placeholder='Name' name='userName' />
                                <input type="email" className='p-2 pl-4 h-16 rounded-lg outline-none' placeholder='Email' name='userName' />
                                <textarea name="message" id="message" placeholder='message...' className='w-auto h-auto p-4 rounded-lg'></textarea>
                            </div>
                            <div className="btn flex items-center w-48 mx-auto hover:bg-black hover:text-white">
                                <button >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews
