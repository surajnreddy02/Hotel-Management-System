import React from 'react'
import Rating, { } from "../Rooms/Rating"

const Reviews = () => {
    const generateReview = (n) => {
        const card = [];
        const names = [
            "Uttam Seervi",
            "Vishesh P Gowda",
            "Suraj N Reddy",
            "Shreyas DK",
            "Somnath M",
            "Uday Shankar",
            "John D.",
            "Emily S.",
            "Michael B.",
            "Jessica R."
        ];

        const reviews = [
            "The Sapphire Retreat has an outstanding hotel management system! It’s so user-friendly and made my booking experience seamless. The staff were always on top of things, and I never faced any issues. Highly recommend!",
            "Absolutely loved using The Sapphire Retreat's management system. It was intuitive and efficient, ensuring that my check-in and check-out processes were quick and hassle-free. Fantastic service!",
            "The Sapphire Retreat's hotel management system is top-notch. Everything from booking to requesting additional services was incredibly easy. The level of organization and attention to detail is unparalleled. Will definitely return!",
            "The hotel management system at The Sapphire Retreat is amazing! It made my stay so comfortable and convenient. The system handled all my requests promptly, and the staff were always informed and ready to assist.",
            "The Sapphire Retreat has set a high standard with their hotel management system. The interface is very user-friendly, and I appreciated how smoothly everything ran. The automated check-in/check-out process saved me a lot of time.",
            "I had a wonderful experience thanks to The Sapphire Retreat's efficient hotel management system. It was easy to navigate, and all my needs were met with just a few clicks. The service was impeccable!",
            "The management system at The Sapphire Retreat is impressive. It made coordinating my stay effortless and ensured that everything was taken care of without any issues. Truly a five-star experience.",
            "The Sapphire Retreat’s hotel management system is fantastic. It was very easy to book my room and request additional services. The system kept everything organized, making my stay incredibly pleasant.",
            "I am thoroughly impressed with The Sapphire Retreat's hotel management system. It made everything from booking to check-out a breeze. The staff were always well-informed and very helpful.",
            "The Sapphire Retreat’s management system is exceptional. It was intuitive, efficient, and made my stay extremely comfortable. The attention to detail and prompt service were simply outstanding."
        ];

        for (let i = 0; i < n; i++) {
            card.push(
                <div className='reviewBox w-96 h-72 bg-slate-400 rounded-lg  p-4 pt-5 flex flex-col flex-shrink-0 overflow-y-scroll hover:scale-95 hover:bg-white hover:text-black' key={i}>
                    <div className="name"><h2 className='text-xl font-italic font-bold underline'> {names[i]}</h2></div>
                    <div className="rating mt-2 mb-2">
                        <Rating /> {/* Assuming Rating is a valid component */}
                    </div>
                    <div className="content ">
                        <p>{reviews[i]}</p>

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
                    {generateReview(10)}
                </div>
                <div id="reviewForm" className='mt-10'>
                    <div className='text-cyan-950'>
                        <h1 className='text-xl md:text-4xl font-italic font-semibold '>Share your feedback and help us improve.</h1>
                        <h3 className='text-[16px] font-italic mt-4 mb-5'>We Want to Hear from You!</h3>
                    </div>
                    <div className="form">
                        <form action="#">
                            <div className='flex flex-col gap-5 sm:w-2/3 p-3 lg:w-1/3 mx-auto'>
                                <input type="text" className='p-2 pl-4 h-16 rounded-lg outline-none' placeholder='Name' name='fullName' />
                                <input type="email" className='p-2 pl-4 h-16 rounded-lg outline-none' placeholder='Email' name='email' />
                                <input type="number" className='p-2 pl-4 h-16 rounded-lg outline-none' placeholder='Rating' name='rating' max={5} min={1} />
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
