import React from 'react'

const AdminRooms = () => {
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
                                placeholder='Title'
                                className='md:h-16 rounded-lg p-4 outline text-white bg-base-300'
                            />
                            <input
                                type="text"
                                name='roomInfo'
                                placeholder='Room info'
                                className='md:h-16 rounded-lg p-4 outline text-white bg-base-300'
                            />
                            <select name="roomType" id="roomType" className='md:h-16 bg-base-300 rounded-lg p-3 pt-4 outline-none '>
                                <option value="Presidential Suite">Presidential Suite</option>
                                <option value="Luxury Suite">Luxury Suite</option>
                                <option value="Premium Room">Premium Room</option>
                            </select>
                            <input type="number"
                                className='md:h-16 rounded-lg p-4 outline-none text-white bg-base-300'
                                max={15000}
                                min={1500}
                                name='cost'
                            />
                            <input
                                type="file"
                                className='md:h-16 bg-base-300 rounded-lg p-3 pt-4 outline-none '
                                placeholder=''
                                name='roomImage'
                            />
                        </div>
                    </form>
                </div>
                <div id="roomsList" className='mt-10'>
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
                                {/* row 1 */}
                                <tr className='text-gray-800'>
                                    <th>1</th>
                                    <td>R001</td>
                                    <td>Presidential Suite</td>
                                    <td>$5000</td>
                                </tr>
                                {/* row 2 */}
                                <tr className='text-gray-800'>
                                    <th>2</th>
                                    <td>R002</td>
                                    <td>Luxury Suite</td>
                                    <td>$3500</td>
                                </tr>
                                {/* row 3 */}
                                <tr className='text-gray-800'>
                                    <th>3</th>
                                    <td>R003</td>
                                    <td>Premium Room</td>
                                    <td>$2000</td>
                                </tr>
                                {/* row 4 */}
                                <tr className='text-gray-800'>
                                    <th>4</th>
                                    <td>R004</td>
                                    <td>Presidential Suite</td>
                                    <td>$5000</td>
                                </tr>
                                {/* row 5 */}
                                <tr className='text-gray-800'>
                                    <th>5</th>
                                    <td>R005</td>
                                    <td>Luxury Suite</td>
                                    <td>$3500</td>
                                </tr>
                                {/* row 6 */}
                                <tr className='text-gray-800'>
                                    <th>6</th>
                                    <td>R006</td>
                                    <td>Premium Room</td>
                                    <td>$2000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminRooms
