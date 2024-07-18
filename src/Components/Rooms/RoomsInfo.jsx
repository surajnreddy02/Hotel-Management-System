import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Rating from './Rating';
import img1 from '../../assets/images/carouselImages/img1.jpg';

const RoomsInfo = () => {
    const { roomId } = useParams();
    const navigate = useNavigate(); // Using useNavigate instead of useHistory
    const [room, setRoom] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [checkInTime, setCheckInTime] = useState('');
    const [checkOutTime, setCheckOutTime] = useState('');

    useEffect(() => {
        const getRoomInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/rooms/get-room/${roomId}`);
                setRoom(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching room:', error.message);
                setError(error.message);
                setLoading(false);
            }
        };

        getRoomInfo();
    }, [roomId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:5000/api/v1/users/book-room/${roomId}`, {
                checkInTime: checkInTime,
                checkOutTime: checkOutTime
            });
            console.log('Room booked successfully:', response.data);
            // Redirect to payment page or success page using navigate
            navigate(`/rooms/${roomId}/payment`);
        } catch (error) {
            console.error('Error booking room:', error.message);
            setError(error.message);
        }
    };

    if (loading) return (
        <div className='h-screen flex items-center justify-center text-[100px]'>
            <span className="loading loading-spinner text-error"></span>
        </div>
    );

    if (error) return <div>Error: {error}</div>;

    return (
        <section className="h-auto mb-20 p-4 pb-16 bg-gray-100 mt-10 overflow-x-hidden">
            <div className="container mx-auto">
                <h2 className="text-4xl font-italic text-cyan-950 underline text-center mt-10">{room.roomType}</h2>
                <div className="mt-20 flex gap-10 lg:w-4/5 w-full mx-auto md:flex-row flex-col items-center">
                    <div className="w-full lg:w-1/2">
                        <img
                            src={room.roomImage || img1} // Fallback image in case room.roomImage is undefined
                            className="w-full rounded-lg hover:scale-90 transition-transform duration-300"
                            alt="Room"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-4 justify-center items-center">
                        <form onSubmit={handleSubmit} className="w-full">
                            <div className="flex lg:flex-row flex-col gap-4 w-full">
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor="checkInTime" className="block text-black font-italic text-[15px] mb-2">Check-in-time:</label>
                                    <input
                                        type="datetime-local"
                                        className="h-12 w-full px-2 py-3 text-white bg-base-300 rounded-lg outline-none"
                                        value={checkInTime}
                                        onChange={(e) => setCheckInTime(e.target.value)}
                                        name="checkInTime"
                                        id="checkInTime"
                                        required
                                    />
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor="checkoutTime" className="block text-black font-italic text-[15px] mb-2">Check-out-time:</label>
                                    <input
                                        type="datetime-local"
                                        value={checkOutTime}
                                        onChange={(e) => setCheckOutTime(e.target.value)}
                                        className="h-12 w-full px-2 py-3 text-white bg-base-300 rounded-lg outline-none"
                                        name="checkoutTime"
                                        id="checkoutTime"
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn w-full lg:w-4/6 hover:scale-x-105 hover:bg-black hover:text-white mt-5 transition-transform duration-300"
                            >
                                Book Now
                            </button>
                        </form>
                        <div className="w-full lg:w-[400px] mt-5 text-center lg:text-left">
                            <p className="text-gray-800 leading-normal font-rubik mb-4 md:text-[16px] text-xs">
                                Experience the ultimate luxury in our spacious suite with elegant décor, stunning views, and top-notch amenities. Perfect for a lavish getaway.
                            </p>
                            <p className="text-gray-800 font-rubik lg:text-[16px] text-[15px]">1 Bedroom Suite, 1 King</p>
                            <p className="text-gray-800 font-rubik lg:text-[16px] text-[15px] mb-2">&#8377; {room.cost} per night</p>
                            <p className="text-gray-800 font-italic text-xl font-bold"><Rating /></p>

                            <Link
                                to={`/rooms/${roomId}/payment`}
                                className="btn w-full lg:w-4/6 hover:scale-x-105 hover:bg-black hover:text-white mt-5 transition-transform duration-300"
                            >
                                Proceed to Payment
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RoomsInfo;
