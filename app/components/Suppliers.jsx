"use client";
import React from "react";

const cards = [
  {
    id: 1,
    image: "/images/dummy.png",
    title: "Card Title 1",
    description: "This is a brief description of the card content.",
  },
  {
    id: 2,
    image: "/images/dummy.png",
    title: "Card Title 2",
    description: "This is a brief description of the card content.",
  },
  {
    id: 3,
    image: "/images/dummy.png",
    title: "Card Title 3",
    description: "This is a brief description of the card content.",
  },
  {
    id: 4,
    image: "/images/dummy.png",
    title: "Card Title 4",
    description: "This is a brief description of the card content.",
  },
];

const Suppliers = () => {
  return (
    <section className="pb-4 md:py-16 bg-cyan-50">
    <div className="container mx-auto pb-4 py-16 bg-cyan-50">
      <h2 className="text-xl md:text-3xl font-bold text-center text-blue-600 mb-8">
        Real-time Suppliers: <span className="text-black italic">Connect Them</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Connect with Supplier
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Centered Explore More Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-transparent p-3 rounded-md border border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 transition ease-in-out duration-300">
          Explore More
        </button>
      </div>
    </div>
    </section>
  );
};

export default Suppliers;
