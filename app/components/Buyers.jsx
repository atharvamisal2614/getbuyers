"use client";
import React from "react";

const buyerCards = [
    {
        id: 1,
        country:'India',
        title: "Fresh Green Coconut And Sugarcane",
        description: "The buyer would like to receive quotations for - Product Name: Fresh Green Coconut And Sugarcane Quantity Required : 1 Ton/Tons Shipping Terms : Air Destination Port : Canada Payment Terms : Bank Transfer Looking for suppliers from : Mexico, Dominican Republic, Costa Rica Contact : Kay",
    },
    {
        id: 2,
        country:'India',
        title: "Fresh Green Coconut And Sugarcane",
        description: "The buyer would like to receive quotations for - Product Name: Fresh Green Coconut And Sugarcane Quantity Required : 1 Ton/Tons Shipping Terms : Air Destination Port : Canada Payment Terms : Bank Transfer Looking for suppliers from : Mexico, Dominican Republic, Costa Rica Contact : Kay",
    },
    {
        id: 3,
        country:'India',
        title: "Fresh Green Coconut And Sugarcane",
        description: "The buyer would like to receive quotations for - Product Name: Fresh Green Coconut And Sugarcane Quantity Required : 1 Ton/Tons Shipping Terms : Air Destination Port : Canada Payment Terms : Bank Transfer Looking for suppliers from : Mexico, Dominican Republic, Costa Rica Contact : Kay",
    },
    {
        id: 4,
        country:'India',
        title: "Fresh Green Coconut And Sugarcane",
        description: "The buyer would like to receive quotations for - Product Name: Fresh Green Coconut And Sugarcane Quantity Required : 1 Ton/Tons Shipping Terms : Air Destination Port : Canada Payment Terms : Bank Transfer Looking for suppliers from : Mexico, Dominican Republic, Costa Rica Contact : Kay",
    },
];

const Buyers = () => {
    return (
        <div className="container mx-auto pb-4 py-24">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-8">
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
                        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
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
    );
};

export default Buyers;
