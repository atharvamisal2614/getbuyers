import HomeCarousel from "./components/HomeCarousel";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

import WhyUs from "./components/WhyUs";
export default function Home() {
  return (
    <>
<Navbar />
<HomeCarousel />
<WhyUs />
<Testimonials />
</>
  );
}
