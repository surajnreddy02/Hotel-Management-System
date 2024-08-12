import React, { useState } from 'react';
import { FaBuilding } from "react-icons/fa";
import { FaPhoneVolume } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(''); // Change state variable name to 'phone'
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post("/api/contact/send-message", {
                firstName,
                lastName,
                email,
                phoneNumber: phone, // Use 'phone' state variable here
                message
            }, {
                withCredentials: true
            });
            toast.success("Will reach back to you shortly")
            // console.log("Response data:", response.data);
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhone('');
            setMessage('');
        } catch (error) {
            setError(error);
            console.error("Error:", error);
            toast.error("Failed to submit the contact form ")
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-white overflow-hidden">
            <div className="flex lg:flex-row flex-col items-center">
                <div className="lg:w-1/2 w-full ml-10 flex lg:m-5 mt-20 font-italic">
                    <div className="m-4">
                        <h1 className="text-4xl font-bold text-black mb-5">Get in Touch</h1>
                        <p className="text-lg text-black mb-6">
                            For immediate assistance, you can also reach us through the contact details provided below. Our team is available during our operating hours to ensure you have a pleasant experience with us.
                        </p>
                        <div className='flex flex-col gap-4'>
                            <div className="flex items-center">
                                <p className="text-black text-xl">
                                    <FaBuilding />
                                </p>
                                <p className="text-xl text-black ml-2">The Sapphire's Retreat</p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-black text-xl">
                                    <FaPhoneVolume />
                                </p>
                                <p className="text-xl text-black ml-2">8147146317</p>
                            </div>
                            <div className="flex items-center">
                                <p className='text-black text-xl'>
                                    <MdEmail />
                                </p>
                                <p className="text-xl text-black ml-2">uttam.is22@bmsce.ac.in</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600 font-italic">
                            We'd love to hear from you! Whether you have a question, need assistance, or simply want to provide feedback, our team is here to help. Please fill out the form below to send us a message at any time. We strive to respond to all inquiries promptly.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 font-italic">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">First name</label>
                                <input
                                    id="first-name"
                                    name="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full px-3.5 py-2 text-white bg-gray-800 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">Last name</label>
                                <input
                                    id="last-name"
                                    name="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full px-3.5 py-2 text-white bg-gray-800 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent sm:text-sm"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-900">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full px-3.5 py-2 text-white bg-gray-800 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent sm:text-sm"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-900">Phone number</label>
                                <div className="relative mt-1">
                                    <input
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        type="text"
                                        // autoComplete=""
                                        className="block w-full px-3.5 py-2  text-white bg-gray-800 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-900">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows={4}
                                    className="block w-full px-3.5 py-2 text-white bg-gray-800 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent placeholder-gray-400 sm:text-sm"
                                ></textarea>
                            </div>
                        </div>
                        <div>
                            <p className='text-red-800 text-xs m-2'>{error}</p>
                        </div>
                        <div className="mt-8">
                            <button
                                type="submit"
                                className="w-full px-3.5 py-2.5 text-center text-sm font-semibold font-italic text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-600"
                            >
                                {loading ? "Submitting" : "Let's talk"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}
