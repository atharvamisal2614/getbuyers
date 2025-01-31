"use client";
import React from "react";
const Navbar = () => {
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
              <a href="/" className="flex items-center space-x-2">
                <img
                  src="/images/dummy-logo.png"
                  alt="Logo"
                  className="w-28 h-12"
                />
              </a>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex space-x-6 ">
              <ul className="flex items-center space-x-8 text-lg">
                <li>
                  <a
                    href="/"
                    className="hover:text-blue-400"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/exportimportdata"
                    className="hover:text-blue-400"
                  >
                    Export-Import Data
                  </a>
                </li>
                <li>
                  <a
                    href="/HSCodes"
                    className="block px-4 py-2 hover:text-blue-400 "
                  >
                    HS Code
                  </a>
                </li>
                <li>
                  <a
                    href="/why_us.html"
                    className="hover:text-blue-400"
                  >
                    Real-time Suppliers
                  </a>
                </li>
                <li>
                  <a
                    href="/process.htm"
                    className="hover:text-blue-400"
                  >
                    Real-time Buyers
                  </a>
                </li>
                <li>
                  <a
                    href="/achievements.htm"
                    className="block px-4 py-2 hover:text-blue-400 "
                  >
                    Why Trust Us?
                  </a>
                </li>
                <li>
                  <a
                    href="/certifications.html"
                    className="block px-4 py-2 hover:text-blue-400 "
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/contacts.html"
                    className="text-white bg-blue-600 p-3 rounded-xl"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </nav>
            <select
              className="block md:hidden border border-gray-300 bg-white text-blue-600 font-bold rounded p-2"
              onChange={(e) => {
                window.location.href = e.target.value;
              }}
            >
              <option value="/">Navigate to...</option>
              <option value="/">Home</option>
              <option value="/exportImportData">Export-Import Data</option>
              <option value="/products.html">Real-time Buyers</option>
              <option value="/process.htm">Real-time Suppliers</option>
              <option value="/facilities.htm">HS Codes</option>
              <option value="/why_us.html">Why trust Us?</option>
              <option value="/contacts.html">Login</option>
            </select>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
