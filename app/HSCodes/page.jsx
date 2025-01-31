import { GiWorld } from "react-icons/gi";
import { MdGavel } from "react-icons/md";
import { RiFileChartLine, RiShieldCheckLine } from "react-icons/ri";
import { FaTruckMoving } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import MultiLevelAccordion from "../components/MultiLevelAccordation";

const HSCodes = () => {
  const features = [
    {
      icon: <GiWorld size={40} className="text-blue-600" />,
      title: 'Facilitating International Trade',
      description: 'HS Codes provide a universal language for goods, simplifying communication between countries. Streamline customs procedures, ensuring correct classification, taxation and control.',
    },
    {
      icon: <MdGavel size={40} className="text-blue-600" />,
      title: 'Competitor Analysis',
      description: 'Identifying major competitors helps businesses analyze market share and pricing strategies. Research industry reports, customer reviews, and finincial data to assess competitor strengths. Evaluate pricing, discounts, and branding to refine strategies and gain a competitive edge.',
    },
    {
      icon: <RiFileChartLine size={40} className="text-blue-600" />,
      title: 'Trade Trend Analysis',
      description: 'Monitor fluctuations in import and export volumes over time to spot emerging trends and new opportunities. Analyzing trade patterns helps businesses adapt to market demands, optimize strategies, and stay competitive in a rapidly evolving global economy.',
    },
    // {
    //   icon: <RiShieldCheckLine size={40} className="text-blue-600" />,
    //   title: 'Business Planning',
    //   description: 'Utilize market data to make informed decisions on product development, pricing, and marketing strategies. Analyzing trends, consumer demand, and competitor insights helps business optimize offerings, maximize profitability, and stay ahead in the market.',
    // },
    // {
    //   icon: <FaTruckMoving size={40} className="text-blue-600" />,
    //   title: 'Avoiding Dangers',
    //   description: 'Understand import/export procedures across countries to identify potential trade regulation and customs compliance issues. Analyzing policies helps businesses avoid delays, reduce risks, and ensure smooth international transactions while maintaining legal compliance.',
    // },
    // {
    //   icon: <BsGraphUpArrow size={40} className="text-blue-600" />,
    //   title: 'Logistic Optimization',
    //   description: 'Analyze trade data on ports and transportation to plan efficient shipping routes and logistics. Optimizing supply chains through data-driven insights reduces costs, improves delivery times, and enhances overall operationnal efficiency in global trade.',
    // },
  ];

  return (
    <section className="pb-4 py-24 bg-cyan-50">
      <div className="max-w-full px-5 py-6 mx-auto lg:px-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-8 italic">
        <span className="text-black">Why </span> HS Codes <span className="text-black"> are Important</span>
        </h2>

        {/* Continue from here, change icons and content and add 10 sections. */}

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

      {/* <MultiLevelAccordion /> */}
    </section>
  );
};
export default HSCodes;
