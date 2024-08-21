'use client'

import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";


const Featured = () => {

    useEffect(() => {
        Aos.init({
            duration: 1800,
            offset: 100,
            disable: "mobile",
        });
    }, []);

    const data = [
        {
            img: '/assets/Featured/012-1170x785.jpg',
            name: "آپارتمان دو خوابه",
        },
        {
            img: '/assets/Featured/030-1170x785.jpg',
            name: "منزل ویلایی",
        },
        {
            img: '/assets/Featured/038-1170x785.jpg',
            name: "آپارتمان یک خوابه",
        },
        {
            img: '/assets/Featured/040-1170x785.jpg',
            name: "آپارتمان مستردار",
        },
    ];

    const slider = useRef(null);

    const settings = {
        accessibility: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
        ],
    };

    return (
        <div className="bg-white py-20 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">لیست برگزیده‌ها</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        لیست برگزیده‌ها بر اساس موقعیت مکانی شما و فعالیت جستجوی شما،
                        از جمله خانه‌هایی که مشاهده و ذخیره کرده‌اید و فیلترهایی که استفاده کرده‌اید، می‌باشد.
                    </p>
                </div>
                <div className="flex gap-5 mt-4 lg:mt-4">
                    <button
                        data-aos="fade-down"
                        className=" bg-orange-400 text-backgroundColor px-4 py-2 rounded-lg active:bg-orange-500"
                        onClick={() => slider.current.slickPrev()}
                    >
                        <FaArrowRight size={12}/>
                    </button>
                    <button
                        data-aos="fade-down"
                        className=" bg-orange-400 text-backgroundColor px-4 py-2 rounded-lg active:bg-orange-500"
                        onClick={() => slider.current.slickNext()}
                    >
                        <FaArrowLeft size={12}/>
                    </button>
                </div>
                <div data-aos="fade-up" className="mt-5">
                    <Slider ref={slider} {...settings}>
                        {data.map((e, index) => (
                            <div
                                className="h-[300px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 mt-2 cursor-pointer"
                                key={index}
                            >
                                <div>
                                    <img
                                        src={e.img}
                                        alt="img"
                                        className=" h-56 rounded-t-xl w-full"
                                    />
                                </div>

                                <div className=" flex flex-col justify-center items-center">
                                    <h1 className=" font-semibold text-lg pt-4">{e.name}</h1>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Featured;