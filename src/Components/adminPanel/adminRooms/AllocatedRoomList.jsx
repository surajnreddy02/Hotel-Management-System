import React, { useEffect, useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AllocatedRoomList = () => {
    const [roomInfo, setRoomInfo] = useState([])
    const [error, setError] = useState(null);


    useEffect(() => {
        const getAllocatedRooms = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/v1/rooms/get-allocated-rooms", {
                    withCredentials: true
                })
                setRoomInfo(response.data.data)
                // console.log("The room info is ", response.data.data)
                // console.log("The room info is ", response.data.data[0].userInfo.email)
            }
            catch (error) {
                setError(error.message)
            }
        }
        getAllocatedRooms()
    }, [])

    const handleUnAllocate = async (roomId) => {
        try {
            const response = await axios.post("http://localhost:5000/api/v1/admin/deallocate-room", {
                roomId
            }, {
                withCredentials: true
            })
            toast.success("Room unallocated Successfully")
            setRoomInfo((prevInfo) => prevInfo.filter((room) => room._id !== roomId))
            console.log(response.data.data)
        } catch (error) {
            setError(error.message)
            toast.error("Failed to unallocate the room")
        }
    }


    if (error) {
        return (
            <div className='h-screen font-rubik font-semibold text-center mt-20 text-4xl text-red-800'>
                Something went wrong: {error}
            </div>
        );
    }

    return (
        <section>
            <div id="main">
                {/* <h1 className='text-2xl text-cyan-950 text-center font-italic underline font-bold mb-4'>Allocated Rooms</h1> */}
                <div id="table">
                    <div className="overflow-x-auto">
                        <table className="table text-black">
                            {/* head */}
                            <thead>
                                <tr className='text-black font-bold font-rubik'>
                                    <th></th>
                                    <th>Room Id</th>
                                    <th>Room Type</th>
                                    <th>Price</th>
                                    <th>email</th>
                                    <th>username</th>
                                    <th>checkInTime</th>
                                    <th>checkOutTime</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    roomInfo.map((room, index) => (
                                        <tr key={index + 1}>
                                            <th>{index + 1}</th>
                                            <td>{room._id}</td>
                                            <td>{room.roomType}</td>
                                            <td>{room.cost}</td>
                                            <td>{room.userInfo.email}</td>
                                            <td>{room.userInfo.username}</td>
                                            <td>{room.checkInTime}</td>
                                            <td>{room.checkOutTime}</td>
                                            <td><button
                                                onClick={() => handleUnAllocate(room._id)}
                                                className='bg-black p-2 text-white rounded-lg font-rubik hover:scale-95'>Unallocate</button></td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>

    )
}

export default AllocatedRoomList
