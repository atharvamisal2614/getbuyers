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
          <p>IIEIM, 801 Regus, World Trade Center, Kharadi, Pune - 111111, Maharashtra, India</p>
        </div>
        <div>
          <h6 className="text-lg font-semibold mb-4">Follow Us</h6>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-xl text-blue-600">
              <FaFacebookF size={25} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-xl text-sky-500">
              <FaTwitter size={25}/>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-xl text-pink-600">
              <FaInstagram size={25}/>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-xl text-red-500">
              <FaYoutube size={25}/>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-xl text-blue-800">
              <FaLinkedinIn size={25}/>
            </a>
          </div>
        </div>

        <div>
          <h6 className="text-lg font-semibold mb-4">Information</h6>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="/countries" className="hover:text-gray-300">Countries</a></li>
            <li><a href="/term-condition" className="hover:text-gray-300">Terms and Conditions</a></li>
            <li><a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Disclaimer</a></li>
          </ul>
        </div>

        <div>
          <h6 className="text-lg font-semibold mb-4">Customer</h6>
          <ul className="space-y-2">
            <li><a href="https://shop.tradebridge.co.in/login" className="hover:text-gray-300">Log In</a></li>
            <li><a href="https://shop.tradebridge.co.in/create-account" className="hover:text-gray-300">Register For Free</a></li>
            <li><a href="https://shop.tradebridge.co.in/recover-password" className="hover:text-gray-300">Pricing</a></li>
          </ul>
        </div>
        
      </div>

      <div className="bg-gray-800 py-4">
        <div className="text-center text-sm">
          <p>
            IIEIM {' '}
            {currentYear}
            . All Rights Reserved. Design and Developed By
            <a href="https://innovuratech.com/" target="_blank" rel="noopener noreferrer" className="text-white underline ml-1">Get Buyers</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
