"use client";
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        id: 1,
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptate suscipit atque sequi explicabo numquam, nostrum aut rerum dignissimos! Enim, libero illo! Cum, eos fugiat quas assumenda tempore provident veritatis!`,
        name: "John Doe",
        rating: 5,

    },
    {
        id: 2,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptate suscipit atque sequi explicabo numquam, nostrum aut rerum dignissimos! Enim, libero illo! Cum, eos fugiat quas assumenda tempore provident veritatis!",
        name: "John Doe",

        rating: 5,
    },
    {
        id: 3,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptate suscipit atque sequi explicabo numquam, nostrum aut rerum dignissimos! Enim, libero illo! Cum, eos fugiat quas assumenda tempore provident veritatis!",
        name: "John Doe",

        rating: 5,
    },
    {
        id: 4,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptate suscipit atque sequi explicabo numquam, nostrum aut rerum dignissimos! Enim, libero illo! Cum, eos fugiat quas assumenda tempore provident veritatis!",
        name: "John Doe",
        rating: 5,
    },
    {
        id: 5,
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptate suscipit atque sequi explicabo numquam, nostrum aut rerum dignissimos! Enim, libero illo! Cum, eos fugiat quas assumenda tempore provident veritatis!`,
        name: "John Doe",
        rating: 5,
    },
];

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
   
    };

    return (
        <section className="relative body-font pb-4 py-5 bg-cyan-50">
            <div className="container max-w-7xl relative z-10 px-5 py-6 mx-auto">
            <h2 className="text-xl md:text-3xl font-bold text-center text-blue-600 mb-8">
          Client&apos;s Feedback: <span className="text-black italic">Our Heritage</span>
        </h2>
                <Slider
                    {...{
                        dots: true,
                        infinite: true,
                        speed: 1000,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows:false
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center lg:text-center sm:text-justify px-5 lg:px-10"
                        >
                            <p className="leading-relaxed text-lg text-justify md:text-center sm:text-justify">
                                {testimonial.text}
                            </p>
                            <div className="flex justify-center mb-4">
                                {Array.from({ length: testimonial.rating }, (_, index) => (
                                    <svg
                                        key={index}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-5 h-5 text-yellow-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>
                            <h2 className="text-blue-600 font-bold title-font tracking-wider text-md">{testimonial.name}</h2>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="flex justify-center mt-8">
        <button className="bg-transparent p-3 rounded-md border border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 transition ease-in-out duration-300">
          Add Reviews
        </button>
      </div>
        </section>

    );
}
export default Testimonials;