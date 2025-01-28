import { FaGlobe, FaHandshake, FaShieldAlt, FaClock, FaNetworkWired, FaUsers } from 'react-icons/fa';

const WhyUs = () => {
  const features = [
    {
      icon: <FaUsers size={40} className="text-blue-600" />,
      title: 'Foreign Buyers',
      description: 'Connect with vetted international buyers to expand your business reach effortlessly.',
    },
    {
      icon: <FaHandshake size={40} className="text-blue-600" />,
      title: 'Foreign Suppliers',
      description: 'Gain access to reliable suppliers worldwide for seamless sourcing.',
    },
    {
      icon: <FaShieldAlt size={40} className="text-blue-600" />,
      title: 'Risk Mitigation',
      description: 'Minimize risks with secure partnerships and trusted compliance measures.',
    },
    {
      icon: <FaClock size={40} className="text-blue-600" />,
      title: 'Timely Action',
      description: 'Ensure timely decisions and quick responses to changing market trends.',
    },
    {
      icon: <FaGlobe size={40} className="text-blue-600" />,
      title: 'Global Coverage',
      description: 'Leverage our global network to reach new markets and opportunities.',
    },
    {
      icon: <FaNetworkWired size={40} className="text-blue-600" />,
      title: 'Nexus-Multilevel',
      description: 'Enjoy seamless multilevel connections for optimal business growth.',
    },
  ];

  return (
    <section className="pb-4 py-16">
      <div className="max-w-7xl px-5 py-6 mx-auto lg:px-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-8">
          Get Buyers: <span className="text-black italic">The Perfect Choice</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
