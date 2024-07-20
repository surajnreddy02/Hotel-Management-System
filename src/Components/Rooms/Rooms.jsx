import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import Rating from './Rating';
import img1 from '../../assets/images/carouselImages/img1.jpg';
import img2 from '../../assets/images/carouselImages/img2.jpg';
import img3 from '../../assets/images/carouselImages/img3.jpg';
import img4 from '../../assets/images/carouselImages/img4.jpg';
import img5 from '../../assets/images/carouselImages/img5.webp';
import img6 from '../../assets/images/carouselImages/img6.jpg';
import img7 from '../../assets/images/carouselImages/img7.jpg';
import img8 from '../../assets/images/carouselImages/img8.jpg';

const Rooms = () => {

    const navigate = useNavigate();
    const [premiumRooms, setPremiumRooms] = useState([]);
    const [presidentialRooms, setPresidentialRooms] = useState([]);
    const [luxuryRooms, setLuxuryRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const generateRooms = async () => {
            try {
                const presidentialResponse = await axios.get("http://localhost:5000/api/v1/rooms/get-presidential-rooms");
                setPresidentialRooms(presidentialResponse.data.data);

                const premiumResponse = await axios.get("http://localhost:5000/api/v1/rooms/get-premium-rooms");
                setPremiumRooms(premiumResponse.data.data);

                const luxuryResponse = await axios.get("http://localhost:5000/api/v1/rooms/get-luxury-rooms");
                setLuxuryRooms(luxuryResponse.data.data);
            } catch (error) {
                setError(error.message);
            }
        };

        generateRooms();
    }, []);

    // console.log("presidential rooms ", premiumRooms)
    // console.log("luxury rooms ", luxuryRooms)
    // console.log("premium rooms ", premiumRooms)
    const time = setTimeout(() => {
        setLoading(false)
    }, 900)
    if (loading) return <div className='h-screen flex items-center justify-center text-[100px]'>
        <span className="loading loading-spinner text-error"></span>
    </div>


    return (
        <section id="rooms" className="mt-10 h-min mb-20">
            <div id="mainDiv">
                <div className="text-center w-4/5 mx-auto mb-10">
                    <h3 className="lg:text-4xl md:text-3xl text-cyan-900 font-rubik m-3 underline font-bold">
                        Luxury Accommodations in Bangalore
                    </h3>
                    <h2 className="md:text-4xl font-rubik text-cyan-950 mt-8">SUITES & ROOMS</h2>
                    <p className="lg:text-[18px] md:lg:text-[14px] text-cyan-950 font-rubik mt-6">
                        Hotel room and suite accommodation blend modern silhouettes with traditional Indian design elements to create inviting retreats. Features include spacious layouts, Dean & DeLuca-curated minibars and views of Bengaluru. Nearly all suite lodging includes access to luxury services in the Club Lounge.
                    </p>
                </div>

                <div className="flex md:flex-row flex-col gap-0 w-5/6 mx-auto justify-center items-center">
                    <h1 className="md:text-[25px] font-semibold text-cyan-900 md:w-3/4 text-center underline">
                        THE CLUB LEVEL
                    </h1>
                    <p className="md:text-[13px] text-cyan-950 font-rubik text-xs mt-2 mb-2">
                        Located on the top floor, The Sapphire Retreat's® Lounge is an exclusive space for guests to work or relax while enjoying scintillating views of the Bangalore skyline. The Sapphire Retreat's Club Experience commences on arrival and offers guests extraordinary service and sophistication.
                    </p>
                </div>

                <div id="cardDiv">
                    {/* Presidential or Executive Suites */}
                    <div id="PresidentialOrExecutiveSuites" className="mt-10 m-2">
                        <div className="h-[1px] bg-cyan-950 m-5 ml-9 mr-9"></div>
                        <h1 className="text-3xl text-center text-cyan-950 font-rubik">Presidential or Executive Suites</h1>
                        <p className="text-cyan-900 mt-4 mb-3 w-4/5 mx-auto font-rubik text-[15px]">
                            Presidential or Executive Suites represent the pinnacle of luxury and sophistication. These suites are designed for discerning travelers who seek unparalleled comfort and privacy. Featuring opulent decor, private dining areas, and dedicated butler service, these suites cater to VIP guests and executives looking to host meetings or entertain guests in style.
                        </p>
                        <div className="roomCards ml-5 mt-10 flex flex-row gap-3 overflow-x-auto">
                            {/* {generateRoomCards(7)} */}
                            {
                                presidentialRooms.map((room) => (
                                    <div key={room._id} className="roomCard w-72 h-96 rounded-lg bg-white p-3 flex-shrink-0 hover:scale-105 hover:bg-slate-100">
                                        <div className="img">
                                            <img src={room.roomImage} alt="Room" className="w-80 h-52 rounded-lg mt-2 mb-2" />
                                        </div>
                                        <div>
                                            <p className="text-cyan-900">{room.roomInfo}</p>
                                            <p className="text-cyan-900">&#8377; {room.cost} per night</p>
                                            {/* <p className="text-cyan-900 text-xl"><Rating /></p> */}
                                        </div>
                                        <div className="btn mt-3 w-full hover:bg-gray-700">
                                            <Link to={`/rooms/${room._id}`}
                                                // onClick={() => navigate(`/rooms/${i}`)}
                                                className="block p-3 w-full h-full">
                                                More Info
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="h-[1px] bg-cyan-950 m-5 ml-9 mr-9"></div>
                    </div>

                    {/* Luxury Suites */}
                    <div id="LuxurySuites" className="mt-10 m-2">
                        <div className="h-[1px] bg-cyan-950 m-5 ml-9 mr-9"></div>
                        <h1 className="text-3xl text-center text-cyan-950 font-rubik">Luxury Suites</h1>
                        <p className="text-cyan-900 mt-4 mb-3 w-4/5 mx-auto font-rubik text-[15px]">
                            Luxury suites are designed for travelers looking for an extraordinary experience. These suites offer expansive living spaces, separate bedrooms, and upscale amenities such as gourmet minibars and entertainment systems. Guests staying in luxury suites can indulge in personalized concierge services and exclusive access to premium facilities, ensuring a memorable and indulgent stay.
                        </p>
                        <div className="roomCards ml-5 mt-10 flex flex-row gap-3 overflow-x-auto">
                            {
                                luxuryRooms.map((room) => (
                                    <div key={room._id} className="roomCard w-72 h-96 rounded-lg bg-white p-3 flex-shrink-0 hover:scale-105 hover:bg-slate-100">
                                        <div className="img">
                                            <img src={room.roomImage} alt="Room" className="w-80 h-52 rounded-lg mt-2 mb-2" />
                                        </div>
                                        <div>
                                            <p className="text-cyan-900">{room.roomInfo}</p>
                                            <p className="text-cyan-900">&#8377; {room.cost} per night</p>
                                            {/* <p className="text-cyan-900 text-xl"><Rating /></p> */}
                                        </div>
                                        <div className="btn mt-3 w-full hover:bg-gray-700">
                                            <Link to={`/rooms/${room._id}`}
                                                // onClick={() => navigate(`/rooms/${i}`)}
                                                className="block p-3 w-full h-full">
                                                More Info
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="h-[1px] bg-cyan-950 m-5 ml-9 mr-9"></div>
                    </div>

                    {/* Premium Rooms */}
                    <div id="PremiumRooms" className="mt-10 m-2">
                        <div className="h-[1px] bg-cyan-950 m-5 ml-9 mr-9"></div>
                        <h1 className="text-3xl text-center text-cyan-950 font-rubik">Premium Rooms</h1>
                        <p className="text-cyan-900 mt-4 mb-3 w-4/5 mx-auto font-rubik text-[15px]">
                            Premium rooms cater to guests seeking a higher level of comfort and luxury. These rooms are characterized by elegant furnishings, luxurious bedding, and enhanced bathroom amenities. Guests can enjoy breathtaking views or premium location within the hotel, along with personalized services to enhance their stay.
                        </p>
                        <div className="roomCards ml-5 mt-10 flex flex-row gap-3 overflow-x-auto">
                            {
                                premiumRooms.map((room) => (
                                    <div key={room._id} className="roomCard w-72 h-96 rounded-lg bg-white p-3 flex-shrink-0 hover:scale-105 hover:bg-slate-100">
                                        <div className="img">
                                            <img src={room.roomImage} alt="Room" className="w-80 h-52 rounded-lg mt-2 mb-2" />
                                        </div>
                                        <div>
                                            <p className="text-cyan-900">{room.roomInfo}</p>
                                            <p className="text-cyan-900">&#8377; {room.cost} per night</p>
                                            {/* <p className="text-cyan-900 text-xl"><Rating /></p> */}
                                        </div>
                                        <div className="btn mt-3 w-full hover:bg-gray-700">
                                            <Link to={`/rooms/${room._id}`}
                                                // onClick={() => navigate(`/rooms/${i}`)}
                                                className="block p-3 w-full h-full">
                                                More Info
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="h-[1px] bg-cyan-950 m-5 ml-9 mr-9"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rooms;
