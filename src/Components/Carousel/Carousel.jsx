import React from 'react'
import img1 from "../../assets/images/carouselImages/img1.jpg"
import img2 from "../../assets/images/carouselImages/img2.jpg"
import img3 from "../../assets/images/carouselImages/img3.jpg"
import img4 from "../../assets/images/carouselImages/img4.jpg"
import img5 from "../../assets/images/carouselImages/img5.webp"
import img6 from "../../assets/images/carouselImages/img6.jpg"
import img7 from "../../assets/images/carouselImages/img7.jpg"
import img8 from "../../assets/images/carouselImages/img8.jpg"

const Carousel = () => {
    return (
        <div className="carousel carousel-end rounded-box w-screen scroll-smooth">
            <div className='flex gap-4'>
                <div className="carousel-item rounded-md">
                    <img src={img1} alt="Drink" className='w-[550px] h-[420px] rounded-md transform transition-transform duration-300 hover:scale-105 cursor-pointer' />
                </div>
                <div className="carousel-item">
                    <img
                        src={img2}
                        className='w-[550px] h-[420px] rounded-md transform transition-transform duration-300 hover:scale-105 cursor-pointer'
                        alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img
                        src={img3}
                        className='w-[550px] h-[420px] rounded-md transform transition-transform duration-300 hover:scale-105 cursor-pointer'
                        alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img
                        src={img4}
                        className='w-[550px] h-[420px] rounded-md transform transition-transform duration-300 hover:scale-105 cursor-pointer'
                        alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img src={img5}
                        className='w-[550px] h-[420px] rounded-md transform transition-transform duration-300 hover:scale-105 cursor-pointer'
                        alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img src={img6}
                        className='w-[550px] h-[420px] rounded-md transform transition-transform duration-300 hover:scale-105 cursor-pointer' alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img
                        src={img8}
                        className='w-[550px] h-[420px] rounded-md transform transition-transform duration-300 hover:scale-105 cursor-pointer'
                        alt="Drink" />
                </div>
            </div>
        </div>
    )
}

export default Carousel
