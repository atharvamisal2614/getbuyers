import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
export default function Careers(){
    return(
    <section className="py-16 bg-cyan-50">
    <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-lg rounded-lg overflow-hidden">

            {/* Left Section */}
            <div className="bg-blue-600 text-white p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Be a Part of Our Dynamic Team!</h2>
                <p className="mb-4">
                    We are always looking for passionate and talented individuals to join us. If you think you have what it takes, fill out the form and attach your resume!
                </p>
                <p className="mb-8">
                    Our hiring team will review your application and get back to you if there's a suitable opportunity.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <FaEnvelope size={25} className=" text-white mr-4" />
                        <span>careers@example.com</span>
                    </div>
                    <div className="flex items-center">
                        <FaPhoneAlt size={25} className="text-green-300 mr-4" />
                        <span>+123 456 7890</span>
                    </div>
                    <div className="flex items-center">
                        <FaMapMarkerAlt size={25} className="text-red-500 mr-4" />
                        <span>123 Hiring Street, City, Country</span>
                    </div>
                    <div className="flex items-center">
                        <FaWhatsapp size={25} className="text-green-400 mr-4" />
                        <span>Chat with us on WhatsApp</span>
                    </div>
                </div>
            </div>

            {/* Right Section - White Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="contact">
                            Contact
                        </label>
                        <input
                            type="text"
                            id="contact"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="resume">
                            Attach Resume
                        </label>
                        <input
                            type="file"
                            id="resume"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="message">
                            Cover Letter / Message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Apply Now
                    </button>
                </form>
            </div>

        </div>
    </div>
</section>
)}