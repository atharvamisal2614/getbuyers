"use client";
import React from "react";
import { FaShippingFast, FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { FaCartFlatbed, } from "react-icons/fa6";




const buyerCards = [
    {
        id: 1,
        country: 'India',
        title: "Fresh Green Coconut And Sugarcane",
        description: "The buyer would like to receive quotations for - Product Name: Fresh Green Coconut And Sugarcane Quantity Required : 1 Ton/Tons Shipping Terms : Air Destination Port : Canada Payment Terms : Bank Transfer Looking for suppliers from : Mexico, Dominican Republic, Costa Rica Contact : Kay",
    },
    {
        id: 2,
        country: 'China',
        title: "Fresh Green Coconut And Sugarcane",
        description: "The buyer would like to receive quotations for - Product Name: Fresh Green Coconut And Sugarcane Quantity Required : 1 Ton/Tons Shipping Terms : Air Destination Port : Canada Payment Terms : Bank Transfer Looking for suppliers from : Mexico, Dominican Republic, Costa Rica Contact : Kay",
    },
    {
        id: 3,
        country: 'USA',
        title: "Fresh Green Coconut And Sugarcane",
        description: "The buyer would like to receive quotations for - Product Name: Fresh Green Coconut And Sugarcane Quantity Required : 1 Ton/Tons Shipping Terms : Air Destination Port : Canada Payment Terms : Bank Transfer Looking for suppliers from : Mexico, Dominican Republic, Costa Rica Contact : Kay",
    },
    {
        id: 4,
        country: 'India',
        title: "Fresh Green Coconut And Sugarcane",
        description: "The buyer would like to receive quotations for - Product Name: Fresh Green Coconut And Sugarcane Quantity Required : 1 Ton/Tons Shipping Terms : Air Destination Port : Canada Payment Terms : Bank Transfer Looking for suppliers from : Mexico, Dominican Republic, Costa Rica Contact : Kay",
    },
];

const Buyers = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const TodaysDate = `${day}/${month}/${year}`
    return (
        <section className="pb-4 py-16 bg-cyan-50">
            <div className="container mx-auto pb-4 ">
                <h2 className="text-xxl md:text-3xl font-bold text-center text-blue-600 mb-4">
                    Real-time Buyers: <span className="text-black italic">Connect Them</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {buyerCards.map((card) => (
                        <div
                            key={card.id}
                            className="rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-xl font-bold mb-2">I Need : {card.title} </h3>
                            <h2 className="text-lg font-semibold mb-2">Buyer From : {card.country}</h2>
                            <p className="text-gray-600 mb-4">{card.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-6">
                                <div className="flex items-center gap-2"><FaShippingFast size={25} className="text-blue-600" /><span className="text-gray-800 font-bold">Shipping Terms: </span>CIF</div>
                                <div className="flex items-center gap-2"><IoMdGlobe size={25} className="text-blue-600" /><span className="text-gray-800 font-bold">Destination: </span>Across Globe</div>
                                <div className="flex items-center gap-2"><IoCalendarNumberSharp size={25} className="text-blue-600" /><span className="text-gray-800 font-bold">Date: </span>{TodaysDate}</div>
                                <div className="flex items-center gap-2"><HiOutlineCurrencyDollar size={25} className="text-blue-600" /><span className="text-gray-800 font-bold">Target Prices: </span>Negotiable</div>
                                <div className="flex items-center gap-2"><FaCartFlatbed size={25} className="text-blue-600" /> <span className="text-gray-800 font-bold">Quantity: </span>1,000 Boxes </div>
                                <div className="flex items-center gap-2"><FaShieldAlt size={25} className="text-blue-600" /> <span className="text-gray-800 font-bold">Verified Buyer: </span><span className="text-blue-600"><FaCheckCircle size={20} /></span></div>
                            </div>
                            <button className="bg-blue-600 mt-3 text-white py-2 px-4 rounded text-center hover:bg-blue-700">
                                Connect with Buyer
                            </button>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <button className="bg-transparent p-3 rounded-md border border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 transition ease-in-out duration-300">
                        Explore More
                    </button>
                </div>
            </div>
        </section>
    );
};
export default Buyers;
