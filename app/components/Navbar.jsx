// "use client";
// import React from "react";
// import Link from "next/link";
// const Navbar = () => {
//   return (
//     <div
//       id="header-row"
//       className="z-50 fixed top-0 left-0 w-full bg-cyan-50 text-blue-600 font-bold shadow-md"
//     >
//       <div className="container mx-auto px-4">
//         <header className="py-4">
//           <div className="flex items-center justify-between">
//             {/* Logo Section */}
//             <div id="logo" className="flex items-center space-x-3">
//               <a href="/" className="flex items-center space-x-2">
//                 <img
//                   src="/images/dummy-logo.png"
//                   alt="Logo"
//                   className="w-28 h-12"
//                 />
//               </a>
//             </div>

//             {/* Navigation Menu */}
//             <nav className="hidden md:flex space-x-6 ">
//               <ul className="flex items-center space-x-8 text-lg">
//                 <li>
//                   <a
//                     href="/"
//                     className="hover:text-blue-400"
//                   >
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/exportimportdata"
//                     className="hover:text-blue-400"
//                   >
//                     Export-Import Data
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/HSCodes"
//                     className="block px-4 py-2 hover:text-blue-400 "
//                   >
//                     HS Code
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/why_us.html"
//                     className="hover:text-blue-400"
//                   >
//                     Real-time Suppliers
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/process.htm"
//                     className="hover:text-blue-400"
//                   >
//                     Real-time Buyers
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/achievements.htm"
//                     className="block px-4 py-2 hover:text-blue-400 "
//                   >
//                     Why Trust Us?
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/certifications.html"
//                     className="block px-4 py-2 hover:text-blue-400 "
//                   >
//                     Pricing
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/contacts.html"
//                     className="text-white bg-blue-600 p-3 rounded-xl"
//                   >
//                     Login
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//             <select
//               className="block md:hidden border border-gray-300 bg-white text-blue-600 font-bold rounded p-2"
//               onChange={(e) => {
//                 window.location.href = e.target.value;
//               }}
//             >
//               <option value="/">Navigate to...</option>
//               <option value="/">Home</option>
//               <option value="/exportImportData">Export-Import Data</option>
//               <option value="/products.html">Real-time Buyers</option>
//               <option value="/process.htm">Real-time Suppliers</option>
//               <Link href={'/HScodes'}>
//               <option>HS Codes</option>
//               </Link>
        
//               <option value="/why_us.html">Why trust Us?</option>
//               <option value="/contacts.html">Login</option>
//             </select>
//           </div>
//         </header>
//       </div>
//     </div>
//   );
// };

// export default Navbar;






"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      id="header-row"
      className="z-50 fixed top-0 left-0 w-full bg-cyan-50 text-blue-600 font-bold shadow-md"
    >
      <div className="container mx-auto px-4">
        <header className="py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div id="logo" className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-2">
                <img
                  src="/images/dummy-logo.png"
                  alt="Logo"
                  className="w-28 h-12"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <ul className="flex items-center space-x-8 text-lg">
                <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
                <li><Link href="/exportimportdata" className="hover:text-blue-400">Export-Import Data</Link></li>
                <li><Link href="/HSCodes" className="hover:text-blue-400">HS Code</Link></li>
                <li><Link href="/why_us.html" className="hover:text-blue-400">Real-time Suppliers</Link></li>
                <li><Link href="/process.htm" className="hover:text-blue-400">Real-time Buyers</Link></li>
                <li><Link href="/achievements.htm" className="hover:text-blue-400">Why Trust Us?</Link></li>
                <li><Link href="/certifications.html" className="hover:text-blue-400">Pricing</Link></li>
                <li><Link href="/contacts.html" className="text-white bg-blue-600 p-3 rounded-xl">Login</Link></li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-blue-600 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </header>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <nav className="md:hidden bg-white shadow-md absolute top-full left-0 w-full p-4">
            <ul className="flex flex-col space-y-4 text-lg">
              <li><Link href="/" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link href="/exportimportdata" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Export-Import Data</Link></li>
              <li><Link href="/HSCodes" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>HS Code</Link></li>
              <li><Link href="/why_us.html" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Real-time Suppliers</Link></li>
              <li><Link href="/process.htm" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Real-time Buyers</Link></li>
              <li><Link href="/achievements.htm" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Why Trust Us?</Link></li>
              <li><Link href="/certifications.html" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Pricing</Link></li>
              <li><Link href="/contacts.html" className="text-white bg-blue-600 p-3 rounded-xl" onClick={() => setIsOpen(false)}>Login</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
