import React, { useState } from 'react';
import axios from 'axios';
import { AllocatedRoomList, RoomsList, UnAllocatedRooms } from '../adminIndex'; // Assuming RoomsList is exported from adminIndex
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { toast, ToastContainer } from 'react-toastify';

const AdminRooms = () => {
    const [roomInfo, setRoomInfo] = useState('');
    const [roomType, setRoomType] = useState('');
    const [price, setPrice] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    const createRoom = async () => {
        // setLoading(true);
        try {
            const formData = new FormData();
            formData.append('roomInfo', roomInfo);
            formData.append('roomType', roomType);
            formData.append('cost', price);

            if (file) {
                formData.append('roomImage', file[0]);
            }

            console.log("the form data is :?>>>>", formData);

            const response = await axios.post('http://localhost:5000/api/v1/rooms/create-room', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            toast.success("Rooms created Successfully")
            // console.log("the response is >>>>>", response.data);

            setRoomInfo('');
            setRoomType('');
            setPrice('');
            setFile(null); // Reset file state to null after submission

        } catch (error) {
            setError(error.message);
            // console.error('Error creating room:', error);
            toast.error("Failed to create the room")
        }
    };
    if (loading) return (
        <div className='h-screen flex items-center justify-center text-[100px]'>
            <span className="loading loading-spinner text-error"></span>
        </div>
    );

    const navigate = useNavigate();
    const authStatus = useSelector((state => state.adminAuth.isAuthenticated))

    if (!authStatus) {
        navigate("/admin")
        return <section className='h-screen'>
            <h1 className='mt-10 text-center text-black text-3xl'>Please Login First</h1>
        </section>;
    }


    return (
        <section id='adminRoomsSection' className='mt-7 mb-20 md:ml-10 ml-2 h-min'>
            <div id="mainDiv" className='flex items-center md:justify-around justify-center md:flex-row flex-col-reverse'>
                <div id="roomForm" className='mt-10 md:w-1/3 w-4/5'>
                    <div>
                        <h2 className='text-3xl text-center text-cyan-950 font-italic font-bold underline mb-3'>Add the Rooms here</h2>
                        <div className='form-items flex flex-col gap-4'>
                            <input
                                type="text"
                                name='roomInfo'
                                value={roomInfo}
                                onChange={(e) => setRoomInfo(e.target.value)}
                                placeholder='Room info'
                                className='md:h-16 rounded-lg p-4 outline text-white bg-base-300'
                            />
                            <select
                                name="roomType"
                                id="roomType"
                                value={roomType}
                                onChange={(e) => setRoomType(e.target.value)}
                                className='md:h-16 bg-base-300 rounded-lg p-3 pt-4 outline-none'>
                                <option value="">Select Room Type</option>
                                <option value="Presidential Suite">Presidential Suite</option>
                                <option value="Luxury Suite">Luxury Suite</option>
                                <option value="Premium Room">Premium Room</option>
                            </select>
                            <input
                                type="number"
                                className='md:h-16 rounded-lg p-4 outline-none text-white bg-base-300'
                                name="cost"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                max={15000}
                                min={1500}
                                placeholder='Price'
                            />
                            <input
                                type="file"
                                onChange={(e) => setFile(e.target.files)}
                                className='md:h-16 bg-base-300 rounded-lg p-3 pt-4 outline-none'
                                placeholder='Room Image'
                                name='roomImage'
                            />
                            <button type="button" onClick={createRoom} className='md:h-16 bg-cyan-700 rounded-lg p-3 text-white font-bold text-center hover:bg-cyan-900'>
                                {loading ? "Creating Room..." : "Create Room"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className='overflow-x-auto'>
                    <h1 className='text-2xl text-cyan-950 text-center font-italic underline font-bold mb-4'>Rooms List</h1>
                    <div className='h-96'>
                        <RoomsList />
                    </div>
                </div>
            </div>
            <div id="allocationInfo" className='flex mt-20 justify-around  flex-col '>
                <div className='mb-10'>
                    <h1 className='text-2xl text-cyan-950 w-4/5 text-center font-italic underline font-bold mb-4'>Unallocated Rooms</h1>
                    <div className='lg:h-[400px] max-h-96 overflow-auto'>
                        <UnAllocatedRooms />
                    </div>
                </div>
                <div className='mb-10'>
                    <h1 className='text-2xl text-cyan-950 text-center font-italic underline font-bold mb-4'>Allocated Rooms</h1>
                    <div className='lg:h-[400px] max-h-96  overflow-auto mb-5'>
                        <AllocatedRoomList />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default AdminRooms;
