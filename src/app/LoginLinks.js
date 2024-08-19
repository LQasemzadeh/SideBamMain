'use client'

import Link from 'next/link'
import React, { useState } from "react";
import { useAuth } from '@/hooks/auth'
import { FaHouseChimneyUser } from "react-icons/fa6";
import { TbGridDots } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";
import './(auth)/Navbar.css';




const LoginLinks = () => {
    const { user } = useAuth({ middleware: 'guest' })

    const [nav, setNav] = useState(false)
    const [navbar, setNavbar] = useState(false);
    const handleClick = () => setNav(!nav)

    const changeBackground = () => {
        if(window.scrollY >=80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener('scroll', changeBackground);
    window.addEventListener('click', (e) => {
        if (e.target !== menuRef.current && e.target !== btnRef.current) {
            setOpen(false);
        }
    });

    return (
        <div className={navbar ? 'navbar active' : 'navbar'}>
            <div className="px-14 flex justify-between items-center w-full h-full">
                <div className="flex items-center text-white">
                    <FaHouseChimneyUser className="h-8 w-auto"/>
                    <div className="hidden md:flex">
                        <Link
                            href="#"
                            className="p-4 rounded hover:bg-orange-100 hover:bg-opacity-40"
                        >
                            خانه
                        </Link>
                        <Link
                            href="#"
                            className="p-4 rounded hover:bg-orange-100 hover:bg-opacity-40"
                        >
                            آژانس‌ها
                        </Link>
                        <Link
                            href="#"
                            className="p-4 rounded hover:bg-orange-100 hover:bg-opacity-40"
                        >
                            مشاوره
                        </Link>
                        <Link
                            href="#"
                            className="p-4 rounded hover:bg-orange-100 hover:bg-opacity-40"
                        >
                            تماس باما
                        </Link>

                    </div>
                </div>
                <div className="hidden md:flex pr-4">
                    <Link
                        href="/login"
                        className="px-5 py-1 text-white border-2 bg-[#152f4d] border-white
        hover:bg-transparent hover:text-[#352d22] rounded-full"
                    >
                        ورود
                    </Link>

                    <Link
                        href="/register"
                        className="px-5 py-1 text-white border-2 bg-transparent border-white
        hover:bg-transparent hover:text-[#352d22] rounded-full"
                    >
                        ثبت نام
                    </Link>


                </div>
                <div className="md:hidden"
                     onClick={handleClick}
                >
                    {!nav ? <TbGridDots className="w-10 text-white"/> : <IoCloseSharp className="w-10 text-white"/>}
                </div>
            </div>
            <div className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
                <Link
                    href="#"
                    className="p-4 border-b-2 border-zinc-300 w-full text-center"
                >
                    خانه
                </Link>
                <Link
                    href="#"
                    className="p-4 border-b-2 border-zinc-300 w-full text-center"
                >
                    آژانس‌ها
                </Link>
                <Link
                    href="#"
                    className="p-4 border-b-2 border-zinc-300 w-full text-center"
                >
                    مشاوره
                </Link>
                <Link
                    href="#"
                    className="p-4 border-b-2 border-zinc-300 w-full text-center"
                >
                    تماس باما
                </Link>

                <div className="flex flex-col my-4">
                    <Link
                        href="/login"
                        className="px-5 py-1 text-white border-2 bg-[#152f4d] border-white
        hover:bg-transparent hover:text-[#352d22] rounded-full"
                    >
                        ورود
                    </Link>

                    <Link
                        href="/register"
                        className="px-5 py-1 text-white border-2 bg-transparent border-white
        hover:bg-transparent hover:text-[#352d22] rounded-full"
                    >
                        ثبت نام
                    </Link>
                </div>
            </div>
        </div>

)
}

export default LoginLinks
