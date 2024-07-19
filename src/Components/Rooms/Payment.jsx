import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"

function Payment() {
    const [username, setUserName] = useState("");
    const [cardType, setCardType] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cvv, setCvv] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [amount, setAmount] = useState(1000);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // useEffect(() => {
    //     const getPaymentInfo = async () => {
    //         setLoading(true)
    //         try {
    //             const response = await axios.get("http://localhost:5000/api/v1/payment/user-payment", {
    //                 withCredentials: true
    //             })
    //             const { userData, roomData } = (response.data.data)
    //             setUserName(userData.username)
    //             setAmount(roomInfo.cost)
    //         } catch (error) {
    //             setError(error.message);
    //         } finally {
    //             setLoading(false)
    //         }
    //     }
    //     getPaymentInfo()
    // }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payment = await axios.post("http://localhost:5000/api/v1/payment/pay", {
                username,
                cost: amount,
                cardType,
                cardNumber,
                cardCvv: cvv,
                month,
                year,

            }, {
                withCredentials: true
            })
            console.log(payment)
            navigate("/payment/success")

        } catch (error) {
            setError(error)
        }


    };

    return (
        <section className='overflow-x-hidden mt-10 ml-10 mb-10'>
            <div id="mainDiv" className="max-w-lg mx-auto bg-gray-700 p-6 rounded-lg shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-6">Payment Form</h2>
                <div id="paymentForm">
                    <form onSubmit={handleSubmit}>
                        <div className='flex gap-4 flex-col'>
                            <div>
                                <input
                                    type="text"
                                    name="cardholderName"
                                    value={username}
                                    onChange={(e) => setUserName(e.target.value)}
                                    className='h-14 rounded-lg font-rubik p-3 w-full bg-base-300 text-white' // Updated classes here
                                    placeholder='Cardholder Name'
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    name="price"
                                    // disabled
                                    value={amount}
                                    onChange={(e) => { setAmount(e.target.value) }}
                                    className='h-14 rounded-lg font-rubik p-3 w-full bg-base-300 text-white' // Keep disabled input style
                                    placeholder='Price'
                                    required
                                />
                            </div>
                            <div>
                                <select
                                    name="cardType"
                                    value={cardType}
                                    onChange={(e) => setCardType(e.target.value)}
                                    className='h-14 rounded-lg font-rubik p-3 w-full bg-base-300 text-white'
                                    required
                                >
                                    <option value="" disabled>Select Card Type</option>
                                    <option value="visa">Visa</option>
                                    <option value="master">Master</option>
                                    <option value="credit-card">Credit Card</option>
                                    <option value="debit-card">Debit Card</option>
                                </select>
                            </div>
                            <div>
                                <input
                                    type="number"
                                    name="cardNumber"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    className='h-14 rounded-lg font-rubik p-3 w-full bg-base-300 text-white'
                                    placeholder='Card Number'
                                    required
                                />
                            </div>
                            <div className='flex gap-4'>
                                <select
                                    name="month"
                                    value={month}
                                    onChange={(e) => setMonth(e.target.value)}
                                    className='h-14 rounded-lg font-rubik p-3 w-full bg-base-300 text-white'
                                    required
                                >
                                    <option value="" disabled>Month</option>
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                                <select
                                    name="year"
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                    className='h-14 rounded-lg font-rubik p-3 w-full bg-base-300 text-white'
                                    required
                                >
                                    <option value="" disabled>Year</option>
                                    {[...Array(10)].map((_, index) => {
                                        const year = new Date().getFullYear() + index;
                                        return <option key={year} value={year}>{year}</option>;
                                    })}
                                </select>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="cvv"
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    className='h-14 rounded-lg font-rubik p-3 w-full bg-base-300 text-white'
                                    placeholder='CVV'
                                    required
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className='h-14 rounded-lg text-white bg-blue-600 font-bold p-3 w-full hover:bg-blue-700 transition duration-300'
                                    // onClick={() => navigate("/payment/success")}
                                >
                                    Submit Payment
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Payment;
