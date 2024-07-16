import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Rating from '../Rooms/Rating';

const ReviewsList = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAllReviews = async () => {
            setLoading(true);
            try {
                const response = await axios.get("http://localhost:5000/api/v1/review/get-reviews");
                setReviews(response.data.data); // Accessing reviews from the `data` property of the response
                console.log("The data is of the type: ",response.data.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAllReviews();
    }, []);

    return (
        <>
            {loading ? (
                <p className='text-gray-700 text-2xl m-4'>Loading...</p>
            ) : error ? (
                <p className='text-red-500 text-2xl m-4'>Error: {error}</p>
            ) : (
                reviews.map((review) => (
                    <div className='reviewBox w-96 h-72 bg-slate-400 rounded-lg p-4 pt-5 flex flex-col flex-shrink-0 overflow-y-scroll hover:scale-95 hover:bg-white hover:text-black' key={review._id}>
                        <div className="name">
                            <h2 className='text-xl font-italic font-bold underline'>{review.fullName}</h2>
                        </div>
                        <div className="rating mt-2 mb-2">
                            <Rating value={review.rating} /> {/* Assuming Rating component takes a value prop */}
                        </div>
                        <div className="content">
                            <p>{review.message}</p>
                        </div>
                    </div>
                ))
            )}
        </>
    );
};

export default ReviewsList;
