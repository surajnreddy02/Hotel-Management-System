import axios from 'axios';
import React, { useEffect, useState } from 'react'



const UnAllocatedRooms = () => {


    const [roomInfo, setRoomInfo] = useState([]);
    useEffect(() => {
        const getInfo = async () => {
            const response = await axios.get("/api/rooms/get-unallocated-room", {
                withCredentials: true
            })
            // console.log("THe response is : ", response)
            // console.log("THe response data.data is : ", response.data.data)
            setRoomInfo(response.data.data)
        }

        getInfo();
    }, [roomInfo])



    return (
        <section>
            <div id="main">
                {/* <h1 className='text-2xl text-cyan-950 text-center font-italic underline font-bold mb-4'>Unallocated Rooms</h1> */}
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
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    roomInfo.map((room, index) => (
                                        <tr key={index+1}>
                                            <th>{index+1}</th>
                                            <td>{room._id}</td>
                                            <td>{room.roomType}</td>
                                            <td>{room.cost}</td>
                                        </tr>

                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UnAllocatedRooms
