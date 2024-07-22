import React, { useState } from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList'; // Adjust the import path as necessary
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reviews = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [rating, setRating] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState('');
    const [error, setError] = useState(null)

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await axios.post("http://localhost:5000/api/v1/review/post-review", {
                fullName,
                email,
                rating,
                message
            });
            toast.success("Thank you for the review")
            // console.log("This is the message from the review box: ", response.data.message);
            setFullName('');
            setEmail('');
            setRating('');
            setMessage('');
        } catch (error) {
            setError(error.message)
            // console.error("Error submitting the review: ", error.message);
            toast.error("Failed to post the review")
        } finally {
            setLoading(false)
        }
    };

    return (
        <section className='mt-10 ml-5 h-min mb-10 overflow-x-hidden'>
            <div id="mainDiv">
                <div className='m-5'>
                    <h1 className='text-4xl text-cyan-950 text-center font-italic underline mb-20'> Discover What Guests Are Saying</h1>
                </div>
                <div id='reviewBoxes' className='text-cyan-950 flex flex-row gap-2 overflow-x-scroll w-screen'>
                    <ReviewsList />
                </div>
                <div id="reviewForm" className='mt-10'>
                    <div className='text-cyan-950'>
                        <h1 className='text-xl md:text-4xl font-italic font-semibold '>Share your feedback and help us improve.</h1>
                        <h3 className='text-[16px] font-italic mt-4 mb-5'>We Want to Hear from You!</h3>
                    </div>
                    <div className="form">
                        <form onSubmit={handleFormSubmit}>
                            <div className='flex flex-col gap-5 sm:w-2/3 p-3 lg:w-1/3 mx-auto'>
                                <input type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className='p-2 pl-4 h-16 rounded-lg outline-none' placeholder='Name' name='fullName' required />

                                <input type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='p-2 pl-4 h-16 rounded-lg outline-none' placeholder='Email'
                                    name='email' required />

                                <input type="number"
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                    className='p-2 pl-4 h-16 rounded-lg outline-none' placeholder='Rating'
                                    name='rating'
                                    max={5}
                                    min={1}
                                    required />

                                <textarea
                                    name="message"
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder='message...'
                                    className='w-auto h-auto p-4 rounded-lg' required></textarea>
                            </div>
                            <div className="btn flex items-center w-48 mx-auto hover:bg-black hover:text-white">
                                {error && <p className='text-red-700 text-sm m-2'> {error}</p>}
                                <button type='submit' >{loading ? "Submitting" : "Submit"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}

export default Reviews;
