'use client'

import Link from 'next/link';
import React, { useRef, useState, useEffect } from "react";
import { useAuth } from '@/hooks/auth';
import { PiHouseLineBold } from "react-icons/pi";
import { FaHouseUser } from "react-icons/fa6";
import BottomNavigation from 'reactjs-bottom-navigation';
import { HiSearch } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { RiMenuLine } from "react-icons/ri";
import 'reactjs-bottom-navigation/lib/cjs/index.css';
import './(auth)/Navbar.css';

const bottomNavItems = [
    {
        title: 'Home',
        icon: <PiHouseLineBold style={{ fontSize: '18px' }} />,
        activeIcon: <PiHouseLineBold style={{ fontSize: '18px', color: '#9c2648' }} />,
        link: '/', // Link for Home
    },
    {
        title: 'Search',
        icon: <HiSearch style={{ fontSize: '18px' }} />,
        activeIcon: <HiSearch style={{ fontSize: '18px', color: '#fff' }} />,
        link: '/search', // Link for Search
    },
    {
        title: 'Notifications',
        icon: <CgProfile style={{ fontSize: '18px' }} />,
        activeIcon: <CgProfile style={{ fontSize: '18px', color: '#fff' }} />,
        link: '/notifications', // Link for Notifications
    },
    {
        title: 'Menu',
        icon: <RiMenuLine style={{ fontSize: '18px' }} />,
        activeIcon: <RiMenuLine style={{ fontSize: '18px', color: '#fff' }} />,
        onClick: () => alert('Menu clicked'), // Add your own menu handling
    }
]


const LoginLinks = () => {
    const { user } = useAuth({ middleware: 'guest' })

    const [nav, setNav] = useState(false)
    const [navbar, setNavbar] = useState(false);
    const [activeNavIndex, setActiveNavIndex] = useState(0);


    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= 80) {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        };

        window.addEventListener('scroll', changeBackground);

        // Cleanup the event listener
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    return (
        <div>
            <div className={navbar ? 'navbar active' : 'navbar'}>
                <div className="px-14 flex justify-between items-center w-full h-full">
                    <div className="flex items-center text-white">
                        <FaHouseUser className="h-8 w-auto text-blue-500"/>
                        <h2 className="px-2 font-extrabold text-blue-500">سایدبام</h2>
                        <div className="hidden md:flex">
                            <Link href="#" className="p-4 rounded hover:bg-orange-100 hover:bg-opacity-40">خانه</Link>
                            <Link href="#"
                                  className="p-4 rounded hover:bg-orange-100 hover:bg-opacity-40">آژانس‌ها</Link>
                            <Link href="#" className="p-4 rounded hover:bg-orange-100 hover:bg-opacity-40">مشاوره</Link>
                            <Link href="#" className="p-4 rounded hover:bg-orange-100 hover:bg-opacity-40">تماس
                                باما</Link>
                        </div>
                    </div>
                    <div className="md:flex pr-4">
                        <Link href="/login"
                              className="px-5 py-1 text-white border-2 bg-blue-500 border-white hover:bg-white hover:text-blue-500 hover:border-blue-500 rounded-full">ورود</Link>
                        <Link href="/register"
                              className="px-5 py-1 text-white border-2 bg-transparent border-white hover:text-blue-500 hover:border-blue-500 rounded-full">ثبت
                            نام</Link>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}

        </div>

    )
}

export default LoginLinks
