"use client";
import React from "react";
import Image from "next/image";
import { AiFillTrophy } from "react-icons/ai";
import { FaUsers, FaStar } from "react-icons/fa";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
const AboutUs = () => {
    const teamMembers = [
        {
            name: "John Doe",
            designation: "CEO & Founder",
            image: "/images/founder.jpg",
            bg: "bg-blue-600",
            textColor: "text-white",
            description:
                "John is a visionary leader with 15+ years of experience in the tech industry. He believes in fostering innovation and driving the company forward.",
        },
        {
            name: "Jane Smith",
            designation: "Chief Technology Officer",
            image: "/images/founder.jpg",
            bg: "bg-white",
            textColor: "text-black",
            description:
                "Jane leads our engineering team, ensuring that we build scalable and robust solutions while embracing the latest technologies.",
        },
        {
            name: "David Brown",
            designation: "Head of Marketing",
            image: "/images/founder.jpg",
            bg: "bg-white",
            textColor: "text-black",
            description:
                "David is a marketing expert with a deep understanding of brand strategy and customer engagement, bringing creativity to the forefront.",
        },
        {
            name: "Emily White",
            designation: "Product Manager",
            image: "/images/founder.jpg",
            bg: "bg-blue-600",
            textColor: "text-white",
            description:
                "Emily is dedicated to delivering the best user experience by overseeing product development and ensuring customer satisfaction.",
        },
    ];

    return (
        <div className="w-full">
            {/* About Us Section  */}
            <section className="relative w-full min-h-screen flex items-center justify-center bg-cyan-50 p-4 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[90%] h-auto md:h-3/4 lg:h-2/3 shadow-lg rounded-lg overflow-hidden">
                    <div className="flex flex-col justify-start items-start bg-white p-10 md:p-20">
                        <h1 className="text-3xl md:text-5xl  text-blue-600 mb-6 md:mb-8">About Us</h1>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius explicabo optio quibusdam aspernatur possimus veritatis omnis, nam minus architecto eveniet ab molestiae fuga magnam maiores mollitia atque eligendi nesciunt eos.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed mt-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, vitae ipsa, nemo saepe distinctio sequi dolorum excepturi amet ipsam, corrupti dolorem architecto. Nesciunt soluta vel quisquam autem facere beatae voluptates.
                        </p>
                    </div>

                    <div className="flex flex-col justify-start items-start bg-blue-600 p-10 md:p-20">
                        <h1 className="text-3xl md:text-5xl text-white mb-6 md:mb-8">What We Do</h1>
                        <p className="text-white text-lg leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, beatae quod id accusamus aliquam natus corrupti quis illo quas, laudantium a illum aperiam suscipit consequuntur dolor nostrum. Velit, magni consequatur.
                        </p>
                        <p className="text-white text-lg leading-relaxed mt-4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis praesentium, earum illo sit quia aliquid consequatur ipsa hic quaerat, quo quae voluptas doloribus eaque? In ut accusamus quod. Repellat, harum.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story section */}
            <section className="relative w-full min-h-screen flex items-center justify-center bg-cyan-50 p-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[90%] h-auto md:h-3/4 lg:h-2/3 shadow-lg rounded-lg overflow-hidden">
                    <div className="w-full flex flex-col justify-start items-start bg-blue-600 p-10 md:p-20">
                        <h1 className="text-3xl md:text-5xl text-white mb-6 md:mb-8">Our Growth Strategy</h1>
                        <ul className="text-white text-lg leading-relaxed list-decimal pl-6">
                            <li>Commitment to innovation and excellence</li>
                            <li>Customer-centric approach</li>
                            <li>Strong teamwork and collaboration</li>
                            <li>Continuous learning and growth</li>
                            <li>Effective leadership and vision</li>
                            <li>Adaptability to change</li>
                            <li>Quality-driven mindset</li>
                            <li>Ethical and responsible business practices</li>
                            <li>Leveraging technology and data</li>
                            <li>Building strong relationships with partners and clients</li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-start items-start bg-white p-10 md:p-20 ">
                        <h1 className="text-3xl md:text-5xl text-blue-600 mb-6">Our Success Story</h1>
                        <p className="text-gray-800 text-lg leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, beatae quod id accusamus aliquam natus corrupti quis illo quas, laudantium a illum aperiam suscipit consequuntur dolor nostrum. Velit, magni consequatur.
                        </p>
                        <p className="text-gray-800 text-lg leading-relaxed mt-4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis praesentium, earum illo sit quia aliquid consequatur ipsa hic quaerat, quo quae voluptas doloribus eaque? In ut accusamus quod. Repellat, harum.
                        </p>
                    </div>
                </div>
            </section>


            <section className="relative w-full min-h-screen flex items-center justify-center bg-cyan-50 p-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-[90%] h-auto md:h-3/4 lg:h-2/3 shadow-lg rounded-lg overflow-hidden">

                    {/* Mission Section */}
                    <div className="flex flex-col justify-start items-center bg-white p-8 md:p-20 text-center">
                        <div className="flex flex-col items-center gap-2 mb-4">
                            <BsFillRocketTakeoffFill className="text-blue-600 text-5xl" />
                            <h1 className="text-2xl md:text-4xl text-blue-600">Our Mission</h1>
                        </div>
                        <p className="text-gray-700 text-base md:text-lg text-justify leading-relaxed">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius explicabo optio quibusdam aspernatur possimus veritatis omnis, nam minus architecto eveniet ab molestiae fuga magnam maiores mollitia atque eligendi nesciunt eos.
                        </p>
                        <p className="text-gray-700 text-base md:text-lg text-justify leading-relaxed mt-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, vitae ipsa, nemo saepe distinctio sequi dolorum excepturi amet ipsam, corrupti dolorem architecto. Nesciunt soluta vel quisquam autem facere beatae voluptates.
                        </p>
                    </div>

                    {/* Vision Section */}
                    <div className="flex flex-col justify-start items-center bg-blue-600 p-8 md:p-20 text-center">
                        <div className="flex flex-col items-center gap-2 mb-4">
                            <AiFillTrophy className="text-white text-5xl" />
                            <h1 className="text-2xl md:text-4xl text-white">Our Vision</h1>
                        </div>
                        <p className="text-white text-base md:text-lg text-justify leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, beatae quod id accusamus aliquam natus corrupti quis illo quas, laudantium a illum aperiam suscipit consequuntur dolor nostrum. Velit, magni consequatur.
                        </p>
                        <p className="text-white text-base md:text-lg text-justify leading-relaxed mt-4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis praesentium, earum illo sit quia aliquid consequatur ipsa hic quaerat, quo quae voluptas doloribus eaque? In ut accusamus quod. Repellat, harum.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Values section  */}
            <section className="relative w-full min-h-screen flex items-center justify-center bg-cyan-50 p-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-11/12 md:w-[90%] shadow-lg rounded-lg overflow-hidden">


                    <div className="flex flex-col justify-start items-center bg-blue-600 p-8 text-center">

                        <FaLightbulb className="text-white text-5xl mb-4" />
                        <h1 className="text-2xl md:text-3xl text-white">Innovation</h1>
                        <p className="text-white text-base md:text-lg text-justify leading-relaxed mt-4">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sed tempora facere incidunt aut impedit tenetur delectus modi, similique minus sint illo aperiam unde magni, quibusdam vero et voluptas atque.
                        </p>
                    </div>

                    <div className="flex flex-col justify-start items-center bg-white p-8 text-center">
                        <IoDiamond className="text-blue-600 text-5xl mb-4" />
                        <h1 className="text-2xl md:text-3xl text-blue-600">Integrity</h1>
                        <p className="text-gray-700 text-base md:text-lg text-justify leading-relaxed mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatem voluptatum est veniam voluptate consequuntur nostrum facilis, esse a nesciunt optio debitis. Quo repudiandae, repellendus eaque a unde quidem quis.
                        </p>
                    </div>


                    <div className="flex flex-col justify-start items-center bg-white p-8 text-center">
                        <FaUsers className="text-blue-600 text-5xl mb-4" />
                        <h1 className="text-2xl md:text-3xl text-blue-600">Customer Focus</h1>
                        <p className="text-gray-700 text-base md:text-lg text-justify leading-relaxed mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta mollitia magnam dolores ipsum provident consequatur praesentium atque in laborum dolorem voluptatum accusantium dolorum, nobis quis laudantium odit consectetur nihil voluptatem?
                        </p>
                    </div>

                    <div className="flex flex-col justify-start items-center bg-blue-600 p-8 text-center">
                        <FaStar className="text-white text-5xl mb-4" />
                        <h1 className="text-2xl md:text-3xl text-white">Excellence</h1>
                        <p className="text-white text-base md:text-lg text-justify leading-relaxed mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis incidunt praesentium iste voluptate cum nostrum eligendi accusamus labore dignissimos harum sapiente, tempore deserunt deleniti quae quasi perferendis? Quas, perspiciatis totam!
                        </p>
                    </div>

                </div>
            </section>




            {/* Meet Our Team  */}
            <section className="relative w-full min-h-screen flex items-center justify-center bg-cyan-50 p-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-11/12 md:w-[90%] shadow-lg rounded-lg overflow-hidden">
                    {teamMembers.map((member, index) => (
                        <div key={index} className={`flex flex-col justify-start items-center ${member.bg} p-5 text-center`}>
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={120}
                                height={120}
                                className="rounded-full border-4 border-gray-200 shadow-lg"
                            />
                            <h1 className={`text-xl md:text-xl font-semibold mt-4 ${member.textColor}`}>{member.name}</h1>
                            <h2 className={`text-lg md:text-xl  mt-2 ${member.textColor}`}>
                                {member.designation}
                            </h2>
                            <p className={`text-base md:text-lg text-justify leading-relaxed mt-4 ${member.textColor} opacity-90`}>
                                {member.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section
                className="relative w-full h-[40vh] md:h-[70vh] bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/images/analyze.jpg')" }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-50 via-gray-500/60 to-gray-800"></div>

                {/* Content Container */}
                <div className="relative w-[10%] md:w-[40%] mx-auto md:ml-32 p-6 rounded-lg shadow-2xl ">
                    <h2 className="text-2xl md:text-5xl font-bold text-white">Join Us</h2>
                    <p className="mt-2 text-gray-200 text-sm md:text-lg text-justify">
                        Join our dynamic team and be part of an innovative, fast-paced environment where creativity and collaboration drive success.
                        Grow your skills, work on exciting projects, and make a real impact with us!
                    </p>
                    <button className="mt-4 p-3 bg-transparent text-white rounded-lg border border-white hover:bg-white hover:text-gray-900 transition">
                        Click Here
                    </button>
                </div>
            </section>

        </div>
    );
};

export default AboutUs;
