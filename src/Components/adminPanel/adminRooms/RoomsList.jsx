import React, { useEffect, useState } from 'react'
import axios from 'axios'
const RoomsList = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {

        const fetchRoom = async () => {
            setLoading(true)
            try {
                const response = await axios.get("http://localhost:5000/api/v1/rooms/get-rooms")
                // console.log(response.data.data)
                setRooms(response.data.data)
            } catch (error) {
                setError(error.message);
                console.log("Got the error while fetching the rooms", error);
            } finally {
                setLoading(false)
            }

        }
        fetchRoom()
    }, [])




    return (



        <div div id="roomsList" className='mt-10 h-4/5 overflow-auto' >
            <h2 className='text-3xl text-center text-cyan-950 font-italic font-bold underline mb-3'>Rooms List</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-[14px] font-rubik text-black'>
                            <th></th>
                            <th>Room Id</th>
                            <th>Room Type</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading? ( <h1 className='text-3xl font-bold text-center mt-10'>Loading.....</h1>):(rooms.map((room, index) => (
                            <tr className='text-gray-800'>
                                <th>{index + 1}</th>
                                <td>{room._id}</td>
                                <td>{room.roomType}</td>
                                <td>${room.cost}</td>
                            </tr>
                        )))}

                    </tbody>
                </table>
            </div>

        </div >

    )
}

export default RoomsList
