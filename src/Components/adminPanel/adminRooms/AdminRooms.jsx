import React, { useEffect, useState } from 'react'
import { RoomsList } from "../adminIndex"

const AdminRooms = () => {

    const [title, setTitle] = useState('');
    const [roomInfo, setRoomInfo] = useState('');
    const [roomType, setRoomType] = useState('');
    const [price, setPrice] = useState('');
    const [file, setFile] = useState('');
    const [rooms, setRooms] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        const createRoom = async () => {
            const response = await axios.post('http://localhost:5000/api/v1/rooms/create-room')

        }

    }, [title, roomInfo, file, rooms])


    return (
        <section id='adminRoomsSection' className='mt-7 mb-20 md:ml-10 ml-2' >
            <div id="mainDiv" className='flex items-center md:justify-around justify-center md:flex-row flex-col-reverse'>
                <div id="roomForm" className='mt-10 md:w-1/3 w-4/5'>
                    <form action="">
                        <h2 className='text-3xl text-center text-cyan-950 font-italic font-bold underline mb-3'>Add the Rooms here</h2>
                        <div className='form-items flex flex-col gap-4'>
                            <input
                                type="text"
                                name='title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder='Title'
                                className='md:h-16 rounded-lg p-4 outline text-white bg-base-300'
                            />
                            <input
                                type="text"
                                name='roomInfo'
                                value={roomInfo}
                                onChange={(e) => setRoomInfo(e.target.value)}
                                placeholder='Room info'
                                className='md:h-16 rounded-lg p-4 outline text-white bg-base-300'
                            />
                            <select name="roomType"
                                id="roomType"
                                className='md:h-16 bg-base-300 rounded-lg p-3 pt-4 outline-none '>
                                onChange={(e) => setRoomType(e.target.value)}
                                <option value="Presidential Suite">Presidential Suite</option>
                                <option value="Luxury Suite">Luxury Suite</option>
                                <option value="Premium Room">Premium Room</option>
                            </select>
                            <input type="number"
                                className='md:h-16 rounded-lg p-4 outline-none text-white bg-base-300'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                max={15000}
                                min={1500}
                                name='cost'
                            />
                            <input
                                type="file"
                                value={file}
                                onChange={(e) => setFile(e.target.value)}
                                className='md:h-16 bg-base-300 rounded-lg p-3 pt-4 outline-none '
                                placeholder=''
                                name='roomImage'
                            />
                        </div>
                    </form>
                </div>
                <div>
                    <RoomsList />
                </div>
            </div>
        </section>
    )
}

export default AdminRooms
