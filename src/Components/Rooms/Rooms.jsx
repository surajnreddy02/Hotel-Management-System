import React from 'react';
import img1 from "../../assets/images/carouselImages/img5.webp";
import Rating from './Rating';
const Rooms = () => {
    // Helper function to generate multiple cards
    const generateRoomCards = (count) => {
        const cards = [];
        for (let i = 0; i < count; i++) {
            cards.push(
                <div key={i} className="roomCard w-72 h-96 rounded-lg bg-white p-3 flex-shrink-0 hover:scale-105">
                    <div className="img">
                        <img src={img1} alt="Room" className='w-80 h-full rounded-lg mt-2 mb-2' />
                    </div>
                    <div className="heading text-cyan-950">
                        <h2>Crown Suite</h2>
                    </div>
                    <div>
                        <p className='text-cyan-900'>1 Bedroom Suite, 1 King</p>
                        <p className='text-cyan-900'>&#8377; 1800 per night</p>
                        <p className='text-cyan-900 text-xl'><Rating/></p>
                    </div>
                    <div className="btn mt-3 w-full hover:bg-gray-700">
                        <button><a href="#">Book now</a></button>
                    </div>
                </div>
            );
        }
        return cards;
    };

    return (
        <section id='rooms' className='mt-10 h-min mb-20'>
            <div id='mainDiv'>
                <div className='text-center w-4/5 mx-auto mb-10'>
                    <h3 className='lg:text-4xl md:text-3xl text-cyan-900 font-italic m-3 underline font-bold'>Luxury Accommodations in Bangalore</h3>
                    <h2 className=' md:text-4xl font-italic text-cyan-950 mt-8'>SUITES & ROOMS</h2>
                    <p className='lg:text-[18px] md:lg:text-[14px] text-cyan-950 font-italic mt-6'>Hotel room and suite accommodation blend modern silhouettes with traditional Indian design elements to create inviting retreats. Features include spacious layouts, Dean & DeLuca-curated minibars and views of Bengaluru. Nearly all suite lodging includes access to luxury services in the Club Lounge.</p>
                </div>

                <div className='flex md:flex-row flex-col gap-0 w-5/6 mx-auto justify-center items-center'>
                    <h1 className='md:text-[25px] font-semibold text-cyan-900 md:w-3/4 text-center underline'>THE CLUB LEVEL</h1>
                    <p className=' md:text-[13px] text-cyan-950 font-italic text-xs mt-2 mb-2'>Located on the top floor, The Sapphire Retreat's® Lounge is an exclusive space for guests to work or relax while enjoying scintillating views of the Bangalore skyline. The Sapphire Retreat's Club Experience commences on arrival and offers guests extraordinary service and sophistication.</p>
                </div>

                <div id='cardDiv'>
                    {/* Presidential or Executive Suites */}
                    <div id='PresidentialOrExecutiveSuites' className='mt-10 m-2'>
                        <div className='h-[1px] bg-cyan-950 m-5 ml-9 mr-9'></div>
                        <h1 className='text-3xl text-center text-cyan-950 font-italic'> Presidential or Executive Suites</h1>
                        <p className='text-cyan-900 mt-4 mb-3 w-4/5 mx-auto font-rubik text-[15px]'>Presidential or Executive Suites represent the pinnacle of luxury and sophistication. These suites are designed for discerning travelers who seek unparalleled comfort and privacy. Featuring opulent decor, private dining areas, and dedicated butler service, these suites cater to VIP guests and executives looking to host meetings or entertain guests in style.</p>
                        <div className="roomCards ml-5 mt-10 flex flex-row gap-3 overflow-x-auto">
                            {generateRoomCards(7)}
                        </div>
                        <div className='h-[1px] bg-cyan-950 m-5 ml-9 mr-9'></div>
                    </div>

                    {/* Luxury Suites */}
                    <div id='LuxurySuites' className='mt-10 m-2'>
                        <div className='h-[1px] bg-cyan-950 m-5 ml-9 mr-9'></div>
                        <h1 className='text-3xl text-center text-cyan-950 font-italic'> Luxury Suites </h1>
                        <p className='text-cyan-900 mt-4 mb-3 w-4/5 mx-auto font-rubik text-[15px]'>Luxury suites are designed for travelers looking for an extraordinary experience. These suites offer expansive living spaces, separate bedrooms, and upscale amenities such as gourmet minibars and entertainment systems. Guests staying in luxury suites can indulge in personalized concierge services and exclusive access to premium facilities, ensuring a memorable and indulgent stay.</p>
                        <div className="roomCards ml-5 mt-10 flex flex-row gap-3 overflow-x-auto">
                            {generateRoomCards(7)}
                        </div>
                        <div className='h-[1px] bg-cyan-950 m-5 ml-9 mr-9'></div>
                    </div>

                    {/* Premium Rooms */}
                    <div id='PremiumRooms' className='mt-10 m-2'>
                        <div className='h-[1px] bg-cyan-950 m-5 ml-9 mr-9'></div>
                        <h1 className='text-3xl text-center text-cyan-950 font-italic'> Premium Rooms</h1>
                        <p className='text-cyan-900 mt-4 mb-3 w-4/5 mx-auto font-rubik text-[15px]'>Premium rooms cater to guests seeking a higher level of comfort and luxury. These rooms are characterized by elegant furnishings, luxurious bedding, and enhanced bathroom amenities. Guests can enjoy breathtaking views or premium location within the hotel, along with personalized services to enhance their stay.</p>
                        <div className="roomCards ml-5 mt-10 flex flex-row gap-3 overflow-x-auto">
                            {generateRoomCards(7)}
                        </div>
                        <div className='h-[1px] bg-cyan-950 m-5 ml-9 mr-9'></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rooms;
