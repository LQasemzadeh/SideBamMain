'use client'

import { useState } from 'react';

const SearchForm = ({ className }) => {
    const tabs = ['خرید', 'فروش', 'اجاره'];
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    const [propertyType, setPropertyType] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [area, setArea] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // handle the form submission
        console.log(propertyType, price, location, area);
    };

    return (
        <div className={`${className}`}>
            <div className="flex space-x-1 justify-center mb-4">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        className={`px-4 py-2 mx-2 rounded-md md:mx-8 ${selectedTab === tab ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                        onClick={() => setSelectedTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div
                className="md:flex flex-row justify-around mt-4 bg-white w-full md:w-3/4 mx-auto p-4 rounded-xl shadow-lg">
                <form onSubmit={handleFormSubmit} className="flex flex-col md:flex-row justify-around w-full">
                    <input
                        type="text"
                        placeholder="نوع ملک"
                        className="my-2 md:mx-2 w-full rounded-xl bg-gray-100 p-2"
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="قیمت"
                        className="my-2 md:mx-2 w-full rounded-xl bg-gray-100 p-2"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="موقعیت"
                        className="my-2 md:mx-2 w-full rounded-xl bg-gray-100 p-2"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="متراژ"
                        className="my-2 md:mx-2 w-full rounded-xl bg-gray-100 p-2"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                    />
                    <button type="submit" className="my-2 md:mx-2 w-full bg-blue-500 text-white rounded-xl py-2">
                        جستجو
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SearchForm;