import React from 'react'

const RoomsList = () => {
    return (
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
    )
}

export default RoomsList
