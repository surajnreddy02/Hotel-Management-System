import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Payment() {
    const { roomId } = useParams()
    const [username, setUserName] = useState("");
    const [cardType, setCardType] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cvv, setCvv] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getAmountInfo = async () => {
            try {
                const response = await axios.get("/api/payment/amountInfo", {
                    withCredentials: true,
                });

                if (response.data.data.length > 0) {
                    const roomInfo = response.data.data[0].roomInfo;
                    if (roomInfo) {
                        // console.log("checkInTime:", roomInfo.checkInTime);
                        // console.log("checkOutTime:", roomInfo.checkOutTime);

                        const checkInTime = new Date(roomInfo.checkInTime);
                        const checkOutTime = new Date(roomInfo.checkOutTime);
                        // console.log("Parsed checkInTime:", checkInTime);
                        // console.log("Parsed checkOutTime:", checkOutTime);

                        const timeDifference = checkOutTime - checkInTime; // Difference in milliseconds
                        // console.log("Time difference in milliseconds:", timeDifference);

                        const days = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Convert milliseconds to days
                        // console.log("Days:", days);

                        const totalCost = days * roomInfo.cost;
                        // console.log("Total cost:", totalCost);

                        setAmount(totalCost);
                    }
                }
            } catch (error) {
                setError(error.response ? error.response.data.message : error.message);
            }
        };
        getAmountInfo();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post("/api/payment/pay", {
                username,
                cost: amount,
                cardType,
                cardNumber,
                cardCvv: cvv,
                month,
                year,
            }, {
                withCredentials: true
            });
            toast.success("Payment Successfull", {
                onClose: () => {
                    setTimeout(() => {
                        navigate(`/rooms/${roomId}/payment/success`);
                    }, 100);
                }
            })
        } catch (error) {
            setError(error.response ? error.response.data.message : error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className='overflow-x-hidden mt-10 ml-10 mb-10'>
            <div id="mainDiv" className="max-w-lg mx-auto bg-gray-700 p-6 rounded-lg shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-6">Payment Form</h2>
                {error && <div className="bg-red-500 text-white p-3 rounded mb-4">{error}</div>}
                <div id="paymentForm">
                    <form onSubmit={handleSubmit}>
                        <div className='flex gap-4 flex-col'>
                            <div>
                                <input
                                    type="text"
                                    name="cardholderName"
                                    value={username}
                                    onChange={(e) => setUserName(e.target.value)}
                                    className='h-14 rounded-lg font-rubik p-3 w-full bg-base-300 text-white'
                                    placeholder='Cardholder Name'
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="cost"
                                    value={amount}
                                    readOnly
                                    className='h-14 rounded-lg font-rubik p-3 w-full bg-base-300 text-white'
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
                                    type="text"
                                    name="cardNumber"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    className='h-14 rounded-lg font-rubik p-3 w-full bg-base-300 text-white'
                                    placeholder='Card Number'
                                    required
                                    inputMode="numeric"
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
                                    {[...Array(12)].map((_, index) => (
                                        <option key={index + 1} value={String(index + 1).padStart(2, '0')}>
                                            {new Date(0, index).toLocaleString('default', { month: 'long' })}
                                        </option>
                                    ))}
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
                                    name="cardCvv"
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    className='h-14 rounded-lg font-rubik p-3 w-full bg-base-300 text-white'
                                    placeholder='CVV'
                                    required
                                    inputMode="numeric"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className='h-14 rounded-lg text-white bg-blue-600 font-bold p-3 w-full hover:bg-blue-700 transition duration-300'
                                    disabled={loading}
                                >
                                    {loading ? "Processing..." : "Submit Payment"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}

export default Payment;
