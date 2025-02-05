"use client";
import Link from "next/link";
const PrivacyPolicy = () => {
    return (
        <>
            <section className="bg-cyan-50 min-h-screen pb-4 py-24">
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg">
                    <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
                        Privacy Policy
                    </h1>
                    <section className="space-y-6 text-justify">
                        <p>
                            Welcome to <Link  href={'/'} className="text-blue-600 underline">www.abc.com</Link> (hereinafter referred to as "Website"),
                            owned and operated by abc.com based 
                            on <Link href={'/'} className="text-blue-500 underline">abc.com</Link>,
                            based in Pune, India. We value your privacy and are committed
                            to protectingy our personal information. This Privacy Policy
                            outlines how we collect, use, disclose, and safeguard your
                            information when you visit our website.
                        </p>

                        <h2 className="text-lg md:text-2xl font-semibold text-blue-600">
                            1. Information We Collect
                        </h2>
                        <h3 className="text-xl font-semibold">Personal Information</h3>
                        <p>
                            We may collect perosnal information such as your name, email
                            address, contact number, and company details when you register
                            on our website, place an order, subscribe to our newsletter,
                            fill out a form, or interact with us in any other way.
                        </p>


                        <h3 className="text-xl font-semibold">Non-Personal Information</h3>
                        <p>
                            We may also collect mom-personal information including but not
                            limited to your browser type, IP address, time zone, and browsing
                            behaviour on our website.
                        </p>

                        <h3 className="text-lg md:text-2xl font-semibold text-blue-600">2. How We Use Your Information</h3>
                        <p>We may use the information we collect from you in the following
                            ways:</p>
                        <ul className="list-disc ml-5 space-y-2">
                            <li>
                                To personalize your experience on our website.
                            </li>
                            <li>
                                To improve our website based on your feedback.
                            </li>
                            <li>
                                To process transactions efficiently.
                            </li>
                            <li>
                                To send periodic emails regarding your order or other
                                products and services.
                            </li>
                            <li>
                                To administer a content, promotion, survey, or other site
                                feature.
                            </li>
                            <li>
                                To follow up with you after correspondance (live chat, email, or phone inquiries).
                            </li>
                        </ul>

                        <h2 className="text-lg md:text-2xl font-semibold text-blue-600">
                            3. How We Protect Your Information
                        </h2>
                        <p>
                            We implement a variety of a security measures to maintain
                            the safety of your personal information when you enter,
                            submit, or access your personal information. These measures
                            includes data encryption, Secure Socket Layers(SSL) technology, and
                            regular security assessments.
                        </p>

                        <h2 className="text-lg md:text-2xl font-semibold text-blue-600">
                            4. Disclosure of Information.
                        </h2>
                        <p>
                            We do not sell, trade, or otherwise transfer your personal
                            information to outside parties except to trusted third parties
                            who assist us in operating our website, conducting our business,
                            or servicing you, provided those parties agree to keep this 
                            information confidential. We may also release your information
                            when we believe release is appropriate to comply with the law,
                            enforce our site policies, or protect ours or other&apos; right,
                            property, or safety.
                        </p>

                        <h2 className="text-lg md:text-2xl font-semibold text-blue-600">
                            5. Third Party Links
                        </h2>
                        <p>
                            Our website may contain links to third-party websites. These
                            third-party sites have separate and independent privacy policies.
                            We, therefore, have no responsibility or liability for the content
                            and activities of these of these linked sites. Nonetheless, we seek
                            to protect the integrity of our site and welcome any feedback about these sites.
                        </p>

                        <h2 className="text-lg md:text-2xl font-semibold text-blue-600">
                            6. Cookies
                        </h2>
                        <p>
                            We use cookies to enhance your experience on our website. Cookies are small 
                            files that a site or its service provider transfers to your computer&apos;s 
                            hard drive through your web browser that enables the site&apos;s or service provider&apos;
                            s systems to recognize your browser and capture and remember certain information.
                            You can choose to have your computer warn you each time a cookie is being sent, or your
                            computer warn you each time a cookie is being sent, or you can
                            choose to turn off all cookies. If you disable cookies, some features of the site may 
                            not function properly. 
                        </p>

                        <h2 className="text-lg md:text-2xl font-semibold text-blue-600">
                            7. Changes to Our Privacy Policy
                        </h2>
                        <p>
                            We may update our Privacy Policy from time to time. Any Changes
                            will be posted on this page, and the date of the last revision 
                            will be updated at the top of the page. We encourage you to review
                            this Privacy Policy periodically to stay informed about how we are 
                            protecting your information.
                        </p>

                        <div className="mt-6  rounded-lg">
  <h2 className="text-lg md:text-2xl font-semibold text-blue-600 mb-4">8. Contact Us</h2>
  <p className="mb-2">
    If you have any questions regarding this Privacy Policy, you may contact us using the information below:
  </p>
  <div className="space-y-1">
    <p className="font-medium">Get Buyers</p>
    <p>Pune, India</p>
    <p>Email: <a href="mailto:abc@gmail.com" className="text-blue-600 underline">abc@gmail.com</a></p>
    <p>Phone: <a href="tel:+911111111111" className="text-blue-600">+91 11111 11111</a></p>
  </div>
</div>

<p className=" text-center md:text-lg">
Thank you for visiting our Website and trusting us with your personal information !!!
                    </p>

                    </section>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicy;
