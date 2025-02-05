import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h6 className="text-lg font-semibold mb-4">Corporate Office</h6>
          <p className="mb-2">Gey Buyers</p>
          <p>IIEIM, 801 Regus, World Trade Center, Kharadi, Pune - 411014, Maharashtra, India.</p>
        </div>
        <div>
          <h6 className="text-lg font-semibold mb-4">Information</h6>
          <ul className="space-y-2">
        
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/dummy" className="hover:text-gray-300">About Us</Link></li>
            
            <li><Link href="/dummy" className="hover:text-gray-300">Get Real-time Buyers</Link></li>
            <li><Link href="/dummy" className="hover:text-gray-300">Get Real-time Sellers</Link></li>
            <li><Link href="/HSCodes" className="hover:text-gray-300">HS Codes</Link></li>
            <li><Link href="/exportimportdata" className="hover:text-gray-300">Export Import Data</Link></li>
            <li><Link href="/dummy" className="hover:text-gray-300">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h6 className="text-lg font-semibold mb-4">Legal</h6>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-gray-300">Privacy Policy</Link></li>
            <li><Link href="/countries" className="hover:text-gray-300">Terms & Conditions</Link></li>
            <li><Link href="/term-condition" className="hover:text-gray-300">Refund Policy</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-gray-300">Disclaimer</Link></li>
          </ul>
        </div>
        <div>
          <h6 className="text-lg font-semibold mb-4">Customer</h6>
          <ul className="space-y-2">
            <li><Link href="https://shop.tradebridge.co.in/login" className="hover:text-gray-300">Log In</Link></li>
            <li><Link href="https://shop.tradebridge.co.in/create-account" className="hover:text-gray-300">Register For Free</Link></li>
            <li><Link href="https://shop.tradebridge.co.in/recover-password" className="hover:text-gray-300">Pricing</Link></li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-800 py-6 flex flex-col items-center justify-center">
        <div className="flex space-x-6 mb-4">
          <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-xl text-blue-600">
            <FaFacebookF size={28} />
          </Link>
          <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-xl text-sky-500">
            <FaTwitter size={28} />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-xl text-pink-600">
            <FaInstagram size={28} />
          </Link>
          <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-xl text-red-500">
            <FaYoutube size={28} />
          </Link>
          <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-xl text-sky-700">
            <FaLinkedinIn size={28} />
          </Link>
        </div>
        <p className="text-sm text-center">
          IIEIM &copy; {currentYear}. All Rights Reserved. Designed and Developed By
          <Link href="" target="_blank" rel="noopener noreferrer" className="text-white underline ml-1">Get Buyers</Link>
        </p>
      </div>
    </footer>
  );
}