import Buyers from "./components/Buyers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HomeCarousel from "./components/HomeCarousel";
import Navbar from "./components/Navbar";
import Suppliers from "./components/Suppliers";
import Testimonials from "./components/Testimonials";

import WhyUs from "./components/WhyUs";
export default function Home() {
  return (
    <>
 
      <HomeCarousel />
      <WhyUs />
      <Suppliers />
      <Buyers />
      <Contact />
      <Testimonials />

    </>
  );
}
