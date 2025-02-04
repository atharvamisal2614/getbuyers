import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegLightbulb , FaShieldAlt,  FaChartBar, FaCalendarCheck, FaExclamationTriangle, FaRoute ,  FaBalanceScale} from "react-icons/fa";
import { IoMdSettings, IoMdGlobe } from "react-icons/io";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaMagnifyingGlassChart } from "react-icons/fa6";

const ExportImportData = () => {
  const features = [
    {
      icon: <BsGraphUpArrow size={40} className="text-blue-600" />,
      title: 'Identification of Opportunities',
      description: 'Export-import data helps business understand market trends by showing what products are in demand in diffrent regions. This allows companies to tailor their offerings to meet the specific needs of target markets.',
    },
    {
      icon: <FaRegLightbulb size={40} className="text-blue-600" />,
      title: 'Strategic Planning and Decision Making',
      description: 'Access to accurate export-import data enables business to make data-driven decisions. This includes deciding which markets to enter, which products to focus on, and how to allocate resources effectively.',
    },
    {
      icon: <FaShieldAlt size={40} className="text-blue-600" />,
      title: 'Risk Management and Compliance',
      description: 'Understanding the volume and value of traded goods can help business anticipate market fluctuations and adjust their strategies accordingly. This helps in minimizing risks associated with currency fluctuations, political instability, and supply chain disruptions.',
    },
    {
      icon: <FaChartBar size={40} className="text-blue-600" />,
      title: 'Competitor Analysis',
      description: 'Identifying major competitors helps businesses analyze market share and pricing strategies. Research industry reports, customer reviews, and finincial data to assess competitor strengths. Evaluate pricing, discounts, and branding to refine strategies and gain a competitive edge.',
    },

    
    {
      icon: <FaMagnifyingGlassChart size={40} className="text-blue-600" />,
      title: 'Trade Trend Analysis',
      description: 'Monitor fluctuations in import and export volumes over time to spot emerging trends and new opportunities. Analyzing trade patterns helps businesses adapt to market demands, optimize strategies, and stay competitive in a rapidly evolving global economy.',
    },


    {
      icon: <FaCalendarCheck size={40} className="text-blue-600" />,
      title: 'Business Planning',
      description: 'Utilize market data to make informed decisions on product development, pricing, and marketing strategies. Analyzing trends, consumer demand, and competitor insights helps business optimize offerings, maximize profitability, and stay ahead in the market.',
    },


    {
      icon: <FaExclamationTriangle size={40} className="text-blue-600" />,
      title: 'Avoiding Dangers',
      description: 'Understand import/export procedures across countries to identify potential trade regulation and customs compliance issues. Analyzing policies helps businesses avoid delays, reduce risks, and ensure smooth international transactions while maintaining legal compliance.',
    },

    {
      icon: <FaRoute size={40} className="text-blue-600" />,
      title: 'Logistic Optimization',
      description: 'Analyze trade data on ports and transportation to plan efficient shipping routes and logistics. Optimizing supply chains through data-driven insights reduces costs, improves delivery times, and enhances overall operationnal efficiency in global trade.',
    },

    {
      icon: <FaBalanceScale size={40} className="text-blue-600" />,
      title: 'Compliance with Regulations',
      description: 'Access accurate import and export requirements to ensure compliance with trade policies and customs regulations. Staying informed helps businesses avoid penalties, reduce delays, and streamline international transactions for smooth global operations.',
    },

    {
      icon: <IoMdSettings size={40} className="text-blue-600" />,
      title: 'Enhancing Operational Efficiency',
      description: 'By analyzing export-import data, businesses can identify the most efficient routes and logistics partners, leading to cost savings and improved delivery times. This optimization enhances overall operational efficiency.',
    },

    {
      icon: <HiMiniUserGroup size={40} className="text-blue-600" />,
      title: 'Improving Customer Relationships',
      description: 'Export-import data provides insights into customer preferences and buying behaviours in diffrent regions. This helps businesses tailor their marketing strategies and product offerings to better meet the needs of their customers.',
    },

    {
      icon: <IoMdGlobe size={40} className="text-blue-600" />,
      title: 'Foreign Buyers',
      description: 'Expand your business reach effortlessly by connecting with vetted international buyers and suppliers. Building reliable trade partnerships ensure growth, enhances market access, and creates new opportunities in the global marketplace.',
    },
  ];

  return (
    <section className="pb-4 py-24 bg-cyan-50">
      <div className="max-w-full px-5 py-6 mx-auto lg:px-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-8 italic">
        <span className="text-black">Why </span> Export Import Data <span className="text-black">Is Necessary</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{feature.title}</h3>
              <p className="text-gray-800 text-justify">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ExportImportData;
