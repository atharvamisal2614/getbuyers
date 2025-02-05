// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const AboutUs = () => {
//   return (
//     <div className="w-full">
    
//       <section className="relative w-full h-screen flex items-center justify-center text-white bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
//         <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center animate-fadeIn">
//           <h1 className="text-5xl font-bold">Empowering Innovation, Transforming Lives</h1>
//           <p className="text-lg mt-4">Our mission is to drive impactful change through technology and creativity.</p>
//         </div>
//       </section>
      
    
//       <section className="py-16 px-8 max-w-6xl mx-auto text-center">
//         <motion.h2 className="text-4xl font-bold mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>Our Story</motion.h2>
//         <p className="text-lg text-gray-700">From a small team with big dreams to an industry leader, we have been redefining success through innovation and dedication.</p>
//       </section>
      
  
//       <section className="py-16 bg-gray-100 px-8">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
//           {["Our Mission", "Our Vision"].map((title, index) => (
//             <motion.div key={index} className="p-6 shadow-lg rounded-lg bg-white" whileHover={{ scale: 1.05 }}>
//               <h2 className="text-3xl font-bold">{title}</h2>
//               <p className="text-gray-700 mt-4">{index === 0 ? "To revolutionize industries through cutting-edge solutions." : "Creating a world where technology seamlessly enhances lives."}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>
      
   
//       <section className="py-16 px-8 text-center">
//         <h2 className="text-4xl font-bold mb-6">Our Values</h2>
//         <div className="grid md:grid-cols-4 gap-8">
//           {['Innovation', 'Integrity', 'Customer Focus', 'Excellence'].map((value, index) => (
//             <motion.div key={index} className="p-6 shadow-lg rounded-lg bg-white" whileHover={{ scale: 1.05 }}>
//               <h3 className="text-2xl font-semibold">{value}</h3>
//             </motion.div>
//           ))}
//         </div>
//       </section>
      
 
//       <section className="py-16 bg-gray-100 px-8 text-center">
//         <h2 className="text-4xl font-bold mb-6">Meet the Team</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {[1, 2, 3].map((id) => (
//             <motion.div key={id} className="shadow-lg p-6 rounded-lg bg-white" whileHover={{ scale: 1.05 }}>
//               <Image src={`/images/team${id}.jpg`} alt="Team Member" width={150} height={150} className="rounded-full mx-auto" />
//               <h3 className="text-xl font-semibold mt-4">Team Member {id}</h3>
//               <p className="text-gray-600">Role {id}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>
      
   
//       <section className="py-16 px-8 text-center">
//         <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
//         <motion.p className="text-lg text-gray-700" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
//           We combine expertise, innovation, and commitment to deliver outstanding solutions.
//         </motion.p>
//       </section>
      
    
//       <section className="py-16 bg-blue-600 text-white text-center px-8">
//         <h2 className="text-4xl font-bold mb-6">Join Us in Our Journey</h2>
//         <p className="text-lg">Let’s innovate and build the future together.</p>
//         <motion.button className="mt-6 bg-white text-blue-600 px-6 py-3 font-semibold rounded-lg" whileHover={{ scale: 1.1 }}>
//           Get in Touch
//         </motion.button>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;
